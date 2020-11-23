<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\TemplateRepository")
 * @ORM\Table("design_template")
 */
class Template
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("integer")
     */
    private $linecount;

    /**
     * @var ArrayCollection
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\LineStyle", inversedBy="templates", cascade={"persist"})
     * @ORM\JoinTable(name="design_template_linestyle",
     * joinColumns={@ORM\JoinColumn(name="linestyle_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="template_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\LineStyle>")
     */
    private $lineStyles;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Design", mappedBy="templates")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Design>")
     */
    private $designs;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\TemplateCategory", mappedBy="templates")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\TemplateCategory>")
     */
    private $templateCategories;

    public function __construct()
    {
        $this->lineStyles = new ArrayCollection([
            1 => new LineStyle()
        ]);
        $this->designs = new ArrayCollection();
        $this->templateCategories = new ArrayCollection();
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
     * @return Collection|LineStyle[]
     */
    public function getLineStyles(): Collection
    {
        return $this->lineStyles;
    }

    public function addLineStyle(LineStyle $lineStyle): self
    {
        //if (!$this->lineStyles->contains($lineStyle)) {
            $this->lineStyles[] = $lineStyle;
        //}
        return $this;
    }

    public function removeLineStyle(LineStyle $lineStyle): self
    {
        if ($this->lineStyles->contains($lineStyle)) {
            $this->lineStyles->removeElement($lineStyle);
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
            $design->addTemplate($this);
        }

        return $this;
    }

    public function removeDesign(Text $design): self
    {
        if ($this->designs->contains($design)) {
            $this->designs->removeElement($design);
            $design->removeTemplate($this);
        }

        return $this;
    }

    /**
     * @return Collection|TemplateCategory[]
     */
    public function getTemplateCategories(): Collection
    {
        return $this->templateCategories;
    }

    public function addTemplateCategory(TemplateCategory $templateCategory): self
    {
        if (!$this->templateCategories->contains($templateCategory)) {
            $this->templateCategories[] = $templateCategory;
        }

        return $this;
    }

    public function removeTemplateCategory(TemplateCategory $templateCategory): self
    {
        if ($this->templateCategories->contains($templateCategory)) {
            $this->templateCategories->removeElement($templateCategory);
        }

        return $this;
    }


    /**
     * @return int|null
     */
    public function getLinecount(): ?int
    {
        return $this->linecount;
    }

    /**
     * @param int $linecount
     */
    public function setLinecount(int $linecount): void
    {
        $this->linecount = $linecount;
    }

    /**
     * @param array $lineStyles
     */
    public function setLineStyles(array $lineStyles): void
    {
        $this->lineStyles = $lineStyles;
    }

}
