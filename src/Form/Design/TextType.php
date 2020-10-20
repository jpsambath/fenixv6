<?php

namespace App\Form\Design;

use App\Entity\Design\Cut;
use App\Entity\Design\Image;
use App\Entity\Design\Model;
use App\Entity\Design\Tag;
use App\Entity\Design\Template;
use App\Entity\Design\Text;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class TextType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('cuts', CollectionType::class, [
                'entry_type' => CutType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype_name' => '__cutname__'
            ])
            ->add('genre', ChoiceType::class, [
                'choices'  => [
                    'Masculin' => 'Masculin',
                    'Féminin' => 'Féminin',
                    'Neutre' => 'Neutre',
                ],
            ])
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
            ->add('models', EntityType::class, [
                'multiple' => true,
                'class' =>  Model::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several models'
            ])
            ->add('images', EntityType::class, [
                'multiple' => true,
                'class' =>  Image::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several images you want to link'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Text::class,
        ]);
    }
}
