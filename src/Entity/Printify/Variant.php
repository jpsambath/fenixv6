<?php


namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\VariantRepository")
 * @ORM\Table(name="printify_variant")
 */
class Variant
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"blueprintexporter", "createproduct"})
     *
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Type("string")
     */
    private $sku;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("integer")
     */
    private $price;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Type("integer")
     */
    private $cost;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Type("integer")
     */
    private $grams;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("boolean")
     */
    private $is_enabled;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Type("boolean")
     */
    private $in_stock;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("boolean")
     */
    private $is_default;

    /**
     * @var array
     * @ORM\Column(type="json")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("array")
     */
    private $options;

    /**
     * @ORM\Id()
     * @var Blueprint
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Blueprint", inversedBy="variants")
     * @Serializer\Type("App\Entity\Printify\Blueprint")
     */
    private $blueprint;

    /**
     * @ORM\Id()
     * @var Provider
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Provider", inversedBy="variants")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("App\Entity\Printify\Provider")
     */
    private $provider;

    /**
     * @var ArrayCollection<Placeholder>
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Placeholder")
     * @JoinTable(name="printify_variantsplaceholders",
     *     joinColumns={@JoinColumn(name="variant_id", referencedColumnName="id"), @JoinColumn(name="blueprint_id", referencedColumnName="blueprint_id"), @JoinColumn(name="provider_id", referencedColumnName="provider_id")},
     *      inverseJoinColumns={@JoinColumn(name="placeholder_id", referencedColumnName="id")}
     *     )
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Placeholder>")
     */
    private $placeholders;

    public function __construct()
    {
        $this->placeholders = new ArrayCollection();
        $this->options = new ArrayCollection();
    }

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

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(?int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getCost(): ?int
    {
        return $this->cost;
    }

    public function setCost(?int $cost): self
    {
        $this->cost = $cost;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getGrams(): ?int
    {
        return $this->grams;
    }

    public function setGrams(?int $grams): self
    {
        $this->grams = $grams;

        return $this;
    }

    public function getIsEnabled(): ?bool
    {
        return $this->is_enabled;
    }

    public function setIsEnabled(?bool $is_enabled): self
    {
        $this->is_enabled = $is_enabled;

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
     * @param $id
     * @return $this
     */
    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getBlueprint()
    {
        return $this->blueprint;
    }

    /**
     * @param mixed $blueprint
     */
    public function setBlueprint($blueprint): void
    {
        $this->blueprint = $blueprint;
    }

    /**
     * @return mixed
     */
    public function getProvider()
    {
        return $this->provider;
    }

    /**
     * @param mixed $provider
     */
    public function setProvider($provider): void
    {
        $this->provider = $provider;
    }

    /**
     * @param Placeholder $placeholder
     * @return $this
     */
    public function addPlaceholder(Placeholder $placeholder)
    {
        if (!$this->placeholders->contains($placeholder)) {
            $this->placeholders->add($placeholder);
        }
        return $this;
    }

    /**
     * @param Placeholder $placeholder
     * @return $this
     */
    public function removePlaceholder(Placeholder $placeholder)
    {
        if ($this->placeholders->contains($placeholder)) {
            $this->placeholders->removeElement($placeholder);
        }
        return $this;
    }

    /**
     * @return Collection|null
     */
    public function getPlaceholders(): ?Collection
    {
        return $this->placeholders;
    }

    /**
     * @param Collection|null $placeholders
     */
    public function setPlaceholders(?Collection $placeholders): void
    {
        $this->placeholders = $placeholders;
    }

    /**
     * @return array
     */
    public function getOptions(): array
    {
        return $this->options;
    }

    /**
     * @param array $options
     */
    public function setOptions(array $options): void
    {
        $this->options = $options;
    }


}