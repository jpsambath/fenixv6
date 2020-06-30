<?php

namespace App\Entity\Printful;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printful\OptionTypeRepository")
 * @ORM\Table("printful_optiontype")
 */
class OptionType
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="string")
     * @var string
     * @Serializer\Type("string")
     */
    private $id;

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
    private $type;

    /**
     * @ORM\Column(type="array", nullable=true)
     * @var array
     * @Serializer\Type("array")
     */
    private $option_values = [];

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @var string
     * @Serializer\Type("string")
     */
    private $additional_price;

    /**
     * @ORM\Column(type="array", nullable=true)
     * @var array
     * @Serializer\Type("array")
     */
    private $additional_price_breakdown = [];

    public function getId(): ?int
    {
        return $this->id;
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

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getOptionValues(): ?array
    {
        return $this->option_values;
    }

    public function setOptionValues(?array $option_values): self
    {
        $this->option_values = $option_values;

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

    public function getAdditionalPriceBreakdown(): ?array
    {
        return $this->additional_price_breakdown;
    }

    public function setAdditionalPriceBreakdown(?array $additional_price_breakdown): self
    {
        $this->additional_price_breakdown = $additional_price_breakdown;

        return $this;
    }
}
