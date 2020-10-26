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
    private $fontColor;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $uppercase;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $lowercase;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $capitalize;


    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $bold;
    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $italic;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $underline;

    /**
     * @var boolean
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $linethrough;

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

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Design\Font", inversedBy="lineStyles")
     */
    private $font;

    public function __construct()
    {
        $this->templates = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @param mixed $font
     */
    public function setFont($font): void
    {
        $this->font = $font;
    }

    /**
     * @return mixed
     */
    public function getFont()
    {
        return $this->font;
    }


    /**
     * @param bool|null $snakecase
     */
    public function setSnakecase(?bool $snakecase): void
    {
        $this->snakecase = $snakecase;
    }

    /**
     * @return bool|null
     */
    public function isLinethrough(): ?bool
    {
        return $this->linethrough;
    }

    /**
     * @param bool $linethrough
     */
    public function setLinethrough(bool $linethrough): void
    {
        $this->linethrough = $linethrough;
    }

    /**
     * @return bool|null
     */
    public function isUnderline(): ?bool
    {
        return $this->underline;
    }

    /**
     * @param bool $underline
     */
    public function setUnderline(bool $underline): void
    {
        $this->underline = $underline;
    }

    /**
     * @return bool|null
     */
    public function isItalic(): ?bool
    {
        return $this->italic;
    }

    /**
     * @param bool $italic
     */
    public function setItalic(bool $italic): void
    {
        $this->italic = $italic;
    }

    /**
     * @return bool|null
     */
    public function isBold(): ?bool
    {
        return $this->bold;
    }

    /**
     * @param bool $bold
     */
    public function setBold(bool $bold): void
    {
        $this->bold = $bold;
    }

    /**
     * @return bool|null
     */
    public function isCapitalize(): ?bool
    {
        return $this->capitalize;
    }

    /**
     * @param bool $capitalize
     */
    public function setCapitalize(bool $capitalize): void
    {
        $this->capitalize = $capitalize;
    }

    /**
     * @return bool|null
     */
    public function isLowercase(): ?bool
    {
        return $this->lowercase;
    }

    /**
     * @param bool $lowercase
     */
    public function setLowercase(bool $lowercase): void
    {
        $this->lowercase = $lowercase;
    }

    /**
     * @return bool|null
     */
    public function isUppercase(): ?bool
    {
        return $this->uppercase;
    }

    /**
     * @param bool $uppercase
     */
    public function setUppercase(bool $uppercase): void
    {
        $this->uppercase = $uppercase;
    }
}
