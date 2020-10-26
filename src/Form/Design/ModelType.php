<?php

namespace App\Form\Design;

use App\Entity\Design\Model;
use App\Entity\Design\ModelCategory;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ModelType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('file', FileType::class, [
                'attr' =>
                    ['placeholder' => 'Select a PSD model',]
            ])
            ->add('src', HiddenType::class)
            ->add('pattern')
            ->add('modelCategories', EntityType::class, [
                'multiple' => true,
                'class' => ModelCategory::class,
                'choice_label' => 'name',
                'placeholder' => 'Select one or several model categories',
                'required' => false
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Model::class,
        ]);
    }
}
