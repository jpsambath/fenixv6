<?php

namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\MockupRepository")
 * @ORM\Table(name="printify_mockup")
 */
class Mockup
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $src;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array", length=255, nullable=true)
     * @Serializer\Type("ArrayCollection")
     */
    private $variant_ids;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $position;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Type("boolean")
     */
    private $is_default;

    /**
     * @var Product
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Product", inversedBy="mockups")
     * @JoinTable(name="printify_productmockups",
     *     joinColumns={@JoinColumn(name="mockup_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="product_id", referencedColumnName="id")}
     *     )
     * @Serializer\Type("App\Entity\Printify\Product")
     */
    private $product;

    public function __construct()
    {
        $this->variant_ids = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSrc(): ?string
    {
        return $this->src;
    }

    public function setSrc(?string $src): self
    {
        $this->src = $src;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(?string $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getIsDefault(): ?bool
    {
        return $this->is_default;
    }

    public function setIsDefault(?bool $is_default): self
    {
        $this->is_default = $is_default;

        return $this;
    }

    /**
     * @return ArrayCollection
     */
    public function getVariantIds(): ArrayCollection
    {
        return $this->variant_ids;
    }

    /**
     * @param ArrayCollection $variant_ids
     */
    public function setVariantIds(ArrayCollection $variant_ids): void
    {
        $this->variant_ids = $variant_ids;
    }

    /**
     * @return Product
     */
    public function getProduct(): ?Product
    {
        return $this->product;
    }

    /**
     * @param Product $product
     */
    public function setProduct(?Product $product): void
    {
        $this->product = $product;
    }

}
