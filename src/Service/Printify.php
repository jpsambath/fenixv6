<?php


namespace App\Service;


use App\Entity\Printify\Blueprint;
use App\Entity\Printify\Image;
use App\Entity\Printify\Location;
use App\Entity\Printify\Mockup;
use App\Entity\Printify\Placeholder;
use App\Entity\Printify\Printarea;
use App\Entity\Printify\Product;
use App\Entity\Printify\Profile;
use App\Entity\Printify\Provider;
use App\Entity\Printify\Shipping;
use App\Entity\Printify\Shop;
use App\Entity\Printify\Upload;
use App\Entity\Printify\Variant;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

/**
 * @Route("/printifyservice", name="printifyservice_")
 * @return array|string
 */
class Printify
{
    private const BASE_URL = "https://api.printify.com/";

    private $headers = [];

    private $em;

    private $security;

    /**
     * Printify constructor.
     * @param Security $security
     * @param EntityManagerInterface $em
     */
    public function __construct(Security $security, EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->security = $security;
        $this->headers = array();
        $this->addHeaders("Authorization", "Bearer " . $this->security->getUser()->getApikeys()->get(0)["printify_apikey"]);
        $this->addHeaders("Content-Type", "application/json");
    }

    /**
     * @return array
     */
    public function getHeaders(): array
    {
        return $this->headers;
    }

    /**
     * @param array $headers
     * @return Printify
     */
    public function setHeaders(array $headers): Printify
    {
        $this->headers = $headers;
        return $this;
    }

    /**
     * @param string $index
     * @param string $value
     * @return Printify
     */
    public function addHeaders(string $index, string $value): Printify
    {
        $this->headers[$index] = $value;
        return $this;
    }


    /**
     * @param $filename
     * @param $url
     * @return mixed
     */
    public function uploadimage($filename, $url): Upload
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $createdupload = new Upload();

        try {
            $response = $client->request('POST', 'https://api.printify.com/v1/uploads/images.json', [
                'body' => '{"file_name": "' . $filename . '", "url": "' . $url . '"}'
            ]);
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();


            $serializer = SerializerBuilder::create()->build();
            $createdupload = $serializer->deserialize($content, 'App\Entity\Printify\Upload', 'json');
            // ICI UPLOAD OU IMAGE TRANSFER
            $this->saveUpload($createdupload);


        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $createdupload;
    }

    /**
     * @param $shopid
     * @param Product $producttocreate
     * @return Product
     */
    public function createproduct($shopid, Product $producttocreate): Product
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $createdproduct = new Product();
        $serializer = SerializerBuilder::create()->build();
        $jsonproducttocreate = $serializer->serialize($producttocreate, 'json', SerializationContext::create()->setGroups(["createproduct"]));

        try {
            $response = $client->request('POST', 'https://api.printify.com/v1/shops/' . $shopid . '/products.json', [
                'body' => $jsonproducttocreate
            ]);
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $createdproduct = $serializer->deserialize($content, 'App\Entity\Printify\Product', 'json');

            $this->saveProduct($createdproduct);

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $createdproduct;
    }


    /**
     * @Route("/retrieveshoplist", name="retrieveshoplist")
     * @return array|string
     */
    public function retrieveshoplist()
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $shop = new Shop();
        $shoplist = array();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/shops.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize($content, 'array<App\Entity\Printify\Shop>', 'json');


