<?php

namespace App\Entity\Oberlo;

use App\Repository\Oberlo\TagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TagRepository::class)
 * @ORM\Table("oberlo_tag")
 */
class Tag
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $title;

    /**
     * @ORM\ManyToMany(targetEntity=ImportProduct::class, mappedBy="tags", cascade={"remove"})
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
            $importProduct->addTag($this);
        }

        return $this;
    }

    public function removeImportProduct(ImportProduct $importProduct): self
    {
        if ($this->importProducts->removeElement($importProduct)) {
            $importProduct->removeTag($this);
        }

        return $this;
    }
}
