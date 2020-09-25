<?php

namespace App\Form\Design;

use App\Entity\Design\Image;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ImageType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('src')
            ->add('height')
            ->add('width')
            ->add('size')
            ->add('format')
            ->add('tags')
            ->add('templates')
            ->add('models')
            ->add('texts')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Image::class,
        ]);
    }
}
