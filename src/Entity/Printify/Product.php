<?php

namespace App\Entity\Printify;

use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProductRepository")
 * @ORM\Table(name="printify_product")
 */
class Product
{
    /**
     * @var string
     * @ORM\Id()
     * @ORM\Column(type="string")
     * @Serializer\Type("string")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="text")
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("string")
     */
    private $description;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("ArrayCollection")
     */
    private $tags;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array", nullable=true)
     * @Serializer\Type("ArrayCollection")
     */
    private $options;

    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Variant", cascade={"persist"})
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Variant>")
     * @JoinTable(name="printify_productsvariants",
     *     joinColumns={@JoinColumn(name="product_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="variant_id", referencedColumnName="id"), @JoinColumn(name="blueprint_id", referencedColumnName="blueprint_id"), @JoinColumn(name="provider_id", referencedColumnName="provider_id")}
     *     )
     */
    private $variants;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Mockup", mappedBy="product")
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Mockup>")
     * @Serializer\SerializedName("images")
     */
    private $mockups;

    /**
     * @var datetime
     * @ORM\Column(type="datetime", nullable=true)
     * @Serializer\Type("DateTime<'Y-m-d H:i:sP'>")
     */
    private $created_at;

    /**
     * @var datetime
     * @ORM\Column(type="datetime", nullable=true)
     * @Serializer\Type("DateTime<'Y-m-d H:i:sP'>")
     */
    private $update_at;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Type("boolean")
     */
    private $visible;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("integer")
     */
    private $blueprint_id;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("integer")
     */
    private $print_provider_id;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Type("integer")
     */
    private $user_id;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Type("integer")
     */
    private $shop_id;

    /**
     * @var ArrayCollection<Printarea>
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Printarea", mappedBy="product")
     * @Serializer\Groups({"createproduct"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Printarea>")
     */
    private $print_areas;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array", length=255, nullable=true)
     * @Serializer\Type("ArrayCollection")
     */
    private $print_details;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="json", length=255, nullable=true)
     * @Serializer\Type("ArrayCollection")
     */
    private $external;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     * @Serializer\Type("boolean")
     */
    private $is_locked;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array", length=255, nullable=true)
     * @Serializer\Type("ArrayCollection")
     */
    private $sales_channel_properties;

    public function __construct()
    {
        $this->mockups = new ArrayCollection();
        $this->variants = new ArrayCollection();
        $this->tags = new ArrayCollection();
        $this->print_areas = new ArrayCollection();
    }

    public function getId(): ?string
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }


    public function getVisible(): ?bool
    {
        return $this->visible;
    }

    public function setVisible(?bool $visible): self
    {
        $this->visible = $visible;

        return $this;
    }

    public function getBlueprintId(): ?int
    {
        return $this->blueprint_id;
    }

    public function setBlueprintId(?int $blueprint_id): self
    {
        $this->blueprint_id = $blueprint_id;

        return $this;
    }

    public function getPrintProviderId(): ?int
    {
        return $this->print_provider_id;
    }

