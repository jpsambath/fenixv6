<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;
use JMS\Serializer\Annotation as Serializer;


/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\DesignRepository")
 * @ORM\Table("design_design")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="type", type="string", length=255)
 * @ORM\DiscriminatorMap({
 *     "Des"="Design",
 *     "Img"="Image",
 *     "Txt"="Text"
 * })
 */
class Design
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="text")
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var string
     * @ORM\Column(type="text", nullable=true)
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $description;


    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", inversedBy="designssecondary", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @JoinTable(name="design_design_secondarytag",
     * joinColumns={@JoinColumn(name="design_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="secondarytag_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $secondarytags;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", inversedBy="designsprimary", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @JoinTable(name="design_design_primarytag",
     * joinColumns={@JoinColumn(name="design_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="primarytag_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $primarytags;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Template", inversedBy="designs", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @ORM\JoinTable(name="design_design_template",
     * joinColumns={@ORM\JoinColumn(name="design_template_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_design_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Template>")
     */
    private $templates;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Model", inversedBy="designs", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @ORM\JoinTable(name="design_design_model",
     * joinColumns={@ORM\JoinColumn(name="design_model_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_design_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Model>")
     */
    private $models;

    /**
     * @ORM\ManyToMany(targetEntity=Support::class, inversedBy="designs", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @ORM\JoinTable(name="design_design_support",
     * joinColumns={@ORM\JoinColumn(name="design_support_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_design_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Support>")
     */
    private $supports;

    /**
     * @ORM\ManyToMany(targetEntity=Shop::class, mappedBy="designs", cascade={"persist", "merge"})
     * @Serializer\Groups({"design_export"})
     * @ORM\JoinTable(name="design_design_shops",
     * joinColumns={@ORM\JoinColumn(name="design_shop_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_design_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Shop>")
     */
    private $shops;



    public function __construct()
    {
        $this->secondarytags = new ArrayCollection();
        $this->primarytags = new ArrayCollection();
        $this->templates = new ArrayCollection();
        $this->models = new ArrayCollection();
        $this->supports = new ArrayCollection();
        $this->shops = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getSecondarytags(): Collection
    {
        return $this->secondarytags;
    }

    public function addSecondarytags(Tag $tag): self
    {
        if (!$this->secondarytags->contains($tag)) {
            $this->secondarytags[] = $tag;
        }

        return $this;
    }

    public function removeSecondarytags(Tag $tag): self
    {
        if ($this->secondarytags->contains($tag)) {
            $this->secondarytags->removeElement($tag);
        }

        return $this;
    }

    /**
     * @return Collection|Tag[]
     */
    public function getPrimarytags(): Collection
    {
        return $this->primarytags;
    }

    public function addPrimarytags(Tag $tag): self
    {
        if (!$this->primarytags->contains($tag)) {
            $this->primarytags[] = $tag;
        }

        return $this;
    }

    public function removePrimarytags(Tag $tag): self
    {
        if ($this->primarytags->contains($tag)) {
            $this->primarytags->removeElement($tag);
        }

        return $this;
    }

    /**
     * @return Collection|Template[]
     */
    public function getTemplates(): Collection
    {
        return $this->templates;
    }

    public function addTemplate(Template $template): self
    {
        if (!$this->templates->contains($template)) {
            $this->templates[] = $template;
        }

        return $this;
    }

    public function removeTemplate(Template $template): self
    {
        if ($this->templates->contains($template)) {
            $this->templates->removeElement($template);
        }

        return $this;
    }

    /**
     * @return Collection|Model[]
     */
    public function getModels(): Collection
    {
        return $this->models;
    }

    public function addModel(Model $model): self
    {
        if (!$this->models->contains($model)) {
            $this->models[] = $model;
        }

        return $this;
    }

    public function removeModel(Model $model): self
    {
        if ($this->models->contains($model)) {
            $this->models->removeElement($model);
        }

        return $this;
    }

    /**
     * @param Collection $models
     */
    public function setModels(Collection $models): void
    {
        $this->models = $models;
    }

    /**
     * @param Collection $templates
     */
    public function setTemplates(Collection $templates): void
    {
        $this->templates = $templates;
    }

    /**
     * @param Collection $tags
     */
    public function setTags(Collection $tags): void
    {
        $this->tags = $tags;
    }

    /**
     * @return Collection|Support[]
     */
    public function getSupports(): Collection
    {
        return $this->supports;
    }

    public function addSupport(Support $support): self
    {
        if (!$this->supports->contains($support)) {
            $this->supports[] = $support;
        }

        return $this;
    }

    public function removeSupport(Support $support): self
    {
        $this->supports->removeElement($support);

        return $this;
    }

    /**
     * @return Collection|Shop[]
     */
    public function getShops(): Collection
    {
        return $this->shops;
    }

    public function addShop(Shop $shop): self
    {
        if (!$this->shops->contains($shop)) {
            $this->shops[] = $shop;
            $shop->addDesign($this);
        }

        return $this;
    }

    public function removeShop(Shop $shop): self
    {
        if ($this->shops->removeElement($shop)) {
            $shop->removeDesign($this);
        }

        return $this;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }


}
