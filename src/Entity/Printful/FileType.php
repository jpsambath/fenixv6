<?php

namespace App\Entity\Printful;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use JMS\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\FileTypeRepository")
 * @ORM\Table("printful_filetype")
 */
class FileType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @var integer
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     * @var string
     * @Serializer\Type("string")
     * @SerializedName ("id")
     */
    private $fileid;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $additional_price;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getAdditionalPrice(): ?string
    {
        return $this->additional_price;
    }

    public function setAdditionalPrice(?string $additional_price): self
    {
        $this->additional_price = $additional_price;

        return $this;
    }

    /**
     * @return string
     */
    public function getFileid(): string
    {
        return $this->fileid;
    }

    /**
     * @param string $fileid
     */
    public function setFileid(string $fileid): void
    {
        $this->fileid = $fileid;
    }
}
