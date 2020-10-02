<?php

namespace App\Form\Design;

use App\Entity\Design\Design;
use App\Entity\Design\Tag;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class DesignType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('tags', Select2EntityType::class, [
                'multiple' => true,
                'remote_route' => 'design_tag_list',
                'remote_params' => [],
                'class' => 'App\Entity\Design\Tag',
                'primary_key' => 'id',
                'text_property' => 'name',
                'minimum_input_length' => 2,
                'page_limit' => 10,
                'allow_clear' => true,
                'delay' => 250,
                'cache' => true,
                'cache_timeout' => 60000, // if 'cache' is true
                'language' => 'en',
                'placeholder' => 'Selectionner un tag',
                // 'object_manager' => $objectManager, // inject a custom object / entity manager
            ])
            ->add('templates')
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
