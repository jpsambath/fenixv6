<?php

namespace App\Form\Design;

use App\Entity\Design\Cut;
use App\Entity\Design\Design;
use App\Entity\Design\Tag;
use App\Entity\Design\Template;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class DesignType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('tags', EntityType::class, [
                'multiple' => true,
                'class' =>  Tag::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several tags'
            ])
            ->add('templates', EntityType::class, [
                'multiple' => true,
                'class' =>  Template::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several templates'
            ])
            ->add('models')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Design::class,
        ]);
    }
}
