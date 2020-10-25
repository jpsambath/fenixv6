<?php

namespace App\Form\Design;

use App\Entity\Design\Cut;
use phpDocumentor\Reflection\Types\Collection;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CollectionType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CutType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('linecount', IntegerType::class)
            ->add('parts', CollectionType::class, [
                'entry_type' => \Symfony\Component\Form\Extension\Core\Type\TextType::class,
                'allow_add' => true,
                'allow_delete' => true,
                'prototype_name' => '__partname__'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Cut::class,
        ]);
    }
}
