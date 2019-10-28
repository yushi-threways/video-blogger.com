<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoryRepository;
use App\Repository\PostRepository;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default_index")
     */
    public function index(PostRepository $postRepository)
    {

        $posts = $postRepository->findAll(['created_at' => 'ASC']);
        
        return $this->render('default/index.html.twig', [
            'posts' => $posts,
        ]);
    }
}
