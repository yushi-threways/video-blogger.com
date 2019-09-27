<?php

namespace App\Controller;

use App\Entity\Post;
use App\Form\Type\PostType;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/post")
 */
class PostController extends AbstractController
{
    /**
     * @Route("/", name="post_index", methods={"GET"})
     */
    public function index(PostRepository $postRepository): Response
    {
        

        return $this->render('post/index.html.twig', [
        ]);
    }

   
    public function show(Post $post): Response
    {
        return $this->render('post/show.html.twig', [
            'post' => $post,
        ]);
    }

    /**
     * @Route("/post.json", methods={"GET"}, options={"expose"=true})
     */
    public function getAllPostResponse(PostRepository $postRepository): Response
    {
        $post = $postRepository->findBy(
            [],
            ['createdAt' => 'DESC']
        );

        return $this->json($post);
    }
}
