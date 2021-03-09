<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ProductCollectionRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;

/**
 * @ORM\Entity(repositoryClass=ProductCollectionRepository::class)
 * @ORM\Table("oberlo_productcollection")
 */
class ProductCollection
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
     * @ORM\ManyToMany(targetEntity=ImportProduct::class, inversedBy="productCollections", cascade={"remove"})
     * @JoinTable(name="oberlo_productcollection_importproduct",
     * joinColumns={@JoinColumn(name="productcollection_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="importproduct_id", referencedColumnName="id", onDelete="CASCADE")})
     */
    private $importProducts;

    public function __construct()
    {
        $this->importProducts = new ArrayCollection();
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

    /**
     * @return Collection|ImportProduct[]
     */
    public function getImportProducts(): Collection
    {
        return $this->importProducts;
    }

    public function addImportProduct(ImportProduct $importProduct): self
    {
        if (!$this->importProducts->contains($importProduct)) {
            $this->importProducts[] = $importProduct;
            $importProduct->addProductCollection($this);
        }

        return $this;
    }

    public function removeImportProduct(ImportProduct $importProduct): self
    {
        if ($this->importProducts->removeElement($importProduct)) {
            $importProduct->removeProductCollection($this);
        }

        return $this;
    }
}
