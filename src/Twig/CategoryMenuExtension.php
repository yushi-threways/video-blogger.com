<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use App\Entity\Category;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;

class CategoryMenuExtension extends AbstractExtension
{

    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('categoryLists', [$this, 'buildCategoryLists']),
        ];
    }

    
    public function buildCategoryLists() 
    {
        $categoryRepository = $this->em->getRepository(Category::class);

        $options = array(
            'decorate' => true,
            'rootOpen' => '<ul class="sw-Side_ItemLists">',
            'rootClose' => '</ul>',
            'childOpen' => '<li class="sw-Side_ItemList">',
            'childClose' => '</li>',
            'nodeDecorator' => function($node) {
                return '<a class="sw-Side_ItemList--arrow" href="/post/category/'.$node['slug'].'">'.$node['title'].'</a>';
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