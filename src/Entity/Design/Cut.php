<?php

namespace App\Entity\Design;

use App\Repository\Design\CutRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=CutRepository::class)
 */
class Cut
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer")
     */
    private $linecount;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $parts;

    /**
     * @ORM\ManyToOne(targetEntity=Text::class, inversedBy="cuts")
     */
    private $text;

    public function __construct()
    {
        $this->parts = new ArrayCollection([
            1 => "",
            2 => "",
            3 => "",
            4 => "",
            5 => ""
        ]);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getLinecount(): ?int
    {
        return $this->linecount;
    }

    public function setLinecount(int $linecount): self
    {
        $this->linecount = $linecount;

        return $this;
    }

    /**
     * @return array|ArrayCollection|null
     */
    public function getParts(): ?array
    {
        return $this->parts;
    }

    /**
     * @param array $parts
     * @return $this
     */
    public function setParts(array $parts): self
    {
        $this->parts = $parts;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * @param mixed $text
     */
    public function setText($text): void
    {
        $this->text = $text;
    }
}
