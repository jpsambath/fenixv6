<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ShopProductRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ShopProductRepository::class)
 * @ORM\Table("oberlo_shopproduct")
 */
class ShopProduct
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $main_image_src;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $metadata;

    /**
     * @ORM\Column(type="bigint")
     */
    private $ext_id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $externalproduct_id;

    /**
     * @ORM\Column(type="integer")
     */
    private $sync_pending;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $displayImage;

    /**
     * @ORM\Column(type="boolean")
     */
    private $hasGoneVariants;

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $options = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $pushed_images = [];

    /**
     * @ORM\Column(type="array", nullable=true)
     */
    private $notifications = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $price_range = [];

    /**
     * @ORM\Column(type="json", nullable=true)
     */
    private $compared_at_price_range = [];


    public function getMainImageSrc(): ?string
    {
        return $this->main_image_src;
    }

    public function setMainImageSrc(string $main_image_src): self
    {
        $this->main_image_src = $main_image_src;

        return $this;
    }

    public function getMetadata(): ?string
    {
        return $this->metadata;
    }

    public function setMetadata(?string $metadata): self
    {
        $this->metadata = $metadata;

        return $this;
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

    public function getExternalproductId(): ?int
    {
        return $this->externalproduct_id;
    }

    public function setExternalproductId(?int $externalproduct_id): self
    {
        $this->externalproduct_id = $externalproduct_id;

        return $this;
    }

    public function getSyncPending(): ?int
    {
        return $this->sync_pending;
    }

    public function setSyncPending(int $sync_pending): self
    {
        $this->sync_pending = $sync_pending;

        return $this;
    }

    public function getDisplayImage(): ?string
    {
        return $this->displayImage;
    }

    public function setDisplayImage(string $displayImage): self
    {
        $this->displayImage = $displayImage;

        return $this;
    }

    public function getHasGoneVariants(): ?bool
    {
        return $this->hasGoneVariants;
    }

    public function setHasGoneVariants(bool $hasGoneVariants): self
    {
        $this->hasGoneVariants = $hasGoneVariants;

        return $this;
    }

    public function getOptions(): ?array
    {
        return $this->options;
    }

    public function setOptions(?array $options): self
    {
        $this->options = $options;

        return $this;
    }

    public function getPushedImages(): ?array
    {
        return $this->pushed_images;
    }

    public function setPushedImages(?array $pushed_images): self
    {
        $this->pushed_images = $pushed_images;

        return $this;
    }

    public function getNotifications(): ?array
    {
        return $this->notifications;
    }

    public function setNotifications(?array $notifications): self
    {
        $this->notifications = $notifications;

        return $this;
    }

    public function getPriceRange(): ?array
    {
        return $this->price_range;
    }

    public function setPriceRange(?array $price_range): self
    {
        $this->price_range = $price_range;

        return $this;
    }

    public function getComparedAtPriceRange(): ?array
    {
        return $this->compared_at_price_range;
    }

    public function setComparedAtPriceRange(?array $compared_at_price_range): self
    {
        $this->compared_at_price_range = $compared_at_price_range;

        return $this;
    }

}
