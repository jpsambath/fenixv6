<?php

namespace App\Entity\Printful;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\ProductRepository")
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $type_name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $brand;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $model;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $image;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $variant_count;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $currency;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $is_discontinued;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $avg_fulfillment_time;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $description;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Printful\FileType")
     * @JoinTable(name="printful_productfiletype",
     * joinColumns={@JoinColumn(name="product_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="filetype_id", referencedColumnName="id")}
     * )
     */
    private $files;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Printful\OptionType")
     * @JoinTable(name="printful_productoptiontype",
     *      joinColumns={@JoinColumn(name="product_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="optiontype_id", referencedColumnName="id")}
     *      )
     */
    private $options;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $dimensions;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTypeName(): ?string
    {
        return $this->type_name;
    }

    public function setTypeName(?string $type_name): self
    {
        $this->type_name = $type_name;

        return $this;
    }

    public function getBrand(): ?string
    {
        return $this->brand;
    }

    public function setBrand(?string $brand): self
    {
        $this->brand = $brand;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(?string $model): self
    {
        $this->model = $model;

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

    public function getVariantCount(): ?int
    {
        return $this->variant_count;
    }

    public function setVariantCount(?int $variant_count): self
    {
        $this->variant_count = $variant_count;

        return $this;
    }

    public function getCurrency(): ?string
    {
        return $this->currency;
    }

    public function setCurrency(?string $currency): self
    {
        $this->currency = $currency;

        return $this;
    }

    public function getIsDiscontinued(): ?bool
    {
        return $this->is_discontinued;
    }

    public function setIsDiscontinued(?bool $is_discontinued): self
    {
        $this->is_discontinued = $is_discontinued;

        return $this;
    }

    public function getAvgFulfillmentTime(): ?float
    {
        return $this->avg_fulfillment_time;
    }

    public function setAvgFulfillmentTime(?float $avg_fulfillment_time): self
    {
        $this->avg_fulfillment_time = $avg_fulfillment_time;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getOptions()
    {
        return $this->options;
    }

    /**
     * @param mixed $options
     */
    public function setOptions($options): void
    {
        $this->options = $options;
    }

    /**
     * @return mixed
     */
    public function getDimensions()
    {
        return $this->dimensions;
    }

    /**
     * @param mixed $dimensions
     */
    public function setDimensions($dimensions): void
    {
        $this->dimensions = $dimensions;
    }
}
