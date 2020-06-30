<?php


namespace App\Service;


use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\Security;

class Printful
{
    private const BASE_URL = "https://api.printify.com/";

    private $headers = [];

    private $em;

    private $security;

    /**
     * Printify constructor.
     * @param Security $security
     * @param ObjectManager $em
     */
    public function __construct(Security $security, EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->security = $security;
        $this->headers = array();
        $this->addHeaders("Authorization", "Bearer " . $this->security->getUser()->get());
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
}