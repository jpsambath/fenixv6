<?php


namespace App\Entity\Design;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity
 */
class Text extends Design
{
    /**
     * @var array
     * @ORM\Column(type="array", nullable=true)
     */
    private $lines;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $length;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $word_count;

    /**
     * @var string
     * @ORM\Column(type="string", length=1, nullable=true)
     */
    private $genre;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Image", inversedBy="texts")
     * @ORM\JoinTable(name="design_text_image",
     * joinColumns={@ORM\JoinColumn(name="design_image_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_text_id", referencedColumnName="id")}
     * )
     */
    private $images;


    public function __construct()
    {
        parent::__construct();
        $this->images = new ArrayCollection();
        $this->lines = new ArrayCollection([
            1 => null,
            2 => null,
            3 => null,
            4 => null,
            5 => null,
        ]);

    }

    /**
     * @return int
     */
    public function getLength(): int
    {
        return $this->length;
    }

    /**
     * @param int $length
     */
    public function setLength(int $length): void
    {
        $this->length = $length;
    }

    /**
     * @return int
     */
    public function getWordCount(): int
    {
        return $this->word_count;
    }

    /**
     * @param int $word_count
     */
    public function setWordCount(int $word_count): void
    {
        $this->word_count = $word_count;
    }

    /**
     * @return string
     */
    public function getGenre(): string
    {
        return $this->genre;
    }

    /**
     * @param string $genre
     */
    public function setGenre(string $genre): void
    {
        $this->genre = $genre;
    }

    /**
     * @return Collection|Image[]
     */
    public function getImages(): Collection
    {
        return $this->images;
    }

    public function addImage(Image $image): self
    {
        if (!$this->images->contains($image)) {
            $this->images[] = $image;
        }

        return $this;
    }

    public function removeImage(Image $image): self
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
        }

        return $this;
    }

    /**
     * @return array
     */
    public function getLines(): array
    {
        return $this->lines;
    }

    /**
     * @param array $lines
     */
    public function setLines(array $lines): void
    {
        $this->lines = $lines;
    }

    public function replaceLine(int $key, string $line): self
    {
        $this->lines[$key] = $line;

        return $this;
    }

    public function clearLine(int $key): self
    {
        $this->lines[$key] = null;

        return $this;
    }

}