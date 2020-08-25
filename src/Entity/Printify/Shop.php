<?php

namespace App\Entity\Printify;

use App\Entity\User;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;
use Symfony\Component\Serializer\Annotation\MaxDepth;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Printify\ShopRepository")
 * @ORM\Table(name="printify_shop")
 */
class Shop
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\Column(type="integer")
     * @SerializedName("id")
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $title;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $sales_channel;

    /**
     * @var User
     * @ORM\ManyToOne(targetEntity="App\Entity\User")
     * @MaxDepth(1)
     * @Serializer\Type("App\Entity\User")
     */
    private $user;

    /**
     * @var string
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("string")
     */
    private $platform;

    /**
     * @var ArrayCollection<Blueprint>
     * @ORM\ManyToMany(targetEntity="App\Entity\Printify\Blueprint")
     * @JoinTable(name="printify_blueprintsshop",
     *      joinColumns={@JoinColumn(name="shop_id", referencedColumnName="id")},
     *      inverseJoinColumns={@JoinColumn(name="blueprint_id", referencedColumnName="id")}
     *      )
     * @MaxDepth(1)
     * @Serializer\Groups({"blueprintexporter"})
     * @Serializer\Type("ArrayCollection<App\Entity\Printify\Blueprint>")
     */
    private $blueprints;

    public function __construct()
    {
        $this->blueprints = new ArrayCollection();
    }


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

    public function getSalesChannel(): ?string
    {
        return $this->sales_channel;
    }

    public function setSalesChannel(?string $sales_channel): self
    {
        $this->sales_channel = $sales_channel;

        return $this;
    }

    /**
     * @param mixed $id
     */
    public function setId($id): void
    {
        $this->id = $id;
    }

    /**
     * @return mixed
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * @param mixed $user
     */
    public function setUser($user): void
    {
        $this->user = $user;
    }

    /**
     * @return mixed
     */
    public function getPlatform()
    {
        return $this->platform;
    }

    /**
     * @param mixed $platform
     */
    public function setPlatform($platform): void
    {
        $this->platform = $platform;
    }

    /**
     * @param Blueprint $blueprint
     * @return $this
     */
    public function addBlueprint(Blueprint $blueprint)
    {
        if (!$this->blueprints->contains($blueprint)) {
            $this->blueprints->add($blueprint);
        }
        return $this;
    }

    /**
     * @param Blueprint $blueprint
     * @return $this
     */
    public function removeBlueprint(Blueprint $blueprint)
    {
        if ($this->blueprints->contains($blueprint)) {
            $this->blueprints->removeElement($blueprint);
        }
        return $this;
    }

    /**
     * @return Collection
     */
    public function getBlueprints(): ?Collection
    {
        return $this->blueprints;
    }

    /**
     * @param Collection $blueprints
     */
    public function setBlueprints(Collection $blueprints): void
    {
        $this->blueprints = $blueprints;
    }


}
