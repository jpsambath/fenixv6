<?php

namespace App\Entity\Printful;

use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\AvailabilityStatusRepository")
 * @ORM\Table(name="printful_availabilitystatus")
 */
class AvailabilityStatus
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue()
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $region;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $status;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\Printful\Variant", inversedBy="availability_status")
     * @var Variant
     * @Serializer\Type("App\Entity\Printful\Variant")
     */
    private $variant;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRegion(): ?string
    {
        return $this->region;
    }

    public function setRegion(?string $region): self
    {
        $this->region = $region;

        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(?string $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getVariant(): ?Variant
    {
        return $this->variant;
    }

    public function setVariant(?Variant $variant): self
    {
        $this->variant = $variant;

        return $this;
    }
}
