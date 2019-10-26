<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use App\Repository\CategoryRepository;

class CategoryMenuExtension extends AbstractExtension
{

    public function getFunctions()
    {
        return [
            new TwigFunction('categoryLists', [$this, 'buildCategoryLists']),
        ];
    }

    
    public function buildCategoryLists() 
    {
        $entityManager = $this->getDoctrine()->getManager();
        $categoryRepository = $entityManager->getRepository(Category::class);

        $options = array(
            'decorate' => true,
            'rootOpen' => '<ul class="sw-Side_ItemLists">',
            'rootClose' => '</ul>',
            'childOpen' => '<li class="sw-Side_ItemList">',
            'childClose' => '</li>',
            'nodeDecorator' => function($node) {
                return '<a class="sw-Side_ItemList--arrow" href="/post/'.$node['slug'].'">'.$node['title'].'</a>';
            }
        );
        $menuLists = $categoryRepository->childrenHierarchy(
            null, /* starting from root nodes */
            false, /* true: load all children, false: only direct */
            $options
        );

        return $menuLists;
    }
}