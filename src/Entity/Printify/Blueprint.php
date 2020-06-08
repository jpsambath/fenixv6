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
 *
 * @ORM\Entity(repositoryClass="App\Repository\Printify\BlueprintRepository")
 * @ORM\Table(name="printify_blueprint")
 */
class Blueprint
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $description;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $brand;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $model;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array")
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection")
     */
    private $images;

    /**
     * @var ArrayCollection<Provider>
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Provider", mappedBy="blueprints")
     * @JoinTable(name="printify_providersblueprints",
     *     joinColumns={@JoinColumn(name="provider_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="blueprint_id", referencedColumnName="id")}
     *     )
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Provider>")
     */
    private $providers;

    /**
     * @var ArrayCollection<Variant>
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Variant", mappedBy="blueprint")
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Variant>")
     */
    private $variants;

    /**
     * @var ArrayCollection<Shipping>
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Shipping", mappedBy="blueprint")
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Shipping>")
     */
    private $shippings;

    public function __construct()
    {
        $this->providers = new ArrayCollection();
        $this->images = new ArrayCollection();
        $this->variants = new ArrayCollection();
        $this->shippings = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

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

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }


    /**
     * @param Variant $variant
     * @return $this
     */
    public function addVariant(Variant $variant)
    {
        if (!$this->variants->contains($variant)) {
            $this->variants->add($variant);
            $variant->addBlueprint($this);
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
            $variant->removeBlueprint($this);
        }
        return $this;
    }

    /**
     * @param Shipping $shipping
     * @return $this
     */
    public function addShipping(Shipping $shipping)
    {
        if (!$this->shippings->contains($shipping)) {
            $this->shippings->add($shipping);
            $shipping->addBlueprint($this);
        }
        return $this;
    }

    /**
     * @param Shipping $shipping
     * @return $this
     */
    public function removeShipping(Shipping $shipping)
    {
        if ($this->shippings->contains($shipping)) {
            $this->shippings->removeElement($shipping);
            $shipping->removeBlueprint($this);
        }
        return $this;
    }


    /**
     * @param Provider $provider
     * @return $this
     */
    public function addProvider(Provider $provider)
    {
        if (!$this->providers->contains($provider)) {
            $this->providers->add($provider);
            $provider->addBlueprint($this);
        }
        return $this;
    }

    /**
     * @param Provider $provider
     * @return $this
     */
    public function removeProvider(Provider $provider)
    {
        if ($this->providers->contains($provider)) {
            $this->providers->removeElement($provider);
            $provider->removeBlueprint($this);
        }
        return $this;
    }

    /**
     * @param Collection $shippings
     */
    public function setShippings(Collection $shippings): void
    {
        $this->shippings = $shippings;
    }

    /**
     * @return Collection
     */
    public function getShippings(): Collection
    {
        return $this->shippings;
    }

    /**
     * @return Collection
     */
    public function getVariants(): ?Collection
    {
        return $this->variants;
    }

    /**
     * @param Collection $variants
     */
    public function setVariants(Collection $variants): void
    {
        $this->variants = $variants;
    }

    /**
     * @return Collection
     */
    public function getProviders(): ?Collection
    {
        return $this->providers;
    }

    /**
     * @param Collection $providers
     */
    public function setProviders(Collection $providers): void
    {
        $this->providers = $providers;
    }

    /**
     * @param Image $image
     * @return $this
     */
    public function addImage(Image $image)
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
        }
        return $this;
    }

    /**
     * @param Image $image
     * @return $this
     */
    public function removeImage(Image $image)
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
        }
        return $this;
    }

    /**
     * @return Collection
     */
    public function getImages(): ?Collection
    {
        return $this->images;
    }

    /**
     * @param Collection $images
     */
    public function setImages(Collection $images): void
    {
        $this->images = $images;
    }


}
