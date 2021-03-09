<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ImportProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;

/**
 * @ORM\Entity(repositoryClass=ImportProductRepository::class)
 * @ORM\Table("oberlo_importproduct")
 */
class ImportProduct extends Product
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $original_title;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $shipping;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_pushed_to_shopify;

    /**
     * @ORM\Column(type="bigint", nullable=true)
     */
    private $pushed_product_ext_id;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2, nullable=true)
     */
    private $suggested_price;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $suggested_price_moneybag = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $external_product = [];

    /**
     * @ORM\ManyToMany(targetEntity=Tag::class, inversedBy="importProducts", cascade={"remove"})
     * @JoinTable(name="oberlo_tag_importproduct",
     * joinColumns={@JoinColumn(name="importproduct_id", referencedColumnName="id", onDelete="CASCADE")},
     * inverseJoinColumns={@JoinColumn(name="tag_id", referencedColumnName="id")})
     */
    private $tags;

    /**
     * @ORM\ManyToMany(targetEntity=Image::class, inversedBy="importProducts", cascade={"remove"})
     * @JoinTable(name="oberlo_image_importproduct",
     * joinColumns={@JoinColumn(name="importproduct_id", referencedColumnName="id", onDelete="CASCADE")},
     * inverseJoinColumns={@JoinColumn(name="image_id", referencedColumnName="id")})
     */
    private $images;

    /**
     * @ORM\ManyToMany(targetEntity=ProductCollection::class, mappedBy="importProducts", cascade={"remove"})
     *
     */
    private $productCollections;

    public function __construct()
    {
        parent::__construct();
        $this->tags = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->productCollections = new ArrayCollection();
    }


    public function getOriginalTitle(): ?string
    {
        return $this->original_title;
    }

    public function setOriginalTitle(string $original_title): self
    {
        $this->original_title = $original_title;

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

    public function getShipping(): ?string
    {
        return $this->shipping;
    }

    public function setShipping(?string $shipping): self
    {
        $this->shipping = $shipping;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getIsPushedToShopify(): ?bool
    {
        return $this->is_pushed_to_shopify;
    }

    public function setIsPushedToShopify(bool $is_pushed_to_shopify): self
    {
        $this->is_pushed_to_shopify = $is_pushed_to_shopify;

        return $this;
    }

    public function getPushedProductExtId(): ?int
    {
        return $this->pushed_product_ext_id;
    }

    public function setPushedProductExtId(?int $pushed_product_ext_id): self
    {
        $this->pushed_product_ext_id = $pushed_product_ext_id;

        return $this;
    }

    public function getSuggestedPrice(): ?string
    {
        return $this->suggested_price;
    }

    public function setSuggestedPrice(?string $suggested_price): self
    {
        $this->suggested_price = $suggested_price;

        return $this;
    }

    public function getSuggestedPriceMoneybag(): ?array
    {
        return $this->suggested_price_moneybag;
    }

    public function setSuggestedPriceMoneybag(?array $suggested_price_moneybag): self
    {
        $this->suggested_price_moneybag = $suggested_price_moneybag;

        return $this;
    }

    public function getExternalProduct(): ?array
    {
        return $this->external_product;
    }

    public function setExternalProduct(?array $external_product): self
    {
        $this->external_product = $external_product;

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        $this->images->removeElement($image);

        return $this;
    }

    /**
     * @return Collection|ProductCollection[]
     */
    public function getProductCollections(): Collection
    {
        return $this->productCollections;
    }

    public function addProductCollection(ProductCollection $productCollection): self
    {
        if (!$this->productCollections->contains($productCollection)) {
            $this->productCollections[] = $productCollection;
        }

        return $this;
    }

    public function removeProductCollection(ProductCollection $productCollection): self
    {
        $this->productCollections->removeElement($productCollection);

        return $this;
    }
}