            foreach ($content as $oneshop) {
                $recupShop = $this->em->getRepository(Shop::class)->findById($oneshop->getId());

                if ($recupShop == null) {
                    $oneshop->setUser($this->security->getUser());
                    $oneshop->setPlatform('Printify');
                    $this->em->persist($oneshop);
                    $shoplist[] = $oneshop;

                } else {
                    $recupShop->setUser($this->security->getUser());
                    $recupShop->setPlatform('Printify');
                    $recupShop->setTitle($oneshop->getTitle());
                    $this->em->persist($recupShop);
                    $shoplist[] = $recupShop;
                }
                $this->em->flush();
            }


        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $shoplist;
    }

    /**
     * @Route("/retrieveproductlist", name="retrieveproductlist")
     * @param $shopid
     * @param int $pagenumber
     * @return array|string
     */
    public function retrieveproductlist($shopid, $pagenumber = 1)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $productlist = array();
        $result = array();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/shops/' . $shopid . '/products.json?page=' . $pagenumber);
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();
            $last_page = json_decode($content)->last_page;
            $total_product = json_decode($content)->total;
            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize(json_encode(json_decode($content)->data), 'array<App\Entity\Printify\Product>', 'json');


            foreach ($content as $oneproduct) {
                $productlist[] = $this->saveProduct($oneproduct);
            }

            $result = array();
            $result[0] = $total_product;
            $result[1] = $last_page;
            $result[2] = $productlist;

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $result;
    }

    /**
     * @Route("/retrieveblueprintlist", name="retrieveblueprintlist")
     * @return array|string
     */
    public function retrieveblueprintlist()
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $blueprint = new Blueprint();
        $blueprintlist = array();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/blueprints.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize($content, 'array<App\Entity\Printify\Blueprint>', 'json');

            foreach ($content as $oneblueprint) {
                $blueprintlist[] = $this->saveBlueprint($oneblueprint);
            }

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $blueprintlist;
    }

    /**
     * @Route("/retrieveproviderlist", name="retrieveproviderlist")
     * @return array|string
     */
    public function retrieveproviderlist()
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $provider = new Provider();
        $providerlist = array();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/print_providers.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize($content, 'array<App\Entity\Printify\Provider>', 'json');

            foreach ($content as $oneprovider) {
                $providerlist[] = $this->saveProvider($oneprovider);
            }

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $providerlist;
    }

    /**
     * @Route("/retrieveprovider", name="retrieveprovider")
     * @return array|string
     */
    public function retrieveprovider($providerid)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $provider = new Provider();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/print_providers/' . $providerid . '.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $provider = $serializer->deserialize($content, Provider::class, 'json');

            $this->saveProvider($provider);

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $provider;
    }

    /**
     * @Route("/retrieveblueprintprovider", name="retrieveblueprintprovider")
     * @return array|string
     */
    public function retrieveblueprintprovider($blueprintid)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $recupBlueprint = $this->em->getRepository(Blueprint::class)->findById($blueprintid);
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/blueprints/' . $blueprintid . '/print_providers.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();
            $content = $response->toArray();

            foreach ($content as $fakeprovider) {
                $recupProvider = $this->em->getRepository(Provider::class)->findById($fakeprovider['id']);
                $recupBlueprint->addProvider($recupProvider);
            }
            $this->saveBlueprint($recupBlueprint);

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $recupBlueprint;
    }

    /**
     * @Route("/blueprintforshop/{shopid}/{blueprintid}", name="blueprintforshop")
     * @ParamConverter("shop", options={"mapping": {"shopid" : "id"}})
     * @ParamConverter("blueprint", options={"mapping": {"blueprintid"   : "id"}})
     * @param Shop $shop
     * @param Blueprint $blueprint
     * @return array|string
     */
    public function blueprintforshop(Shop $shop, Blueprint $blueprint)
    {
        $shop = $this->em->getRepository(Shop::class)->findById($shop->getId());
        $blueprint = $this->em->getRepository(Blueprint::class)->findById($blueprint->getId());

        foreach ($shop->getBlueprints() as $key => $compareblueprint) {
            if ($compareblueprint->getId() == $blueprint->getId()) {
                unset($shop->getBlueprints()[$key]);
                $this->em->flush();
                return new Response("Blueprint " . $blueprint->getTitle() . " removed from " . $shop->getTitle());
            }
        }
        $shop->addBlueprint($blueprint);
        $this->em->flush();
        return new Response("Blueprint " . $blueprint->getTitle() . " added to " . $shop->getTitle());
    }

    /**
     * @return array|string
     */
    public function retrievevariants($blueprintid, $providerid)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $blueprint = new Blueprint();
        $variantlist = array();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/blueprints/' . $blueprintid . '/print_providers/' . $providerid . '/variants.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $blueprint = $serializer->deserialize($content, Blueprint::class, 'json');

            $recupBlueprint = $this->em->getRepository(Blueprint::class)->findById($blueprintid);
            $recupProvider = $this->em->getRepository(Provider::class)->findById($providerid);
            foreach ($blueprint->getVariants() as $variant) {
                $variant->setBlueprint($recupBlueprint);
                $variant->setProvider($recupProvider);

                $variantlist[] = $this->saveVariant($variant);
            }

        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $variantlist;
    }

    /**
     * @return array|string
     */
    public function retrieveshipping($blueprintid, $providerid)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $content = '';
        $shipping = new Shipping();
        try {
            $response = $client->request('GET', 'https://api.printify.com/v1/catalog/blueprints/' . $blueprintid . '/print_providers/' . $providerid . '/shipping.json');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $shipping = $serializer->deserialize($content, Shipping::class, 'json');

            $recupBlueprint = $this->em->getRepository(Blueprint::class)->findById($blueprintid);
            $recupProvider = $this->em->getRepository(Provider::class)->findById($providerid);

            $shipping->setBlueprint($recupBlueprint);
            $shipping->setProvider($recupProvider);

            foreach ($shipping->getProfiles() as $profile) {
                $profile->setShipping($this->saveShipping($shipping));
                $this->saveProfile($profile);
            }


        } catch (Exception $e) {
            echo($e->getMessage());
        } catch (TransportExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ClientExceptionInterface $e) {
            echo($e->getMessage());
        } catch (RedirectionExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ServerExceptionInterface $e) {
            echo($e->getMessage());
        } catch (DecodingExceptionInterface $e) {
            echo($e->getMessage());
        } catch (ExceptionInterface $e) {
            echo($e->getMessage());
        }

        return $shipping;
    }



    /** SAVE FUNCTION */

    /**
     * @param Upload $upload
     * @return Upload
     */
    public function saveUpload(Upload $upload): Upload
    {
        $recupUpload = $this->em->getRepository(Upload::class)->find($upload->getId());
        if ($recupUpload == null) {
            $recupUpload = New Upload();
            $recupUpload->setId($upload->getId());
        }

        $recupUpload->setFileName($upload->getFileName());
        $recupUpload->setHeight($upload->getHeight());
        $recupUpload->setWidth($upload->getWidth());
        $recupUpload->setSize($upload->getSize());
        $recupUpload->setMimeType($upload->getMimeType());
        $recupUpload->setPreviewUrl($upload->getPreviewUrl());
        $recupUpload->setUploadTime($upload->getUploadTime());

        $this->em->persist($recupUpload);
        $this->em->flush();

        return $recupUpload;
    }

    /**
     * @param Product $product
     * @return Product
     */
    public function saveProduct(Product $product): Product
    {
        $recupProduct = $this->em->getRepository(Product::class)->find($product->getId());
        $recupBlueprint = $this->em->getRepository(Blueprint::class)->find($product->getBlueprintId());
        $recupProvider = $this->em->getRepository(Provider::class)->find($product->getPrintProviderId());
        if ($recupProduct == null) {
            $recupProduct = New Product();
            $recupProduct->setId($product->getId());
        }

        $recupProduct->setTitle($product->getTitle());
        $recupProduct->setDescription($product->getDescription());
        $recupProduct->setExternal($product->getExternal());
        $recupProduct->setCreatedAt($product->getCreatedAt());
        $recupProduct->setUpdateAt($product->getUpdateAt());
        $recupProduct->setIsLocked($product->getIsLocked());
        $recupProduct->setOptions($product->getOptions());
        $recupProduct->setPrintDetails($product->getPrintDetails());
        $recupProduct->setBlueprintId($product->getBlueprintId());
        $recupProduct->setPrintProviderId($product->getPrintProviderId());
        $recupProduct->setTags($product->getTags());

        $this->em->persist($recupProduct);
        $this->em->flush();

        foreach ($product->getPrintAreas() as $print_area) {
            $print_area->setProduct($recupProduct);
            $recupProduct->addPrintarea($this->savePrintarea($print_area));
        }
        foreach ($product->getVariants() as $variant) {
            $variant->setProvider($recupProvider);
            $variant->setBlueprint($recupBlueprint);
            $recupProduct->addVariant($this->saveVariant($variant));
        }

        foreach ($product->getMockups() as $mockup) {
            $mockup->setProduct($recupProduct);
            $recupProduct->addMockup($this->saveMockup($mockup));
        }

        $this->em->persist($recupProduct);
        $this->em->flush();

        return $recupProduct;
    }

    /**
     * @param Printarea $print_area
     * @return Printarea
     */
    public function savePrintarea(Printarea $print_area): Printarea
    {
        $recupPrintarea = $this->em->getRepository(Printarea::class)->findOneByVariantIdsProduct($print_area->getVariantIds(), $print_area->getProduct());

        if ($recupPrintarea == null) {
            $recupPrintarea = New Printarea();
        }

        $recupPrintarea->setVariantIds($print_area->getVariantIds());
        $recupPrintarea->setProduct($print_area->getProduct());
        $recupPrintarea->setFontColor($print_area->getFontColor());
        $recupPrintarea->setFontFamily($print_area->getFontFamily());
        $recupPrintarea->setBackground($print_area->getBackground());

        if ($print_area->getPlaceholders() != null) {
            foreach ($print_area->getPlaceholders() as $placeholder) {
                if ($placeholder->getHeight() != null or $placeholder->getWidth() != null or !$placeholder->getImages()->isEmpty()) {
                    $recupPrintarea->addPlaceholder($this->savePlaceholder($placeholder));
                }
            }
        }

        $this->em->persist($recupPrintarea);
        $this->em->flush();


        return $recupPrintarea;
    }

    /**
     * @param Mockup $mockup
     * @return Mockup
     */
    public function saveMockup(Mockup $mockup): Mockup
    {
        $recupMockup = $this->em->getRepository(Mockup::class)->findOneBySrcProduct($mockup->getSrc(), $mockup->getProduct());

        if ($recupMockup == null) {
            $recupMockup = New Mockup();
        }

        $recupMockup->setProduct($mockup->getProduct());
        $recupMockup->setPosition($mockup->getPosition());
        $recupMockup->setIsDefault($mockup->getIsDefault());
        $recupMockup->setVariantIds($mockup->getVariantIds());
        $recupMockup->setSrc($mockup->getSrc());

        $this->em->persist($recupMockup);
        $this->em->flush();

        return $recupMockup;
    }

    /**
     * @param Shipping $shipping
     * @return Shipping
     */
    public function saveShipping(Shipping $shipping): Shipping
    {
        $recupShipping = $this->em->getRepository(Shipping::class)->findOneBy(['blueprint' => $shipping->getBlueprint(), 'provider' => $shipping->getProvider()]);
        $recupBlueprint = $this->em->getRepository(Blueprint::class)->findById($shipping->getBlueprint()->getId());
        $recupProvider = $this->em->getRepository(Provider::class)->findById($shipping->getProvider()->getId());
        if ($recupShipping == null) {
            $recupShipping = New Shipping();
        }

        $recupShipping->setHandlingTime($shipping->getHandlingTime());
        $recupShipping->setBlueprint($recupBlueprint);
        $recupShipping->setProvider($recupProvider);

        $this->em->persist($recupShipping);
        $this->em->flush();

        return $recupShipping;
    }

    /**
     * @param Profile $profile
     * @return Profile
     */
    public function saveProfile(Profile $profile): Profile
    {
        $recupProfile = $this->em->getRepository(Profile::class)->findOneBy(['variant_ids' => $profile->getVariantIds(), 'first_item' => $profile->getFirstItem(), 'countries' => $profile->getCountries()]);

        if ($recupProfile == null) {
            $recupProfile = New Profile();
        }

        $recupProfile->setVariantIds($profile->getVariantIds());
        $recupProfile->setFirstItem($profile->getFirstItem());
        $recupProfile->setAdditionalItems($profile->getAdditionalItems());
        $recupProfile->setCountries($profile->getCountries());
        $recupProfile->setShipping($this->saveShipping($profile->getShipping()));

        $this->em->persist($recupProfile);
        $this->em->flush();


        return $recupProfile;
    }

    /**
     * @param Location $location
     * @return Location
     */
    public function saveLocation(Location $location): Location
    {
        $recupLocation = $this->em->getRepository(Location::class)->findByAddress1($location->getAddress1());
        if ($recupLocation == null) {
            $recupLocation = New Location();
            $recupLocation->setId($location->getId());
        }
        $recupLocation->setAddress1($location->getAddress1());
        $recupLocation->setAddress2($location->getAddress2());
        $recupLocation->setRegion($location->getRegion());
        $recupLocation->setCity($location->getCity());
        $recupLocation->setZip($location->getZip());
        $recupLocation->setCountry($location->getCountry());
        $this->em->persist($recupLocation);
        $this->em->flush();
        return $recupLocation;
    }

    /**
     * @param Blueprint $blueprint
     * @return Blueprint
     */
    public function saveBlueprint(Blueprint $blueprint): Blueprint
    {
        $recupBlueprint = $this->em->getRepository(Blueprint::class)->findById($blueprint->getId());
        if ($recupBlueprint == null) {
            $recupBlueprint = New Blueprint();
            $recupBlueprint->setId($blueprint->getId());
        }
        $recupBlueprint->setTitle($blueprint->getTitle());
        $recupBlueprint->setBrand($blueprint->getBrand());
        $recupBlueprint->setDescription($blueprint->getDescription());
        $recupBlueprint->setImages($blueprint->getImages());
        $recupBlueprint->setModel($blueprint->getModel());

        if ($blueprint->getProviders() != null) {
            foreach ($blueprint->getProviders() as $provider) {
                $provider->addBlueprint($recupBlueprint);
                $recupBlueprint->addProvider($this->saveProvider($provider));
            }
        }

        $this->em->persist($recupBlueprint);
        $this->em->flush();
        return $recupBlueprint;
    }

    /**
     * @param Provider $provider
     * @return Provider
     */
    public function saveProvider(Provider $provider): Provider
    {
        $recupProvider = $this->em->getRepository(Provider::class)->findById($provider->getId());
        if ($recupProvider == null) {
            $recupProvider = New Provider();
            $recupProvider->setId($provider->getId());
        }
        $recupProvider->setTitle($provider->getTitle());
        $recupProvider->setLocation($this->saveLocation($provider->getLocation()));
        if ($provider->getBlueprints() != null) {
            foreach ($provider->getBlueprints() as $blueprint) {
                $recupProvider->addBlueprint($blueprint);
            }
        }
        $this->em->persist($recupProvider);
        $this->em->flush();
        return $recupProvider;
    }

    /**
     * @param Variant $variant
     * @return Variant
     */
    public function saveVariant(Variant $variant): Variant
    {
        $recupVariant = $this->em->getRepository(Variant::class)->findOneByIdBlueprintProvider($variant->getId(), $variant->getBlueprint(), $variant->getProvider());
        $recupBlueprint = $this->em->getRepository(Blueprint::class)->find($variant->getBlueprint()->getId());
        $recupProvider = $this->em->getRepository(Provider::class)->find($variant->getProvider()->getId());
        if ($recupVariant == null) {
            $recupVariant = New Variant();
            $recupVariant->setId($variant->getId());
        }

        $recupVariant->setTitle($variant->getTitle());
        $recupVariant->setOptions($variant->getOptions());
        $recupVariant->setBlueprint($recupBlueprint);
        $recupVariant->setProvider($recupProvider);

        if ($variant->getPlaceholders() != null) {
            foreach ($variant->getPlaceholders() as $placeholder) {
                if ($placeholder->getHeight() != null or $placeholder->getWidth() != null or !$placeholder->getImages()->isEmpty()) {
                    $recupVariant->addPlaceholder($this->savePlaceholder($placeholder));
                    //$variant->addPlaceholder($placeholder);
                }
            }
        }

        $this->em->persist($recupVariant);
        $this->em->flush();

        return $recupVariant;
    }

    /**
     * @param Placeholder $placeholder
     * @return Placeholder
     */
    public function savePlaceholder(Placeholder $placeholder): Placeholder
    {

        $recupPlaceholder = $this->em->getRepository(Placeholder::class)->findOneByPositionHeightWeight($placeholder->getPosition(), $placeholder->getHeight(), $placeholder->getWidth());

        if ($recupPlaceholder == null) {
            $recupPlaceholder = New Placeholder();
        }

        $recupPlaceholder->setPosition($placeholder->getPosition());
        $recupPlaceholder->setHeight($placeholder->getHeight());
        $recupPlaceholder->setWidth($placeholder->getWidth());

        if ($placeholder->getImages() != null) {
            foreach ($placeholder->getImages() as $image) {
                $recupPlaceholder->addImage($this->saveImage($image));
            }
        }

        $this->em->persist($recupPlaceholder);
        $this->em->flush();

        return $recupPlaceholder;
    }

    /**
     * @param Image $image
     * @return Image
     */
    public function saveImage(Image $image): Image
    {

        $recupImage = $this->em->getRepository(Image::class)->find($image->getId());

        if ($recupImage == null) {
            $recupImage = New Image();
            $recupImage->setId($image->getId());
        }

        $recupImage->setWidth($image->getWidth());
        $recupImage->setHeight($image->getHeight());
        $recupImage->setAngle($image->getAngle());
        $recupImage->setScale($image->getScale());
        $recupImage->setY($image->getY());
        $recupImage->setX($image->getX());
        $recupImage->setName($image->getName());
        $recupImage->setType($image->getType());

        $this->em->persist($recupImage);
        $this->em->flush();

        return $recupImage;
    }

}