<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Category;
use App\Form\Type\PostType;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Entity;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;

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
        $posts = $postRepository->findAll();
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }

    /**
     * @param Category $category
     * @Route("/{category}", name="post_category", methods={"GET"})
     * @ParamConverter("category", options={"mapping": {"category": "category.title"}})
     */
    public function category(Category $category): Response
    {


        return $this->render('post/category.html.twig', [

        ]);
    }
    
    /**
     * @Route("/{category}/{slug}")
     * @ParamConverter("post", options={"mapping": {"category": "category.title", "slug": "slug"}})
     */
    public function show(Post $post): Response
    {
        return $this->render('post/show.html.twig', [
            'post' => $post,
        ]);
    }
}
