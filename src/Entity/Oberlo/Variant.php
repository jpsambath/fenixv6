<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\VariantRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=VariantRepository::class)
 * @ORM\Table("oberlo_variant")
 */
class Variant
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $sku;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $is_use;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $compare_price;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $price;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $cost;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $weight;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_gone;

    /**
     * @ORM\Column(type="integer")
     */
    private $stock;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $option1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $option2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $option3;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $price_moneybag = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $compare_price_moneybag = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $cost_moneybag = [];

    /**
     * @ORM\ManyToOne(targetEntity=Product::class, inversedBy="variants")
     * @ORM\JoinColumn(onDelete="CASCADE")
     */
    private $product;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSku(): ?string
    {
        return $this->sku;
    }

    public function setSku(string $sku): self
    {
        $this->sku = $sku;

        return $this;
    }

    public function getIsUse(): ?bool
    {
        return $this->is_use;
    }

    public function setIsUse(?bool $is_use): self
    {
        $this->is_use = $is_use;

        return $this;
    }

    public function getComparePrice(): ?string
    {
        return $this->compare_price;
    }

    public function setComparePrice(?string $compare_price): self
    {
        $this->compare_price = $compare_price;

        return $this;
    }

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getCost(): ?string
    {
        return $this->cost;
    }

    public function setCost(?string $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getWeight(): ?string
    {
        return $this->weight;
    }

    public function setWeight(?string $weight): self
    {
        $this->weight = $weight;

        return $this;
    }

    public function getIsGone(): ?bool
    {
        return $this->is_gone;
    }

    public function setIsGone(bool $is_gone): self
    {
        $this->is_gone = $is_gone;

        return $this;
    }

    public function getStock(): ?int
    {
        return $this->stock;
    }

    public function setStock(int $stock): self
    {
        $this->stock = $stock;

        return $this;
    }

    public function getOption1(): ?string
    {
        return $this->option1;
    }

    public function setOption1(?string $option1): self
    {
        $this->option1 = $option1;

        return $this;
    }

    public function getOption2(): ?string
    {
        return $this->option2;
    }

    public function setOption2(?string $option2): self
    {
        $this->option2 = $option2;

        return $this;
    }

    public function getOption3(): ?string
    {
        return $this->option3;
    }

    public function setOption3(?string $option3): self
    {
        $this->option3 = $option3;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getPriceMoneybag(): ?array
    {
        return $this->price_moneybag;
    }

    public function setPriceMoneybag(?array $price_moneybag): self
    {
        $this->price_moneybag = $price_moneybag;

        return $this;
    }

    public function getComparePriceMoneybag(): ?array
    {
        return $this->compare_price_moneybag;
    }

    public function setComparePriceMoneybag(?array $compare_price_moneybag): self
    {
        $this->compare_price_moneybag = $compare_price_moneybag;

        return $this;
    }

    public function getCostMoneybag(): ?array
    {
        return $this->cost_moneybag;
    }

    public function setCostMoneybag(?array $cost_moneybag): self
    {
        $this->cost_moneybag = $cost_moneybag;

        return $this;
    }

    public function getProduct(): ?Product
    {
        return $this->product;
    }

    public function setProduct(?Product $product): self
    {
        $this->product = $product;

        return $this;
    }
}
