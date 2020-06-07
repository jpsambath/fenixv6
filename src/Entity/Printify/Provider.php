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
 * @ORM\Entity(repositoryClass="App\Repository\ProviderRepository")
 * @ORM\Table(name="printify_provider")
 */
class Provider
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
     * @ORM\Column(type="string", length=255, nullable=true, unique=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @var Location
     * @ORM\OneToOne(targetEntity="App\Entity\Printify\Location")
     * @MaxDepth(1)
     * @Serializer\Type("App\Entity\Printify\Location")
     */
    private $location;

    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Blueprint", inversedBy="providers")
     * @JoinTable(name="printify_providersblueprints",
     *     joinColumns={@JoinColumn(name="provider_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="blueprint_id", referencedColumnName="id")}
     *     )
     * @MaxDepth(1)
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Blueprint>")
     */
    private $blueprints;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Variant", mappedBy="provider")
     * @MaxDepth(1)
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Variant>")
     *
     */
    private $variants;

    /**
     * @var ArrayCollection
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Shipping", mappedBy="provider")
     * @MaxDepth(1)
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Shipping>")
     */
    private $shippings;

    public function __construct()
    {
        $this->shippings = new ArrayCollection();
        $this->variants = new ArrayCollection();
        $this->blueprints = new ArrayCollection();
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

    public function getLocation(): ?Location
    {
        return $this->location;
    }

    public function setLocation(?Location $location): self
    {
        $this->location = $location;

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
            $variant->setProvider($this);
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
            $variant->setProvider(null);
        }
        return $this;
    }

    /**
     * @return Collection
     */
    public function getVariants(): Collection
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
     * @param Blueprint $blueprint
     * @return $this
     */
    public function addBlueprint(Blueprint $blueprint)
    {
        if (!$this->blueprints->contains($blueprint)) {
            $this->blueprints->add($blueprint);
            $blueprint->addProvider($this);
        }
        return $this;
    }

    /**
     * @param Blueprint $blueprint
     * @return $this
     */
    public function removeBlueprint(Blueprint $blueprint)
    {
        if ($this->blueprints->contains($blueprint)) {
            $this->blueprints->removeElement($blueprint);
            $blueprint->removeProvider($this);
        }
        return $this;
    }

    /**
     * @return Collection|null
     */
    public function getBlueprints(): ?Collection
    {
        return $this->blueprints;
    }

    /**
     * @param Collection $blueprints
     */
    public function setBlueprints(Collection $blueprints): void
    {
        $this->blueprints = $blueprints;
    }

    /**
     * @param Shipping $shipping
     * @return $this
     */
    public function addShipping(Shipping $shipping)
    {
        if (!$this->shippings->contains($shipping)) {
            $this->shippings->add($shipping);
            $shipping->setProvider($this);
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
            $shipping->setProvider(null);
        }
        return $this;
    }


    /**
     * @return Collection|null
     */
    public function getShippings(): ?Collection
    {
        return $this->shippings;
    }

    /**
     * @param Collection $shippings
     */
    public function setShippings(Collection $shippings): void
    {
        $this->shippings = $shippings;
    }

}
