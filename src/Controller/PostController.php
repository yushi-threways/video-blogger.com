<?php

namespace App\Controller;

use App\Entity\Post;
use App\Entity\Category;
use App\Entity\Favorite;
use App\Form\Type\PostType;
use App\Repository\PostRepository;
use App\Repository\FavoriteRepository;
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
    public function index(PostRepository $postRepository, FavoriteRepository $favoriteRepository): Response
    {
        $user = $this->getUser();

        $posts = $postRepository->getNewPosts();
        $favorite =$favoriteRepository->findBy(['user' => $user]);
    
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
            'favorite' => $favorite,
        ]);
    }

    /**
     * @Route("/{category}/{slug}", name="post_show", methods={"GET"})
     * @ParamConverter("post", options={"mapping": {"category": "category.slug", "slug": "slug"}})
     */
    public function show(Post $post, PostRepository $postRepository, $category): Response
    {
        $title = $post->getCategory()->getTitle();
        $categoryPosts = $postRepository->getCategoryPosts($title, $post->getId(), 10);
        $randPosts = $postRepository->getNewPosts(10);
        return $this->render('post/show.html.twig', [
            'post' => $post,
            'categoryPosts' => $categoryPosts,
            'randPosts' => $randPosts,
        ]);
    }
}
