<?php

namespace App\Form\Type;

use App\Entity\Post;
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
            'help' => 'help.post_summary',
            'label' => '記事概要',
        ])
        ->add('content', null, [
            'attr' => ['rows' => 20],
            'help' => 'help.post_content',
            'label' => '記事内容',
        ])
        ->add('publishedAt', DateTimePickerType::class, [
            'label' => 'label.published_at',
            'help' => '記事公開日',
        ])
        ->add('tags', TagsInputType::class, [
            'label' => 'タグ',
            'required' => false,
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
