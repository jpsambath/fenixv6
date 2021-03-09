<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\SupplierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=SupplierRepository::class)
 * @ORM\Table("oberlo_supplier")
 */
class Supplier
{
    /**
     * @ORM\Id
     * @ORM\Column(type="bigint")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $store_url;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_verified;

    /**
     * @ORM\OneToMany(targetEntity=OberloProduct::class, mappedBy="supplier", cascade={"remove"})
     */
    private $oberloProducts;

    public function __construct()
    {
        $this->oberloProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getStoreUrl(): ?string
    {
        return $this->store_url;
    }

    public function setStoreUrl(string $store_url): self
    {
        $this->store_url = $store_url;

        return $this;
    }

    public function getIsVerified(): ?bool
    {
        return $this->is_verified;
    }

    public function setIsVerified(bool $is_verified): self
    {
        $this->is_verified = $is_verified;

        return $this;
    }

    /**
     * @return Collection|OberloProduct[]
     */
    public function getOberloProducts(): Collection
    {
        return $this->oberloProducts;
    }

    public function addOberloProduct(OberloProduct $oberloProduct): self
    {
        if (!$this->oberloProducts->contains($oberloProduct)) {
            $this->oberloProducts[] = $oberloProduct;
            $oberloProduct->setSupplier($this);
        }

        return $this;
    }

    public function removeOberloProduct(OberloProduct $oberloProduct): self
    {
        if ($this->oberloProducts->removeElement($oberloProduct)) {
            // set the owning side to null (unless already changed)
            if ($oberloProduct->getSupplier() === $this) {
                $oberloProduct->setSupplier(null);
            }
        }

        return $this;
    }
}
