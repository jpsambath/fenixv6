<?php


namespace App\Entity\Design;


use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;

/**
 * @ORM\Entity
 * @ORM\Table("design_image")
 */
class Image extends Design
{
    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $src;

    /**
     * Unmapped property to handle file uploads
     * @var UploadedFile
     */
    private $file;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $height;
    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $width;
    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     */
    private $size;

    /**
     * @var string
     * @ORM\Column(type="string", length=4, nullable=true)
     */
    private $format;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Text", mappedBy="images")
     */
    private $texts;

    public function __construct()
    {
        parent::__construct();
        $this->texts = new ArrayCollection();
    }

    /**
     * @param UploadedFile|null $file
     */
    public function setFile(UploadedFile $file = null)
    {
        $this->file = $file;
    }

    /**
     * @return UploadedFile
     */
    public function getFile()
    {
        return $this->file;
    }

    /**
     * @return Collection|Text[]
     */
    public function getTexts(): Collection
    {
        return $this->texts;
    }

    public function addText(Text $text): self
    {
        if (!$this->texts->contains($text)) {
            $this->texts[] = $text;
            $text->addImage($this);
        }

        return $this;
    }

    public function removeText(Text $text): self
    {
        if ($this->texts->contains($text)) {
            $this->texts->removeElement($text);
            $text->removeImage($this);
        }

        return $this;
    }

    /**
     * @return string|null
     */
    public function getSrc(): ?string
    {
        return $this->src;
    }

    /**
     * @param string $src
     */
    public function setSrc(string $src): void
    {
        $this->src = $src;
    }

    /**
     * @return int|null
     */
    public function getHeight(): ?int
    {
        return $this->height;
    }

    /**
     * @param int $height
     */
    public function setHeight(int $height): void
    {
        $this->height = $height;
    }

    /**
     * @return int|null
     */
    public function getWidth(): ?int
    {
        return $this->width;
    }

    /**
     * @param int $width
     */
    public function setWidth(int $width): void
    {
        $this->width = $width;
    }

    /**
     * @return int|null
     */
    public function getSize(): ?int
    {
        return $this->size;
    }

    /**
     * @param int $size
     */
    public function setSize(int $size): void
    {
        $this->size = $size;
    }

    /**
     * @return string|null
     */
    public function getFormat(): ?string
    {
        return $this->format;
    }

    /**
     * @param string $format
     */
    public function setFormat(string $format): void
    {
        $this->format = $format;
    }

}