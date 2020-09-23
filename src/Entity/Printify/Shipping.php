<?php

namespace App\Entity\Printify;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Symfony\Component\Validator\Constraints\Json;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\ShippingRepository")
 * @ORM\Table(name="printify_shipping")
 */
class Shipping
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
     * @var array
     * @ORM\Column(type="json")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("array")
     */
    private $handling_time;

    /**
     * @var ArrayCollection<Profile>
     * @ORM\OneToMany(targetEntity="App\Entity\Printify\Profile", mappedBy="shipping")
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Profile>")
     */
    private $profiles;

    /**
     * @var Blueprint
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Blueprint", inversedBy="shippings")
     * @ORM\JoinColumn(onDelete="CASCADE")
     * @MaxDepth(1)
     * @Serializer\Type("App\Entity\Printify\Blueprint")
     */
    private $blueprint;

    /**
     * @var Provider
     * @ORM\ManyToOne(targetEntity="App\Entity\Printify\Provider", inversedBy="shippings")
     * @ORM\JoinColumn(onDelete="CASCADE")
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("App\Entity\Printify\Provider")
     */
    private $provider;

    public function __construct()
    {
        $this->profiles = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBlueprint(): ?Blueprint
    {
        return $this->blueprint;
    }

    public function setBlueprint(?Blueprint $blueprint): self
    {
        $this->blueprint = $blueprint;

        return $this;
    }

    public function getProvider(): ?Provider
    {
        return $this->provider;
    }

    public function setProvider(?Provider $provider): self
    {
        $this->provider = $provider;

        return $this;
    }

    /**
     * @param Profile $profile
     * @return $this
     */
    public function addProfile(Profile $profile)
    {
        if (!$this->profiles->contains($profile)) {
            $this->profiles->add($profile);
            $profile->setShipping($this);
        }
        return $this;
    }

    /**
     * @param Profile $profile
     * @return $this
     */
    public function removeProfile(Profile $profile)
    {
        if ($this->profiles->contains($profile)) {
            $this->profiles->removeElement($profile);
            $profile->setShipping(null);
        }
        return $this;
    }

    /**
     * @return Collection|null
     */
    public function getProfiles(): ?Collection
    {
        return $this->profiles;
    }

    /**
     * @param Collection $profiles
     */
    public function setProfiles(Collection $profiles): void
    {
        $this->profiles = $profiles;
    }

    /**
     * @return array
     */
    public function getHandlingTime(): array
    {
        return $this->handling_time;
    }

    /**
     * @param array $handling_time
     */
    public function setHandlingTime(array $handling_time): void
    {
        $this->handling_time = $handling_time;
    }


}
