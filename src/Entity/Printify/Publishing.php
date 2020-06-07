<?php

namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PublishingRepository")
 * @ORM\Table(name="printify_publishing")
 */
class Publishing
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $images;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $variants;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $title;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $description;

    /**
     *
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $tags;

    public function __construct()
    {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getImages(): ?bool
    {
        return $this->images;
    }

    public function setImages(?bool $images): self
    {
        $this->images = $images;

        return $this;
    }

    public function getVariants(): ?bool
    {
        return $this->variants;
    }

    public function setVariants(?bool $variants): self
    {
        $this->variants = $variants;

        return $this;
    }

    public function getTitle(): ?bool
    {
        return $this->title;
    }

    public function setTitle(?bool $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?bool
    {
        return $this->description;
    }

    public function setDescription(?bool $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getTags(): ?bool
    {
        return $this->tags;
    }

    public function setTags(?bool $tags): self
    {
        $this->tags = $tags;

        return $this;
    }
}
