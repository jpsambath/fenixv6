<?php

namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\PlaceholderRepository")
 * @ORM\Table(name="printify_placeholder")
 */
class Placeholder
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Groups({"blueprintexporter", "createproduct"})
     * @Serializer\Type("string")
     */
    private $position;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $height;

    /**
     * @var integer
     * @ORM\Column(type="integer", nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $width;

    /**
     * @var ArrayCollection<Image>
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Image", inversedBy="placeholder")
     * @Serializer\Groups({"createproduct"})
     * @JoinTable(name="printify_placeholdersimages",
     *     joinColumns={@JoinColumn(name="placeholder_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="image_id", referencedColumnName="id")}
     *     )
     * @MaxDepth(1)
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Image>")
     */
    private $images;

    public function __construct()
    {
        $this->images = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): self
    {
        $this->position = $position;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * @param mixed $height
     */
    public function setHeight($height): void
    {
        $this->height = $height;
    }

    /**
     * @return mixed
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * @param mixed $width
     */
    public function setWidth($width): void
    {
        $this->width = $width;
    }

    /**
     * @param Image $image
     * @return $this
     */
    public function addImage(Image $image)
    {
        if (!$this->images->contains($image)) {
            $this->images->add($image);
        }
        return $this;
    }

    /**
     * @param Image $image
     * @return $this
     */
    public function removeImage(Image $image)
    {
        if ($this->images->contains($image)) {
            $this->images->removeElement($image);
        }
        return $this;
    }

    /**
     * @return Collection|null
     */
    public function getImages(): ?Collection
    {
        return $this->images;
    }

    /**
     * @param Collection $images
     */
    public function setImages(Collection $images): void
    {
        $this->images = $images;
    }


    /**
     * @param int $id
     * @return $this
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

}
