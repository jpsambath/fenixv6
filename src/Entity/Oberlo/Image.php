<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\ImageRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ImageRepository::class)
 * @ORM\Table("oberlo_image")
 */
class Image
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\ManyToMany(targetEntity=ImportProduct::class, mappedBy="images", cascade={"remove"})
     */
    private $importProducts;

    /**
     * @ORM\ManyToOne(targetEntity=OberloProduct::class, inversedBy="images", cascade={"remove"})
     */
    private $oberloProduct;

    public function __construct()
    {
        $this->importProducts = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
            $importProduct->addImage($this);
        }

        return $this;
    }

    public function removeImportProduct(ImportProduct $importProduct): self
    {
        if ($this->importProducts->removeElement($importProduct)) {
            $importProduct->removeImage($this);
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

}
