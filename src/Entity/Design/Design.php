<?php

namespace App\Entity\Design;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\DesignRepository")
 */
class Design
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="text")
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $line1;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $line2;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $line3;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $line4;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $line5;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $length;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $word_count;

    /**
     * @ORM\Column(type="string", length=1, nullable=true)
     */
    private $genre;

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

    public function getLine1(): ?string
    {
        return $this->line1;
    }

    public function setLine1(string $line1): self
    {
        $this->line1 = $line1;

        return $this;
    }

    public function getLine2(): ?string
    {
        return $this->line2;
    }

    public function setLine2(string $line2): self
    {
        $this->line2 = $line2;

        return $this;
    }

    public function getLine3(): ?string
    {
        return $this->line3;
    }

    public function setLine3(string $line3): self
    {
        $this->line3 = $line3;

        return $this;
    }

    public function getLine4(): ?string
    {
        return $this->line4;
    }

    public function setLine4(string $line4): self
    {
        $this->line4 = $line4;

        return $this;
    }

    public function getLine5(): ?string
    {
        return $this->line5;
    }

    public function setLine5(string $line5): self
    {
        $this->line5 = $line5;

        return $this;
    }

    public function getLength(): ?int
    {
        return $this->length;
    }

    public function setLength(int $length): self
    {
        $this->length = $length;

        return $this;
    }

    public function getWordCount(): ?int
    {
        return $this->word_count;
    }

    public function setWordCount(int $word_count): self
    {
        $this->word_count = $word_count;

        return $this;
    }

    public function getGenre(): ?string
    {
        return $this->genre;
    }

    public function setGenre(string $genre): self
    {
        $this->genre = $genre;

        return $this;
    }
}
