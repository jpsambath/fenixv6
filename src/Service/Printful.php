<?php


namespace App\Service;


use App\Entity\Printful\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpClient\HttpClient;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;

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

            var_dump($content);

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
     * @param Product $product
     * @return Product
     */
    public function saveProduct(Product $product): Product
    {
        $recupProduct = $this->em->getRepository(Product::class)->find($product->getId());

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


}