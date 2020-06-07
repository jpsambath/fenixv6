<?php

namespace App\Entity\Printify;

use DateTime;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\UploadRepository")
 * @ORM\Table(name="printify_upload")
 */
class Upload
{
    /**
     * @var string
     * @ORM\Id()
     * @ORM\Column(type="string")
     * @Serializer\Type("string")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $file_name;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     * @Serializer\Type("string")
     */
    private $height;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $width;

    /**
     * @var integer
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $size;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $mime_type;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $preview_url;

    /**
     * @var datetime
     * @ORM\Column(type="datetime", nullable=true)
     * @Serializer\Type("DateTime<'Y-m-d H:i:s'>")
     */
    private $upload_time;

    public function getFileName(): ?string
    {
        return $this->file_name;
    }

    public function setFileName(string $file_name): self
    {
        $this->file_name = $file_name;

        return $this;
    }

    public function getHeight(): ?int
    {
        return $this->height;
    }

    public function setHeight(int $height): self
    {
        $this->height = $height;

        return $this;
    }

    public function getWidth(): ?int
    {
        return $this->width;
    }

    public function setWidth(int $width): self
    {
        $this->width = $width;

        return $this;
    }

    public function getSize(): ?int
    {
        return $this->size;
    }

    public function setSize(int $size): self
    {
        $this->size = $size;

        return $this;
    }

    public function getMimeType(): ?string
    {
        return $this->mime_type;
    }

    public function setMimeType(string $mime_type): self
    {
        $this->mime_type = $mime_type;

        return $this;
    }

    public function getPreviewUrl(): ?string
    {
        return $this->preview_url;
    }

    public function setPreviewUrl(string $preview_url): self
    {
        $this->preview_url = $preview_url;

        return $this;
    }

    /**
     * @return DateTime
     */
    public function getUploadTime(): DateTime
    {
        return $this->upload_time;
    }

    /**
     * @param DateTime $upload_time
     */
    public function setUploadTime(DateTime $upload_time): void
    {
        $this->upload_time = $upload_time;
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     */
    public function setId(string $id): void
    {
        $this->id = $id;
    }
}
