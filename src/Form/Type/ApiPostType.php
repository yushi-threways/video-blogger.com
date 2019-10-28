<?php

namespace App\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class ApiPostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('videoId', null, [
            'attr' => ['autofocus' => true],
            'label' => 'YouTubeId',
        ])
        ->add('publishedAt', DateTimeType::class, [
            'label' => '記事公開日時',
            'widget' => 'single_text',
            // 'html5' => false,
            'attr' => ['class' => 'js-datepicker'],
        ])
        ->add('category', EntityType::class, [
            'class' => Category::class,
            'choice_label' => 'title',
            'label' => 'カテゴリ'
        ])
    ;
    }
}
