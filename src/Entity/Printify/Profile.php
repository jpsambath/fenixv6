<?php

namespace App\Entity\Printify;

use App\Entity\Printify\Shipping;
use App\Entity\Printify\Blueprint;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Symfony\Component\Validator\Constraints\Json;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\ProfileRepository")
 * @ORM\Table(name="printify_profile")
 */
class Profile
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection")
     */
    private $variant_ids;

    /**
     * @var array
     * @ORM\Column(type="json")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("array")
     */
    private $first_item;

    /**
     * @var array
     * @ORM\Column(type="json")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("array")
     */
    private $additional_items;

    /**
     * @var ArrayCollection
     * @ORM\Column(type="array")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection")
     */
    private $countries;

    /**
     * @var Shipping
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Shipping", inversedBy="profiles")
     * @ORM\JoinColumn(onDelete="CASCADE")
     * @MaxDepth(1)
     * @Serializer\Type("App\Entity\Printify\Shipping")
     */
    private $shipping;

    public function __construct()
    {
        $this->countries = new ArrayCollection();
        $this->variant_ids = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return \App\Entity\Printify\Shipping
     */
    public function getShipping(): \App\Entity\Printify\Shipping
    {
        return $this->shipping;
    }

    /**
     * @param \App\Entity\Printify\Shipping $shipping
     */
    public function setShipping(\App\Entity\Printify\Shipping $shipping): void
    {
        $this->shipping = $shipping;
    }

    /**
     * @return Collection|null
     */
    public function getCountries(): ?Collection
    {
        return $this->countries;
    }

    /**
     * @param Collection $countries
     */
    public function setCountries(Collection $countries): void
    {
        $this->countries = $countries;
    }

    /**
     * @return Collection|null
     */
    public function getVariantIds(): ?Collection
    {
        return $this->variant_ids;
    }

    /**
     * @param Collection $variant_ids
     */
    public function setVariantIds(Collection $variant_ids): void
    {
        $this->variant_ids = $variant_ids;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return array
     */
    public function getFirstItem(): array
    {
        return $this->first_item;
    }

    /**
     * @param array $first_item
     */
    public function setFirstItem(array $first_item): void
    {
        $this->first_item = $first_item;
    }

    /**
     * @return array
     */
    public function getAdditionalItems(): array
    {
        return $this->additional_items;
    }

    /**
     * @param array $additional_items
     */
    public function setAdditionalItems(array $additional_items): void
    {
        $this->additional_items = $additional_items;
    }


}
