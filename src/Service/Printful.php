<?php


namespace App\Service;


use App\Entity\Printful\AvailabilityStatus;
use App\Entity\Printful\FileType;
use App\Entity\Printful\OptionType;
use App\Entity\Printful\Product;
use App\Entity\Printful\Shop;
use App\Entity\Printful\Variant;
use Doctrine\ORM\EntityManagerInterface;
use JMS\Serializer\SerializerBuilder;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Exception;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;

/**
 * @Route("/printfulservice", name="printfulservice_")
 * @return array|string
 */
class Printful
{
    private const BASE_URL = "https://api.printful.com/";

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
        $this->addHeaders("Authorization", "Basic " . $this->security->getUser()->getApikeys()->get(1)["printful_apikey"]);
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
     * @return Printful
     */
    public function setHeaders(array $headers): Printful
    {
        $this->headers = $headers;
        return $this;
    }

    /**
     * @param string $index
     * @param string $value
     * @return Printful
     */
    public function addHeaders(string $index, string $value): Printful
    {
        $this->headers[$index] = $value;
        return $this;
    }

    /**
     * @Route("/retrieveproductlist", name="retrieveproductlist")
     * @return array|string
     */
    public function retrieveproductlist()
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $productlist = array();
        try {
            $response = $client->request('GET', 'https://api.printful.com/products');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize(json_encode(json_decode($content)->result), 'array<App\Entity\Printful\Product>', 'json');

            foreach ($content as $oneproduct) {
                $productlist[] = $this->saveProduct($oneproduct);
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

        return $productlist;
    }

    /**
     * @Route("/retrievevariantlist", name="retrievevariantlist")
     * @param Product $product
     * @return array|string
     */
    public function retrievevariantlist(Product $product)
    {
        $client = HttpClient::createForBaseUri(self::BASE_URL, ['headers' => $this->getHeaders()]);
        $productlist = array();
        $variantlist = array();
        try {
            $response = $client->request('GET', 'https://api.printful.com/products/'.$product->getId());
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();
            $serializer = SerializerBuilder::create()->build();
            $content = $serializer->deserialize(json_encode(json_decode($content)->result->variants), 'array<App\Entity\Printful\Variant>', 'json');

            foreach ($content as $onevariant) {
                $variantlist[] = $this->saveVariant($onevariant);
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
            $response = $client->request('GET', 'https://api.printful.com/store');
            $statusCode = $response->getStatusCode();
            $contentType = $response->getHeaders()['content-type'][0];
            $content = $response->getContent();

            $serializer = SerializerBuilder::create()->build();
            $oneshop = $serializer->deserialize(json_encode(json_decode($content)->result), 'App\Entity\Printful\Shop', 'json');


                $recupShop = $this->em->getRepository(Shop::class)->find($oneshop->getId());

                if ($recupShop == null) {
                    $oneshop->setUser($this->security->getUser());
                    $this->em->persist($oneshop);
                    $shoplist[] = $oneshop;

                } else {
                    $recupShop->setName($oneshop->getName());
                    $recupShop->setType($oneshop->getType());
                    $recupShop->setCurrency($oneshop->getCurrency());
                    $recupShop->setCreated($oneshop->getCreated());
                    $recupShop->setUser($this->security->getUser());
                    $recupShop->setWebsite($oneshop->getWebsite());
                    $this->em->persist($recupShop);
                    $shoplist[] = $recupShop;
                }
                $this->em->flush();



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
     * @param Product $product
     * @return Product
     */
    public function saveProduct(Product $product): Product
    {
        $recupProduct = $this->em->getRepository(Product::class)->find($product->getId());

        if (null == $recupProduct) {
            $recupProduct = New Product();
            $recupProduct->setId($product->getId());
        }

        $recupProduct->setType($product->getType());
        $recupProduct->setTypeName($product->getTypeName());
        $recupProduct->setBrand($product->getBrand());
        $recupProduct->setModel($product->getModel());
        $recupProduct->setImage($product->getImage());
        $recupProduct->setVariantCount($product->getVariantCount());
        $recupProduct->setCurrency($product->getCurrency());
        $recupProduct->setDimensions($product->getDimensions());
        $recupProduct->setIsDiscontinued($product->getIsDiscontinued());
        $recupProduct->setAvgFulfillmentTime($product->getAvgFulfillmentTime());
        $recupProduct->setDescription($product->getDescription());

        $this->em->persist($recupProduct);
        $this->em->flush();

        foreach ($product->getFiles() as $file) {
            if(null != $file){
                $recupProduct->addFile($this->saveFile($file));
            }
        }
        foreach ($product->getOptions() as $option) {
            if(null != $option) {
                $recupProduct->addOption($this->saveOption($option));
            }
        }

        $this->em->persist($recupProduct);
        $this->em->flush();

        return $recupProduct;
    }

    /**
     * @param FileType $file
     * @return FileType
     */
    public function saveFile(FileType $file): FileType
    {
        $recupFile = $this->em->getRepository(FileType::class)->findOneBy([
            'fileid' => $file->getFileid(),
            'type' => $file->getType(),
            'title' => $file->getTitle(),
            'additional_price' => $file->getAdditionalPrice()
        ]);

        if ($recupFile == null) {
            $recupFile = New FileType();
        }

        $recupFile->setFileid($file->getFileid());
        $recupFile->setType($file->getType());
        $recupFile->setTitle($file->getTitle());
        $recupFile->setAdditionalPrice($file->getAdditionalPrice());

        $this->em->persist($recupFile);
        $this->em->flush();

        return $recupFile;
    }

    /**
     * @param OptionType $option
     * @return OptionType
     */
    public function saveOption(OptionType $option): OptionType
    {
        $recupOption = $this->em->getRepository(OptionType::class)->findOneBy([
            'optionid' => $option->getOptionid(),
            'title' => $option->getTitle(),
            'type' => $option->getType()
        ]);

        if ($recupOption == null) {
            $recupOption = New OptionType();
        }

        $recupOption->setOptionid($option->getOptionid());
        $recupOption->setType($option->getType());
        $recupOption->setTitle($option->getTitle());
        $recupOption->setAdditionalPrice($option->getAdditionalPrice());
        $recupOption->setAdditionalPriceBreakdown($option->getAdditionalPriceBreakdown());
        $recupOption->setOptionValues($option->getOptionValues());

        $this->em->persist($recupOption);
        $this->em->flush();

        return $recupOption;
    }

    /**
     * @param Variant $variant
     * @return Variant
     */
    public function saveVariant(Variant $variant): Variant
    {
        $recupVariant = $this->em->getRepository(Variant::class)->find($variant->getId());

        if (null == $recupVariant) {
            $recupVariant = New Variant();
            $recupVariant->setId($variant->getId());
        }

        $recupVariant->setProductId($variant->getProductId());
        $recupVariant->setName($variant->getName());
        $recupVariant->setSize($variant->getSize());
        $recupVariant->setColor($variant->getColor());
        $recupVariant->setColorCode($variant->getColorCode());
        $recupVariant->setColorCode2($variant->getColorCode2());
        $recupVariant->setImage($variant->getImage());
        $recupVariant->setPrice($variant->getPrice());
        $recupVariant->setInStock($variant->getInStock());
        $recupVariant->setAvailabilityRegions($variant->getAvailabilityRegions());

        $this->em->persist($recupVariant);
        $this->em->flush();

        foreach ($variant->getAvailabilityStatus() as $availabilityStatus) {
            //var_dump($availabilityStatus);
            if(null != $availabilityStatus){
                $availabilityStatus->setVariant($recupVariant);
                $recupVariant->addAvailabilityStatus($this->saveAvailabilityStatus($availabilityStatus));
            }
        }

        $this->em->persist($recupVariant);
        $this->em->flush();

        return $recupVariant;
    }

    /**
     * @param AvailabilityStatus $availabilityStatus
     * @return AvailabilityStatus
     */
    public function saveAvailabilityStatus(AvailabilityStatus $availabilityStatus): AvailabilityStatus
    {
        $recupAvailabilityStatus = $this->em->getRepository(AvailabilityStatus::class)->findOneBy([
            'variant' => $availabilityStatus->getVariant(),
            'region' => $availabilityStatus->getRegion(),
            'status' => $availabilityStatus->getStatus()
        ]);

        if ($recupAvailabilityStatus == null) {
            $recupAvailabilityStatus = New AvailabilityStatus();
        }

        $recupAvailabilityStatus->setVariant($availabilityStatus->getVariant());
        $recupAvailabilityStatus->setRegion($availabilityStatus->getRegion());
        $recupAvailabilityStatus->setStatus($availabilityStatus->getStatus());

        $this->em->persist($recupAvailabilityStatus);
        $this->em->flush();

        return $recupAvailabilityStatus;
    }


}