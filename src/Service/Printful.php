<?php


namespace App\Service;


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
        $this->addHeaders("Authorization", "Bearer " . $this->security->getUser()->getApikeys()->get(0)["printful_apikey"]);
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

//            $serializer = SerializerBuilder::create()->build();
//            $content = $serializer->deserialize(json_encode(json_decode($content)->data), 'array<App\Entity\Printify\Product>', 'json');

//            foreach ($content as $oneproduct) {
//                $productlist[] = $this->saveProduct($oneproduct);
//            }

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

}