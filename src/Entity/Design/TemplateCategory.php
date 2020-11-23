<?php

namespace App\Entity\Design;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use JMS\Serializer\Annotation as Serializer;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Design\TemplateCategoryRepository")
 * @ORM\Table("design_templatecategory")
 */
class TemplateCategory
{
    /**
     * @var integer
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Serializer\Type("integer")
     */
    private $id;

    /**
     * @var string
     * @ORM\Column(type="string", length=255)
     * @Serializer\Type("string")
     */
    private $name;

    /**
     * @var array
     * @ORM\ManyToMany(targetEntity="App\Entity\Design\Template", inversedBy="templateCategories")
     * @ORM\JoinTable(name="design_template_templatecategory",
     * joinColumns={@ORM\JoinColumn(name="design_template_id", referencedColumnName="id")},
     * inverseJoinColumns={@ORM\JoinColumn(name="design_templatecategory_id", referencedColumnName="id")}
     * )
     * @Serializer\Type("ArrayCollection<App\Entity\Design\Template>")
     */
    private $templates;


    public function __construct()
    {
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
     * @return Collection|Template[]
     */
    public function getTemplates(): Collection
    {
        return $this->templates;
    }

    /**
     * @param Template $template
     * @return $this
     */
    public function addTemplate(Template $template): self
    {
        if (!$this->templates->contains($template)) {
            $this->templates[] = $template;
            $template->addTemplateCategory($this);
        }

        return $this;
    }

    /**
     * @param Template $template
     * @return $this
     */
    public function removeTemplate(Template $template): self
    {
        if ($this->templates->contains($template)) {
            $this->templates->removeElement($template);
            $template->removeTemplateCategory($this);
        }

        return $this;
    }
}
