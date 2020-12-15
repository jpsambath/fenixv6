<?php

namespace App\Entity\Design;

use App\Repository\Design\ShopRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\JoinColumn;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass=ShopRepository::class)
 * @ORM\Table("design_shop")
 */
class Shop
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Design::class, inversedBy="shops")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Design>")
     * @JoinTable(name="design_shop_design",
     * joinColumns={@JoinColumn(name="shop_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="design_id", referencedColumnName="id")}
     * )
     */
    private $designs;

    public function __construct()
    {
        $this->designs = new ArrayCollection();
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

    /**
     * @return Collection|Design[]
     */
    public function getDesigns(): Collection
    {
        return $this->designs;
    }

    public function addDesign(Design $design): self
    {
        if (!$this->designs->contains($design)) {
            $this->designs[] = $design;
        }

        return $this;
    }

    public function removeDesign(Design $design): self
    {
        $this->designs->removeElement($design);

        return $this;
    }
}
