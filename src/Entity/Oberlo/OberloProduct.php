<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\OberloProductRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=OberloProductRepository::class)
 * @ORM\Table("oberlo_oberloproduct")
 */
class OberloProduct
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="bigint")
     */
    private $ext_id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $source;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $gone_since;

    /**
     * @ORM\Column(type="integer")
     */
    private $update_failed;

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
     * @ORM\Column(type="json")
     */
    private $compared_at_price_range = [];

    /**
     * @ORM\Column(type="json")
     */
    private $price_range = [];

    /**
     * @ORM\Column(type="integer")
     */
    private $discount;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_denied;

    /**
     * @ORM\OneToMany(targetEntity=Product::class, mappedBy="oberloProduct", cascade={"remove"})
     */
    private $products;

    /**
     * @ORM\ManyToOne(targetEntity=Supplier::class, inversedBy="oberloProducts", cascade={"remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $supplier;

    /**
     * @ORM\OneToMany(targetEntity=Image::class, mappedBy="oberloProduct", cascade={"remove"})
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=Shipping::class, mappedBy="oberloProduct")
     */
    private $shippings;

    public function __construct()
    {
        $this->products = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->shippings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getExtId(): ?int
    {
        return $this->ext_id;
    }

    public function setExtId(int $ext_id): self
    {
        $this->ext_id = $ext_id;

        return $this;
    }

    public function getSource(): ?string
    {
        return $this->source;
    }

    public function setSource(string $source): self
    {
        $this->source = $source;

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

    public function getUpdateFailed(): ?int
    {
        return $this->update_failed;
    }

    public function setUpdateFailed(int $update_failed): self
    {
        $this->update_failed = $update_failed;

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

    public function getComparedAtPriceRange(): ?array
    {
        return $this->compared_at_price_range;
    }

    public function setComparedAtPriceRange(array $compared_at_price_range): self
    {
        $this->compared_at_price_range = $compared_at_price_range;

        return $this;
    }

    public function getPriceRange(): ?array
    {
        return $this->price_range;
    }

    public function setPriceRange(array $price_range): self
    {
        $this->price_range = $price_range;

        return $this;
    }

    public function getDiscount(): ?int
    {
        return $this->discount;
    }

    public function setDiscount(int $discount): self
    {
        $this->discount = $discount;

        return $this;
    }

    public function getIsDenied(): ?bool
    {
        return $this->is_denied;
    }

    public function setIsDenied(bool $is_denied): self
    {
        $this->is_denied = $is_denied;

        return $this;
    }

    /**
     * @return Collection|Product[]
     */
    public function getProducts(): Collection
    {
        return $this->products;
    }

    public function addProduct(Product $product): self
    {
        if (!$this->products->contains($product)) {
            $this->products[] = $product;
            $product->setOberloProduct($this);
        }

        return $this;
    }

    public function removeProduct(Product $product): self
    {
        if ($this->products->removeElement($product)) {
            // set the owning side to null (unless already changed)
            if ($product->getOberloProduct() === $this) {
                $product->setOberloProduct(null);
            }
        }

        return $this;
    }

    public function getSupplier(): ?Supplier
    {
        return $this->supplier;
    }

    public function setSupplier(?Supplier $supplier): self
    {
        $this->supplier = $supplier;

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
            $image->setOberloProduct($this);
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->removeElement($image)) {
            // set the owning side to null (unless already changed)
            if ($image->getOberloProduct() === $this) {
                $image->setOberloProduct(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|OberloProduct[]
     */
    public function getShippings(): Collection
    {
        return $this->shippings;
    }

    public function addShipping(Shipping $shipping): self
    {
        if (!$this->shippings->contains($shipping)) {
            $this->shippings[] = $shipping;
            $shipping->setOberloProduct($this);
        }

        return $this;
    }

    public function removeShipping(Shipping $shipping): self
    {
        if ($this->shippings->removeElement($shipping)) {
            // set the owning side to null (unless already changed)
            if ($shipping->getOberloProduct() === $this) {
                $shipping->setOberloProduct(null);
            }
        }

        return $this;
    }
}
