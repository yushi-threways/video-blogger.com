<?php

namespace App\Form\Type;

use App\Entity\Post;
use App\Entity\Category;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class PostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('title', null, [
            'attr' => ['autofocus' => true],
            'label' => 'タイトル',
        ])
         ->add('slug', null, [
            'attr' => ['autofocus' => true],
            'label' => 'スラッグ',
            'attr' => [
                'placeholder' => 'URLになります',
            ],
        ])
        ->add('video', null, [
            'attr' => ['autofocus' => true],
            'label' => 'YouTube動画ID',
        ])
        ->add('summary', TextareaType::class, [
            'label' => '記事概要',
            'required' => false,
        ])
        ->add('content', null, [
            'attr' => ['rows' => 20],
            'label' => '記事内容',
        ])
        ->add('publishedAt', DateTimePickerType::class, [
            'label' => '記事公開日',
            'help' => '記事公開日をすぎたら自動的に公開されます',
        ])
        ->add('category', EntityType::class, [
            'class' => Category::class,
            'choice_label' => 'title',
            'label' => 'イベント開催場所'
        ])
    ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
        ]);
    }
}
