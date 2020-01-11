<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoryRepository;
use App\Repository\PostRepository;
use Knp\Component\Pager\PaginatorInterface;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default_index")
     */
    public function index(PostRepository $postRepository, CategoryRepository $categoryRepository, PaginatorInterface $paginator)
    {

        $query = $postRepository->findAll();

        $pagination = $paginator->paginate(
            $query
        );
        $total = $pagination->getTotalItemCount();

        $posts = $postRepository->getNewPosts(6);
        $visualPost = $postRepository->getVisualPost(1);

        $categories = $categoryRepository->getCategoriesPosts();
        $topCategories = $categoryRepository->findAll();
        
        return $this->render('default/index.html.twig', [
            'total' => $total,
            'posts' => $posts,
            'categories' => $categories,
            'top_categories' => $topCategories,
            'visual_post' => $visualPost,
        ]);
    }
}
