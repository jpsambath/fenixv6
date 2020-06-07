<?php

namespace App\Entity\Printify;

use App\Entity\Printify\Placeholder;
use App\Entity\Printify\Product;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ImageRepository")
 * @ORM\Table(name="printify_image")

 */
class Image
{
    /**
     * @var string
     * @ORM\Id()
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="string")
     * @Serializer\Type("string")
     */
    private $id;

    /**
     * @var string
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var string
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $type;

    /**
     * @var integer
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $height;

    /**
     * @var integer
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $width;

    /**
     * @var float
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="float", nullable=true)
     * @Serializer\Type("float")
     */
    private $x;

    /**
     * @var float
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="float", nullable=true)
     * @Serializer\Type("float")
     */
    private $y;

    /**
     * @var float
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="float", nullable=true)
     * @Serializer\Type("float")
     */
    private $scale;

    /**
     * @var float
     * @Serializer\Groups({"createproduct"})
     * @ORM\Column(type="float", nullable=true)
     * @Serializer\Type("float")
     */
    private $angle;

    /**
     * @var Placeholder
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Placeholder", mappedBy="images")
     * @MaxDepth(1)
     * @Serializer\Type("App\Entity\Printify\Placeholder")
     */
    private $placeholder;

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

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

    public function getX(): ?float
    {
        return $this->x;
    }

    public function setX(?float $x): self
    {
        $this->x = $x;

        return $this;
    }

    public function getY(): ?float
    {
        return $this->y;
    }

    public function setY(?float $y): self
    {
        $this->y = $y;

        return $this;
    }

    public function getScale(): ?float
    {
        return $this->scale;
    }

    public function setScale(?float $scale): self
    {
        $this->scale = $scale;

        return $this;
    }

    public function getAngle(): ?float
    {
        return $this->angle;
    }

    public function setAngle(?float $angle): self
    {
        $this->angle = $angle;

        return $this;
    }

    public function getPlaceholder(): ?Placeholder
    {
        return $this->placeholder;
    }

    public function setPlaceholder(?Placeholder $placeholder): self
    {
        $this->placeholder = $placeholder;

        return $this;
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
     * @return $this
     */
    public function setId(string $id): self
    {
        $this->id = $id;

        return $this;
    }

}
