<?php

namespace App\Form\Design;

use App\Entity\Design\Tag;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class TagType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('parents', EntityType::class, [
                'multiple' => true,
                'class' =>  Tag::class,
                'choice_label' => 'name',
                'required' => false,
                'placeholder' => 'Select one or several tags'
            ])
            ->add('children', EntityType::class, [
                'multiple' => true,
                'class' =>  Tag::class,
                'choice_label' => 'name',
                'required' => false,
                'placeholder' => 'Select one or several tags'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Tag::class,
        ]);
    }
}
