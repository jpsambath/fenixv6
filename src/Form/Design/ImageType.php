<?php

namespace App\Form\Design;

use App\Entity\Design\Image;
use App\Entity\Design\Model;
use App\Entity\Design\Tag;
use App\Entity\Design\Template;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('file', FileType::class, [
                'attr' =>
                    ['placeholder' => 'Select a picture',]
            ])
            ->add('src', HiddenType::class)
            ->add('height')
            ->add('width')
            ->add('size')
            ->add('format')
            ->add('tags', EntityType::class, [
                'multiple' => true,
                'class' => Tag::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several tags',
                'required' => false
            ])
            ->add('templates', EntityType::class, [
                'multiple' => true,
                'class' => Template::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several templates',
                'required' => false
            ])
            ->add('models', EntityType::class, [
                'multiple' => true,
                'class' => Model::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several models',
                'required' => false
            ]);
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Image::class,
        ]);
    }
}
