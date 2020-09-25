<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\ModelRepository")
 * @ORM\Table("design_model")
 */
class Model
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $src;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $pattern;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\ModelCategory", inversedBy="models")
     * @ORM\JoinTable(name="design_model_modelcategory",
     * joinColumns={@ORM\JoinColumn(name="design_modelcategory_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_model_id", referencedColumnName="id")}
     * )
     */
    private $modelCategories;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Design", mappedBy="models")
     */
    private $designs;

    public function __construct()
    {
        $this->modelCategories = new ArrayCollection();
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

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getSrc(): ?string
    {
        return $this->src;
    }

    public function setSrc(?string $src): self
    {
        $this->src = $src;

        return $this;
    }

    /**
     * @return string
     */
    public function getPattern(): string
    {
        return $this->pattern;
    }

    /**
     * @param string $pattern
     */
    public function setPattern(string $pattern): void
    {
        $this->pattern = $pattern;
    }

    /**
     * @return Collection|ModelCategory[]
     */
    public function getModelCategories(): Collection
    {
        return $this->modelCategories;
    }

    public function addModelCategory(ModelCategory $modelCategory): self
    {
        if (!$this->modelCategories->contains($modelCategory)) {
            $this->modelCategories[] = $modelCategory;
        }

        return $this;
    }

    public function removeModelCategory(ModelCategory $modelCategory): self
    {
        if ($this->modelCategories->contains($modelCategory)) {
            $this->modelCategories->removeElement($modelCategory);
        }

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
            $design->addModel($this);
        }

        return $this;
    }

    public function removeDesign(Design $design): self
    {
        if ($this->designs->contains($design)) {
            $this->designs->removeElement($design);
            $design->removeModel($this);
        }

        return $this;
    }
}
