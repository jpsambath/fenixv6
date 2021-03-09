<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ProductRepository::class)
 * @ORM\Table("oberlo_product")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string", length=255)
 * @ORM\DiscriminatorMap({
 *     "Product"="Product",
 *     "ImportProduct"="ImportProduct",
 *     "ShopProduct"="ShopProduct"
 * })
 *
 */
class Product
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $product_type;

    /**
     * @ORM\Column(type="integer")
     */
    private $status;

    /**
     * @ORM\Column(type="boolean")
     */
    private $override_details;

    /**
     * @ORM\Column(type="boolean")
     */
    private $override_images;

    /**
     * @ORM\Column(type="integer")
     */
    private $override_status;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $gone_since;

    /**
     * @ORM\Column(type="integer")
     */
    private $dont_sync_prices;

    /**
     * @ORM\Column(type="integer")
     */
    private $gone_count;

    /**
     * @ORM\Column(type="boolean")
     */
    private $push_failed;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $push_failed_message;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\OneToMany(targetEntity=Variant::class, mappedBy="product", cascade={"remove"})
     */
    private $variants;

    /**
     * @ORM\ManyToOne(targetEntity=OberloProduct::class, inversedBy="products", cascade={"remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $oberloProduct;

    /**
     * @ORM\ManyToOne(targetEntity=Shop::class, inversedBy="products")
     */
    private $shop;

    public function __construct()
    {
        $this->variants = new ArrayCollection();
    }

    public function getId(): ?int
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

    public function getProductType(): ?string
    {
        return $this->product_type;
    }

    public function setProductType(?string $product_type): self
    {
        $this->product_type = $product_type;

        return $this;
    }

    public function getStatus(): ?int
    {
        return $this->status;
    }

    public function setStatus(int $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getOverrideDetails(): ?bool
    {
        return $this->override_details;
    }

    public function setOverrideDetails(bool $override_details): self
    {
        $this->override_details = $override_details;

        return $this;
    }

    public function getOverrideImages(): ?bool
    {
        return $this->override_images;
    }

    public function setOverrideImages(bool $override_images): self
    {
        $this->override_images = $override_images;

        return $this;
    }

    public function getOverrideStatus(): ?bool
    {
        return $this->override_status;
    }

    public function setOverrideStatus(bool $override_status): self
    {
        $this->override_status = $override_status;

        return $this;
    }

    public function getGoneSince(): ?\DateTimeInterface
    {
        return $this->gone_since;
    }

    public function setGoneSince(?\DateTimeInterface $gone_since): self
    {
        $this->gone_since = $gone_since;

        return $this;
    }

    public function getDontSyncPrices(): ?int
    {
        return $this->dont_sync_prices;
    }

    public function setDontSyncPrices(int $dont_sync_prices): self
    {
        $this->dont_sync_prices = $dont_sync_prices;

        return $this;
    }

    public function getGoneCount(): ?int
    {
        return $this->gone_count;
    }

    public function setGoneCount(int $gone_count): self
    {
        $this->gone_count = $gone_count;

        return $this;
    }

    public function getPushFailed(): ?bool
    {
        return $this->push_failed;
    }

    public function setPushFailed(bool $push_failed): self
    {
        $this->push_failed = $push_failed;

        return $this;
    }

    public function getPushFailedMessage(): ?string
    {
        return $this->push_failed_message;
    }

    public function setPushFailedMessage(string $push_failed_message): self
    {
        $this->push_failed_message = $push_failed_message;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return Collection|Variant[]
     */
    public function getVariants(): Collection
    {
        return $this->variants;
    }

    public function addVariant(Variant $variant): self
    {
        if (!$this->variants->contains($variant)) {
            $this->variants[] = $variant;
            $variant->setProduct($this);
        }

        return $this;
    }

    public function removeVariant(Variant $variant): self
    {
        if ($this->variants->removeElement($variant)) {
            // set the owning side to null (unless already changed)
            if ($variant->getProduct() === $this) {
                $variant->setProduct(null);
            }
        }

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
    public function getShop()
    {
        return $this->shop;
    }

    /**
     * @param mixed $shop
     */
    public function setShop($shop): void
    {
        $this->shop = $shop;
    }
}
