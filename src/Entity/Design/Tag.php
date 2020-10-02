<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\JoinColumn;
use Symfony\Component\Serializer\Annotation\SerializedName;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\TagRepository")
 * @ORM\Table("design_tag")
 */
class Tag
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
     * @ORM\Column(type="string", length=255)
     * @SerializedName("text")
     */
    private $name;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", inversedBy="children")
     * @JoinTable(name="design_tagparent_tagchildren",
     * joinColumns={@JoinColumn(name="tag_parent_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="tag_children_id", referencedColumnName="id")}
     * )
     */
    private $parent;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", mappedBy="parent")
     */
    private $children;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Design", mappedBy="tags")
     */
    private $designs;

    public function __construct()
    {
        $this->parent = new ArrayCollection();
        $this->children = new ArrayCollection();
        $this->designs = new ArrayCollection();
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
     * @return Collection|self[]
     */
    public function getParent(): Collection
    {
        return $this->parent;
    }

    public function addParent(self $parent): self
    {
        if (!$this->parent->contains($parent)) {
            $this->parent[] = $parent;
        }

        return $this;
    }

    public function removeParent(self $parent): self
    {
        if ($this->parent->contains($parent)) {
            $this->parent->removeElement($parent);
        }

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getChildren(): Collection
    {
        return $this->children;
    }

    public function addChild(self $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children[] = $child;
            $child->addParent($this);
        }

        return $this;
    }

    public function removeChild(self $child): self
    {
        if ($this->children->contains($child)) {
            $this->children->removeElement($child);
            $child->removeParent($this);
        }

        return $this;
    }

    /**
     * @return Collection|Design[]
     */
    public function getDesigns(): ?Collection
    {
        return $this->designs;
    }

    public function addDesign(Design $design): self
    {
        if (!$this->designs->contains($design)) {
            $this->designs[] = $design;
            $design->addTag($this);
        }

        return $this;
    }

    public function removeDesign(Design $design): self
    {
        if ($this->designs->contains($design)) {
            $this->designs->removeElement($design);
            $design->removeTag($this);
        }

        return $this;
    }
}
