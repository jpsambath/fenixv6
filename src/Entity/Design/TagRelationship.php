<?php

namespace App\Entity\Design;

use App\Repository\Design\TagRelationshipRepository;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass=TagRelationshipRepository::class)
 * @ORM\Table("design_tagrelationship")
 */
class TagRelationship
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Tag::class, inversedBy="tag_origin")
     * @ORM\JoinColumn(name="tag_origin_id", referencedColumnName="id", nullable=false)
     * @Serializer\Type("App\Entity\Design\Tag")
     */
    private $tag_origin;

    /**
     * @ORM\ManyToOne(targetEntity=Tag::class, inversedBy="tag_target")
     * @ORM\JoinColumn(name="tag_target_id", referencedColumnName="id", nullable=false)
     * @Serializer\Type("App\Entity\Design\Tag")
     */
    private $tag_target;

    /**
     * @ORM\Column(type="integer")
     */
    private $count;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTagOrigin(): ?Tag
    {
        return $this->tag_origin;
    }

    public function setTagOrigin(?Tag $tag_origin): self
    {
        $this->tag_origin = $tag_origin;

        return $this;
    }

    public function getTagTarget(): ?Tag
    {
        return $this->tag_target;
    }

    public function setTagTarget(?Tag $tag_target): self
    {
        $this->tag_target = $tag_target;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(int $count): self
    {
        $this->count = $count;

        return $this;
    }
}
