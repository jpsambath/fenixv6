<?php

namespace App\Entity\Printful;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\ProductRepository")
 * @ORM\Table("printful_product")
 */
class Product
{
    /**
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @var integer
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $type_name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $brand;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $model;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $image;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @var integer
     * @Serializer\Type("integer")
     */
    private $variant_count;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $currency;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @var boolean
     * @Serializer\Type("boolean")
     */
    private $is_discontinued;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @var float
     * @Serializer\Type("float")
     */
    private $avg_fulfillment_time;

    /**
     * @ORM\Column(type="text", nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $description;

    /**
     * @var ArrayCollection<FileType>
     * @Serializer\Type("ArrayCollection<App\Entity\Printful\FileType>")
     * @ORM\ManyToMany(targetEntity="App\Entity\Printful\FileType")
     * @JoinTable(name="printful_productfiletype",
     * joinColumns={@JoinColumn(name="product_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="filetype_id", referencedColumnName="id")}
     * )
     */
    private $files;

    /**
     * @var ArrayCollection<OptionType>
     * @Serializer\Type("ArrayCollection<App\Entity\Printful\OptionType>")
     * @ORM\ManyToMany(targetEntity="App\Entity\Printful\OptionType")
     * @JoinTable(name="printful_productoptiontype",
     *      joinColumns={@JoinColumn(name="product_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="optiontype_id", referencedColumnName="id")}
     *      )
     */
    private $options;

    /**
     * @var array
     * @ORM\Column(type="json", nullable=true)
     * @Serializer\Type("array")
     */
    private $dimensions;

    public function __construct()
    {
        $this->files = new ArrayCollection();
        $this->options = new ArrayCollection();
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
     * @param OptionType $option
     * @return $this
     */
    public function addOption(OptionType $option)
    {
        if (!$this->options->contains($option)) {
            $this->options->add($option);
        }
        return $this;
    }

    /**
     * @param OptionType $option
     * @return $this
     */
    public function removeOption(OptionType $option)
    {
        if ($this->options->contains($option)) {
            $this->options->removeElement($option);
        }
        return $this;
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

    /**
     * @return ArrayCollection
     */
    public function getFiles(): ArrayCollection
    {
        return $this->files;
    }

    /**
     * @param ArrayCollection $files
     */
    public function setFiles(ArrayCollection $files): void
    {
        $this->files = $files;
    }

    /**
     * @param FileType $file
     * @return $this
     */
    public function addFile(FileType $file)
    {
        if (!$this->files->contains($file)) {
            $this->files->add($file);
        }
        return $this;
    }

    /**
     * @param FileType $file
     * @return $this
     */
    public function removeFile(FileType $file)
    {
        if ($this->files->contains($file)) {
            $this->files->removeElement($file);
        }
        return $this;
    }

    /**
     * @param int $id
     * @return Product
     */
    public function setId(int $id): Product
    {
        $this->id = $id;
        return $this;
    }


}
