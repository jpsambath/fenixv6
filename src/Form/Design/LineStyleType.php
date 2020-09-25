<?php

namespace App\Form\Design;

use App\Entity\Design\LineStyle;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class LineStyleType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('policeName')
            ->add('postPostScriptName')
            ->add('fontColor')
            ->add('majuscule')
            ->add('fontSize')
            ->add('templates')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LineStyle::class,
        ]);
    }
}
