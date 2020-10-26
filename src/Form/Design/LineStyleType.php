<?php

namespace App\Form\Design;

use App\Entity\Design\Font;
use App\Entity\Design\LineStyle;
use App\Repository\Design\FontRepository;
use Doctrine\DBAL\Types\IntegerType;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\ColorType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Tetranz\Select2EntityBundle\Form\Type\Select2EntityType;

class LineStyleType extends AbstractType
{

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('font', EntityType::class, [
                'class' =>  Font::class,
                'choice_label' => 'name'
            ])
            ->add('fontColor', ColorType::class)
            ->add('uppercase', CheckboxType::class, [
        'label_attr' => ['class' => 'switch-custom'], 'required' => false
    ])
            ->add('lowercase', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])
            ->add('capitalize', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])
            ->add('bold', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])
            ->add('italic', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])
            ->add('underline', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])
            ->add('linethrough', CheckboxType::class, [
                'label_attr' => ['class' => 'switch-custom'], 'required' => false
            ])

            ->add('fontSize', ChoiceType::class, [
                'choices'  => [
                    '8px' => '8',
                    '9px' => '9',
                    '10px' => '10',
                    '11px' => '11',
                    '12px' => '12',
                    '14px' => '14',
                    '16px' => '16',
                    '18px' => '18',
                    '20px' => '20',
                    '22px' => '22',
                    '24px' => '24',
                    '26px' => '26',
                    '28px' => '28',
                    '36px' => '36',
                    '48px' => '48',
                    '72px' => '72',
                    '90px' => '90',
                    '100px' => '100',
                    '120px' => '120',
                    '140px' => '140',
                    '200px' => '200',
                    '240px' => '240',
                    '300px' => '300',
                    '350px' => '350',
                    '400px' => '400',
                    '450px' => '450',
                    '500px' => '500'
                ]])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => LineStyle::class,
        ]);
    }
}
