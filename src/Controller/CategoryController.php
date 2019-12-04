<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CategoryController extends AbstractController
{

    /**
     * @Route("/post/{slug}", name="category_index", methods={"GET"})
     */
    public function show(Category $category, PostRepository $postRepository): Response
    {

        $posts = $postRepository->getCategoryPosts($category->getTitle());

        return $this->render('category/index.html.twig', [
            'category' => $category,
            'posts' => $posts,
        ]);
    }
}
