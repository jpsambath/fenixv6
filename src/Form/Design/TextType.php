<?php

namespace App\Form\Design;

use App\Entity\Design\Text;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class TextType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('cuts')
            ->add('length')
            ->add('word_count')
            ->add('genre')
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
            ->add('images')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Text::class,
        ]);
    }
}
