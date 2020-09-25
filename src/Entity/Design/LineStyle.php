<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\LineStyleRepository")
 * @ORM\Table("design_linestyle")
 */
class LineStyle
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
    private $policeName;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $postPostScriptName;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $fontColor;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $fontSize;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Template", mappedBy="lineStyles")
     */
    private $templates;

    public function __construct()
    {
        $this->templates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPoliceName(): ?string
    {
        return $this->policeName;
    }

    public function setPoliceName(?string $policeName): self
    {
        $this->policeName = $policeName;

        return $this;
    }

    public function getPostPostScriptName(): ?string
    {
        return $this->postPostScriptName;
    }

    public function setPostPostScriptName(?string $postPostScriptName): self
    {
        $this->postPostScriptName = $postPostScriptName;

        return $this;
    }

    public function getFontColor(): ?string
    {
        return $this->fontColor;
    }

    public function setFontColor(?string $fontColor): self
    {
        $this->fontColor = $fontColor;

        return $this;
    }

    public function getFontSize(): ?int
    {
        return $this->fontSize;
    }

    public function setFontSize(?int $fontSize): self
    {
        $this->fontSize = $fontSize;

        return $this;
    }

    /**
     * @return Collection|Template[]
     */
    public function getTemplates(): Collection
    {
        return $this->templates;
    }

    public function addTemplate(Template $template): self
    {
        if (!$this->templates->contains($template)) {
            $this->templates[] = $template;
            $template->addLineStyle($this);
        }

        return $this;
    }

    public function removeTemplate(Template $template): self
    {
        if ($this->templates->contains($template)) {
            $this->templates->removeElement($template);
            $template->removeLineStyle($this);
        }

        return $this;
    }
}
