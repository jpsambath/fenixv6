<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinColumn;
use Doctrine\ORM\Mapping\JoinTable;


/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\DesignRepository")
 * @ORM\Table("design_design")
 * @ORM\InheritanceType("SINGLE_TABLE")
 * @ORM\DiscriminatorColumn(name="design_type", type="string", length=255)
 * @ORM\DiscriminatorMap({
 *     "Img"="Image",
 *     "Txt"="Text"
 * })
 */
abstract class Design
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    private $name;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", inversedBy="designs")
     * @JoinTable(name="design_design_tag",
     * joinColumns={@JoinColumn(name="tag_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="design_id", referencedColumnName="id")}
     * )
     */
    private $tags;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Template", inversedBy="designs")
     * @ORM\JoinTable(name="design_design_template",
     * joinColumns={@ORM\JoinColumn(name="design_template_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_design_id", referencedColumnName="id")}
     * )
     */
    private $templates;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
        $this->templates = new ArrayCollection();
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
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tag $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tag $tag): self
    {
        if ($this->tags->contains($tag)) {
            $this->tags->removeElement($tag);
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
}
