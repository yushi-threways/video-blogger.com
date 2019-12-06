<?php

namespace App\Form\Type;

use Doctrine\ORM\EntityRepository;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use App\Entity\Category;
use App\Entity\Post;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class ApiPostType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('video', null, [
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
            ->add('next', EntityType::class, [
                'class' => Post::class,
                'choice_label' => 'title',
                'label' => '次の投稿',
                'required' => false,
                'placeholder' => 'Choose an post',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('p')
                        ->where('p.previous is not null')
                        ->orderBy('p.title', 'ASC')
                        ;
                },
            ])
            ->add('previous', EntityType::class, [
                'class' => Post::class,
                'choice_label' => 'title',
                'label' => '前の投稿',
                'required' => false,
                'placeholder' => 'Choose an post',
                'query_builder' => function (EntityRepository $er) {
                    return $er->createQueryBuilder('p')
                        ->where('p.next is null')
                        ->orderBy('p.title', 'ASC');
                },
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Post::class,
            'validation_groups' => ['create'],

        ]);
    }
}
