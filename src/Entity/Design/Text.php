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
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $genre;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Image", inversedBy="texts")
     * @ORM\JoinTable(name="design_text_image",
     * joinColumns={@ORM\JoinColumn(name="design_image_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_text_id", referencedColumnName="id")}
     * )
     */
    private $images;

    /**
     * @ORM\OneToMany(targetEntity=Cut::class, mappedBy="text", cascade={"persist"})
     */
    private $cuts;


    public function __construct()
    {
        parent::__construct();
        $this->images = new ArrayCollection();
        $this->cuts = new ArrayCollection();

    }

    /**
     * @return int|null
     */
    public function getLength(): ?int
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
     * @return int|null
     */
    public function getWordCount(): ?int
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
     * @return string|null
     */
    public function getGenre(): ?string
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
     * @return Collection|Cut[]
     */
    public function getCuts(): Collection
    {
        return $this->cuts;
    }

    public function addCut(Cut $cut): self
    {
        if (!$this->cuts->contains($cut)) {
            $this->cuts[] = $cut;
            $cut->setText($this);
        }

        return $this;
    }

    public function removeCut(Cut $cut): self
    {
        if ($this->cuts->contains($cut)) {
            $this->cuts->removeElement($cut);
            // set the owning side to null (unless already changed)
            if ($cut->getText() === $this) {
                $cut->setText(null);
            }
        }

        return $this;
    }


    /**
     * @param ArrayCollection $cuts
     */
    public function setCuts(ArrayCollection $cuts): void
    {
        $this->cuts = $cuts;
    }

    /**
     * @param Collection $images
     */
    public function setImages(Collection $images): void
    {
        $this->images = $images;
    }
}