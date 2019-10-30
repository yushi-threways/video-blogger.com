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
     * @Route("/post/{slug}", name="category_index", methods={"GET"})
     */
    public function show(Category $category): Response
    {

        return $this->render('category/index.html.twig', [
            'category' => $category,
        ]);
    }
}
