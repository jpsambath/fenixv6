<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\Constraints as Assert;

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
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $src;

    /**
     * Unmapped property to handle file uploads
     * @var UploadedFile
     */
    private $file;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $pattern;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\ModelCategory", inversedBy="models")
     * @ORM\JoinTable(name="design_model_modelcategory",
     * joinColumns={@ORM\JoinColumn(name="design_modelcategory_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_model_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\ModelCategory>")
     */
    private $modelCategories;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Design", mappedBy="models")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Design>")
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
    public function getPattern(): ?string
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

    /**
     * @return UploadedFile|null
     */
    public function getFile(): ?UploadedFile
    {
        return $this->file;
    }

    /**
     * @param UploadedFile $file
     */
    public function setFile(UploadedFile $file): void
    {
        $this->file = $file;
    }
}
