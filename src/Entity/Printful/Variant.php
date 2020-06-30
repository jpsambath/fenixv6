<?php

namespace App\Entity\Printful;

use App\Entity\Printful\AvailabilityStatus;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\VariantRepository")
 * @ORM\Table("printful_variant")
 */
class Variant
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @var integer
     * @Serializer\Type("integer")
     */
    private $product_id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $color;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $color_code;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $color_code2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $price;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @var boolean
     * @Serializer\Type("boolean")
     */
    private $in_stock;

    /**
     * @ORM\Column(type="array", nullable=true)
     * @var array
     * @Serializer\Type("array")
     */
    private $availability_regions = [];

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Printful\AvailabilityStatus", mappedBy="variant")
     * @var string
     * @Serializer\Type("ArrayCollection<App\Entity\Printful\AvailabilityStatus>")
     */
    private $availability_status;

    public function __construct()
    {
        $this->availability_status = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getProductId(): ?int
    {
        return $this->product_id;
    }

    public function setProductId(?int $product_id): self
    {
        $this->product_id = $product_id;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(?string $color): self
    {
        $this->color = $color;

        return $this;
    }

    public function getColorCode(): ?string
    {
        return $this->color_code;
    }

    public function setColorCode(?string $color_code): self
    {
        $this->color_code = $color_code;

        return $this;
    }

    public function getColorCode2(): ?string
    {
        return $this->color_code2;
    }

    public function setColorCode2(?string $color_code2): self
    {
        $this->color_code2 = $color_code2;

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

    public function getPrice(): ?string
    {
        return $this->price;
    }

    public function setPrice(?string $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getInStock(): ?bool
    {
        return $this->in_stock;
    }

    public function setInStock(?bool $in_stock): self
    {
        $this->in_stock = $in_stock;

        return $this;
    }

    public function getAvailabilityRegions(): ?array
    {
        return $this->availability_regions;
    }

    public function setAvailabilityRegions(?array $availability_regions): self
    {
        $this->availability_regions = $availability_regions;

        return $this;
    }

    /**
     * @return Collection|AvailabilityStatus[]
     */
    public function getAvailabilityStatus(): Collection
    {
        return $this->availability_status;
    }

    public function addAvailabilityStatus(AvailabilityStatus $availabilityStatus): self
    {
        if (!$this->availability_status->contains($availabilityStatus)) {
            $this->availability_status[] = $availabilityStatus;
            $availabilityStatus->setVariant($this);
        }

        return $this;
    }

    public function removeAvailabilityStatus(AvailabilityStatus $availabilityStatus): self
    {
        if ($this->availability_status->contains($availabilityStatus)) {
            $this->availability_status->removeElement($availabilityStatus);
            // set the owning side to null (unless already changed)
            if ($availabilityStatus->getVariant() === $this) {
                $availabilityStatus->setVariant(null);
            }
        }

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
