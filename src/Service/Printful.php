<?php


namespace App\Service;


use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

/**
 * @Route("/printfulservice", name="printfulservice_")
 * @return array|string
 */
class Printful
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
        $this->addHeaders("Authorization", "Bearer " . $this->security->getUser()->getPrintifyApikey());
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
     * @return Printify
     */
    public function addHeaders(string $index, string $value): Printful
    {
        $this->headers[$index] = $value;
        return $this;
    }



}