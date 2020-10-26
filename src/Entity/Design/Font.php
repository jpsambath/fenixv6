<?php

namespace App\Entity\Design;

use App\Repository\Design\FontRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=FontRepository::class)
 * @ORM\Table("design_font")
 */
class Font
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany (targetEntity="App\Entity\Design\LineStyle", mappedBy="font")
     */
    private $lineStyles;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $postscriptName;

    public function __construct()
    {
        $this->lineStyles = new ArrayCollection();
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

    public function getPostscriptName(): ?string
    {
        return $this->postscriptName;
    }

    public function setPostscriptName(string $postscriptName): self
    {
        $this->postscriptName = $postscriptName;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getLineStyles()
    {
        return $this->lineStyles;
    }

    /**
     * @param mixed $lineStyles
     */
    public function setLineStyles($lineStyles): void
    {
        $this->lineStyles = $lineStyles;
    }

    public function addLineStyle(LineStyle $lineStyle): self
    {
        if (!$this->lineStyles->contains($lineStyle)) {
            $this->lineStyles[] = $lineStyle;
        }

        return $this;
    }

    public function removeLineStyle(LineStyle $lineStyle): self
    {
        if ($this->lineStyles->contains($lineStyle)) {
            $this->lineStyles->removeElement($lineStyle);
        }

        return $this;
    }
}
