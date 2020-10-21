<?php

namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;
use phpDocumentor\Reflection\Types\Integer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\PrintareaRepository")
 * @ORM\Table(name="printify_printarea")
 */
class Printarea
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
     * @var ArrayCollection
     * @ORM\Column(type="array", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("ArrayCollection")
     */
    private $variant_ids;

    /**
     * @var ArrayCollection<Placeholder>
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Placeholder")
     * @Serializer\Groups({"createproduct"})
     * @JoinTable(name="printify_printareasplaceholders",
     *     joinColumns={@JoinColumn(name="printarea_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="placeholder_id", referencedColumnName="id")}
     *     )
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Placeholder>")
     */
    private $placeholders;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $font_color;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $font_family;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $background;

    /**
     * @var Product
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Product", inversedBy="print_areas")
     * @JoinTable(name="printify_productprintareas",
     *     joinColumns={@JoinColumn(name="printarea_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="product_id", referencedColumnName="id", onDelete="CASCADE")}
     *     )
     * @Serializer\Type("App\Entity\Printify\Product")
     */
    private $product;

    public function __construct()
    {
        $this->placeholders = new ArrayCollection();
        $this->variant_ids = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|Placeholder[]
     */
    public function getPlaceholders(): ?Collection
    {
        return $this->placeholders;
    }

    public function addPlaceholder(Placeholder $placeholder): self
    {
        if (!$this->placeholders->contains($placeholder)) {
            $this->placeholders[] = $placeholder;
        }

        return $this;
    }

    public function removePlaceholder(Placeholder $placeholder): self
    {
        if ($this->placeholders->contains($placeholder)) {
            $this->placeholders->removeElement($placeholder);
        }

        return $this;
    }

    public function getFontColor(): ?string
    {
        return $this->font_color;
    }

    public function setFontColor(?string $font_color): self
    {
        $this->font_color = $font_color;

        return $this;
    }

    public function getFontFamily(): ?string
    {
        return $this->font_family;
    }

    public function setFontFamily(?string $font_family): self
    {
        $this->font_family = $font_family;

        return $this;
    }

    public function getBackground(): ?string
    {
        return $this->background;
    }

    public function setBackground(?string $background): self
    {
        $this->background = $background;

        return $this;
    }

    /**
     * @param ArrayCollection $placeholders
     */
    public function setPlaceholders(ArrayCollection $placeholders): void
    {
        $this->placeholders = $placeholders;
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

    /**
     * @return Collection|null
     */
    public function getVariantIds(): ?Collection
    {
        return $this->variant_ids;
    }

    /**
     * @param Collection|null $variant_ids
     */
    public function setVariantIds(?Collection $variant_ids): void
    {
        $this->variant_ids = $variant_ids;
    }

    /**
     * @param int $variantid
     * @return $this
     */
    public function addVariantId(int $variantid): self
    {
        if (!$this->variant_ids->contains($variantid)) {
            $this->variant_ids[] = $variantid;
        }

        return $this;
    }

    /**
     * @param int $variantid
     * @return $this
     */
    public function removeVariantId(int $variantid): self
    {
        if ($this->variant_ids->contains($variantid)) {
            $this->variant_ids->removeElement($variantid);
        }

        return $this;
    }

    /**
     * @param $id
     * @return $this
     */
    public function setId($id): self
    {
        $this->id = $id;

        return $this;
    }

}
