<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\ORM\Mapping\JoinColumn;
use JMS\Serializer\Annotation as Serializer;
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
     * @Serializer\Groups({"design_export"})
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @SerializedName("text")
     * @Serializer\Groups({"design_export"})
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", inversedBy="children")
     * @JoinTable(name="design_tagparents_tagchildren",
     * joinColumns={@JoinColumn(name="tag_children_id", referencedColumnName="id")},
     * inverseJoinColumns={@JoinColumn(name="tag_parent_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $parents;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag", mappedBy="parents")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $children;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Tag")
     * @JoinTable(name="design_tagsiblings")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $siblings;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Design", mappedBy="tags")
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Design>")
     */
    private $designs;

    /**
     * @var array
     * @ORM\OneToMany(targetEntity=TagRelationship::class, mappedBy="tag_origin", orphanRemoval=true)
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $tag_origin;

    /**
     * @var array
     * @ORM\OneToMany(targetEntity=TagRelationship::class, mappedBy="tag_target", orphanRemoval=true)
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Tag>")
     */
    private $tag_target;

    public function __construct()
    {
        $this->parents = new ArrayCollection();
        $this->children = new ArrayCollection();
        $this->designs = new ArrayCollection();
        $this->siblings = new ArrayCollection();
        $this->tag_origin = new ArrayCollection();
        $this->tag_target = new ArrayCollection();
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
    public function getParents(): Collection
    {
        return $this->parents;
    }

    public function addParent(self $parent): self
    {
        if (!$this->parents->contains($parent)) {
            $this->parents[] = $parent;
            $parent->addChild($this);
        }

        return $this;
    }

    public function removeParent(self $parent): self
    {
        if ($this->parents->contains($parent)) {
            $this->parents->removeElement($parent);
            $parent->removeChild($this);
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

    /**
     * @param array $parents
     */
    public function setParents(array $parents): void
    {
        $this->parents = $parents;
    }

    /**
     * @param array $children
     */
    public function setChildren(array $children): void
    {
        $this->children = $children;
    }

    /**
     * @return array
     */
    public function getSiblings(): array
    {
        return $this->siblings;
    }

    /**
     * @param array $siblings
     */
    public function setSiblings(array $siblings): void
    {
        $this->siblings = $siblings;
    }

    /**
     * @return Collection|TagRelationship[]
     */
    public function getTagOrigin(): Collection
    {
        return $this->tag_origin;
    }

    public function addTagOrigin(TagRelationship $tagOrigin): self
    {
        if (!$this->tag_origin->contains($tagOrigin)) {
            $this->tag_origin[] = $tagOrigin;
            $tagOrigin->setTagOrigin($this);
        }

        return $this;
    }

    public function removeTagOrigin(TagRelationship $tagOrigin): self
    {
        if ($this->tag_origin->removeElement($tagOrigin)) {
            // set the owning side to null (unless already changed)
            if ($tagOrigin->getTagOrigin() === $this) {
                $tagOrigin->setTagOrigin(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|TagRelationship[]
     */
    public function getTagTarget(): Collection
    {
        return $this->tag_target;
    }

    public function addTagTarget(TagRelationship $tagTarget): self
    {
        if (!$this->tag_target->contains($tagTarget)) {
            $this->tag_target[] = $tagTarget;
            $tagTarget->setTagTarget($this);
        }

        return $this;
    }

    public function removeTagTarget(TagRelationship $tagTarget): self
    {
        if ($this->tag_target->removeElement($tagTarget)) {
            // set the owning side to null (unless already changed)
            if ($tagTarget->getTagTarget() === $this) {
                $tagTarget->setTagTarget(null);
            }
        }

        return $this;
    }

}