    public function setPrintProviderId(?int $print_provider_id): self
    {
        $this->print_provider_id = $print_provider_id;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(?int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getShopId(): ?int
    {
        return $this->shop_id;
    }

    public function setShopId(?int $shop_id): self
    {
        $this->shop_id = $shop_id;

        return $this;
    }

    public function getIsLocked(): ?bool
    {
        return $this->is_locked;
    }

    public function setIsLocked(?bool $is_locked): self
    {
        $this->is_locked = $is_locked;

        return $this;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return ArrayCollection
     */
    public function getSalesChannelProperties(): ArrayCollection
    {
        return $this->sales_channel_properties;
    }

    /**
     * @param ArrayCollection $sales_channel_properties
     */
    public function setSalesChannelProperties(ArrayCollection $sales_channel_properties): void
    {
        $this->sales_channel_properties = $sales_channel_properties;
    }

    /**
     * @return ArrayCollection
     */
    public function getTags(): ArrayCollection
    {
        return $this->tags;
    }

    /**
     * @param ArrayCollection $tags
     */
    public function setTags(ArrayCollection $tags): void
    {
        $this->tags = $tags;
    }

    /**
     * @return ArrayCollection
     */
    public function getVariants(): ArrayCollection
    {
        return $this->variants;
    }

    /**
     * @param ArrayCollection $variants
     */
    public function setVariants(ArrayCollection $variants): void
    {
        $this->variants = $variants;
    }

    /**
     * @param Variant $variant
     * @return $this
     */
    public function addVariant(Variant $variant)
    {
        if (!$this->variants->contains($variant)) {
            $this->variants->add($variant);
        }
        return $this;
    }

    /**
     * @param Variant $variant
     * @return $this
     */
    public function removeVariant(Variant $variant)
    {
        if ($this->variants->contains($variant)) {
            $this->variants->removeElement($variant);
        }
        return $this;
    }


    /**
     * @return ArrayCollection
     */
    public function getOptions(): ArrayCollection
    {
        return $this->options;
    }

    /**
     * @param ArrayCollection $options
     */
    public function setOptions(ArrayCollection $options): void
    {
        $this->options = $options;
    }

    /**
     * @return ArrayCollection
     */
    public function getPrintAreas(): ArrayCollection
    {
        return $this->print_areas;
    }

    /**
     * @param ArrayCollection $print_areas
     */
    public function setPrintAreas(ArrayCollection $print_areas): void
    {
        $this->print_areas = $print_areas;
    }

    /**
     * @return ArrayCollection
     */
    public function getPrintDetails(): ArrayCollection
    {
        return $this->print_details;
    }

    /**
     * @param ArrayCollection $print_details
     */
    public function setPrintDetails(ArrayCollection $print_details): void
    {
        $this->print_details = $print_details;
    }

    /**
     * @return ArrayCollection
     */
    public function getMockups(): ArrayCollection
    {
        return $this->mockups;
    }

    /**
     * @param ArrayCollection $mockups
     */
    public function setMockups(ArrayCollection $mockups): void
    {
        $this->mockups = $mockups;
    }

    /**
     * @param Mockup $mockup
     * @return $this
     */
    public function addMockup(Mockup $mockup)
    {
        if (!$this->mockups->contains($mockup)) {
            $this->mockups->add($mockup);
        }
        return $this;
    }

    /**
     * @param Mockup $mockup
     * @return $this
     */
    public function removeMockup(Mockup $mockup)
    {
        if ($this->mockups->contains($mockup)) {
            $this->mockups->removeElement($mockup);
        }
        return $this;
    }

    /**
     * @param Printarea $print_area
     * @return $this
     */
    public function addPrintarea(Printarea $print_area)
    {
        if (!$this->print_areas->contains($print_area)) {
            $this->print_areas->add($print_area);
        }
        return $this;
    }

    /**
     * @param Printarea $print_area
     * @return $this
     */
    public function removePrintarea(Printarea $print_area)
    {
        if ($this->print_areas->contains($print_area)) {
            $this->print_areas->removeElement($print_area);
        }
        return $this;
    }

    /**
     * @param string $tag
     * @return $this
     */
    public function addTag(string $tag)
    {
        if (!$this->tags->contains($tag)) {
            $this->tags->add($tag);
        }
        return $this;
    }

    /**
     * @param string $tag
     * @return $this
     */
    public function removeTag(string $tag)
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
        }
        return $this;
    }

    /**
     * @return DateTime
     */
    public function getCreatedAt(): ?DateTime
    {
        return $this->created_at;
    }

    /**
     * @param DateTime $created_at
     */
    public function setCreatedAt(?DateTime $created_at): void
    {
        $this->created_at = $created_at;
    }

    /**
     * @return DateTime
     */
    public function getUpdateAt(): ?DateTime
    {
        return $this->update_at;
    }

    /**
     * @param DateTime $update_at
     */
    public function setUpdateAt(?DateTime $update_at): void
    {
        $this->update_at = $update_at;
    }

    /**
     * @return Collection|null
     */
    public function getExternal(): ?Collection
    {
        return $this->external;
    }

    /**
     * @param Collection|null $external
     */
    public function setExternal(?Collection $external): void
    {
        $this->external = $external;
    }

}
