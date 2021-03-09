<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ShippingRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ShippingRepository::class)
 * @ORM\Table("oberlo_shipping")
 */
class Shipping
{
    /**
     * @ORM\Column(type="string", length=255)
     */
    private $company;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, length=255)
     */
    private $price;

    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $deliveryTime;

    /**
     * @ORM\Id
     * @ORM\Column(type="string", length=255)
     */
    private $country;

    /**
     * @ORM\Column(type="json")
     */
    private $price_moneybag = [];

    /**
     * @ORM\Id
     * @ORM\ManyToOne(targetEntity=OberloProduct::class, inversedBy="shippings")
     */
    private $oberloProduct;



    public function __construct()
    {

    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCompany(): ?string
    {
        return $this->company;
    }

    public function setCompany(string $company): self
    {
        $this->company = $company;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDeliveryTime(): ?string
    {
        return $this->deliveryTime;
    }

    public function setDeliveryTime(string $deliveryTime): self
    {
        $this->deliveryTime = $deliveryTime;

        return $this;
    }

    public function getCountry(): ?string
    {
        return $this->country;
    }

    public function setCountry(string $country): self
    {
        $this->country = $country;

        return $this;
    }

    public function getPriceMoneybag(): ?array
    {
        return $this->price_moneybag;
    }

    public function setPriceMoneybag(array $price_moneybag): self
    {
        $this->price_moneybag = $price_moneybag;

        return $this;
    }

    public function getOberloProduct(): ?OberloProduct
    {
        return $this->oberloProduct;
    }

    public function setOberloProduct(?OberloProduct $oberloProduct): self
    {
        $this->oberloProduct = $oberloProduct;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getPrice()
    {
        return $this->price;
    }

    /**
     * @param mixed $price
     */
    public function setPrice($price): void
    {
        $this->price = $price;
    }
}
