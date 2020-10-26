<?php

namespace App\Entity\Design;

use App\Repository\Design\CutRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use phpDocumentor\Reflection\Types\Collection;

/**
 * @ORM\Entity(repositoryClass=CutRepository::class)
 * @ORM\Table("design_cut")
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
     * @ORM\Column(type="array")
     */
    private $parts;

    /**
     * @ORM\ManyToOne(targetEntity=Text::class, inversedBy="cuts")
     * @ORM\JoinTable(name="design_cut_text",
     * joinColumns={@ORM\JoinColumn(name="design_text_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_cut_id", referencedColumnName="id")}
     * )
     */
    private $text;

    public function __construct()
    {
        $this->parts = new ArrayCollection([
            1 => "",
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
    public function getParts(): ?ArrayCollection
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
