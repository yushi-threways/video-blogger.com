<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\CategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{

    /**
     * @Route("post/{title}", name="category_show", methods={"GET"})
     */
    public function show(Category $category): Response
    {
        
        return $this->render('category/show.html.twig', [
            'category' => $category,
        ]);
    }
}
