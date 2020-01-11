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
use Knp\Component\Pager\PaginatorInterface;

/**
 * @Route("/post")
 */
class PostController extends AbstractController
{
    /**
     * @Route("/", name="post_index", methods={"GET"})
     */
    public function index(Request $request, PostRepository $postRepository, FavoriteRepository $favoriteRepository, PaginatorInterface $paginator): Response
    {
        $user = $this->getUser();

        $query = $postRepository->getNewPosts();

        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            50 /*limit per page*/
        );
    
        $total = $pagination->getTotalItemCount();
        $pagination_data = $pagination->getPaginationData();
        $start = $pagination_data['firstItemNumber'];
        $end = $pagination_data['lastItemNumber'];

        return $this->render('post/index.html.twig', [
            'pagination' => $pagination,
            'total' => $total,
            'start' => $start,
            'end' => $end
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
        $randPosts = $postRepository->getRandPosts(10);
        return $this->render('post/show.html.twig', [
            'post' => $post,
            'categoryPosts' => $categoryPosts,
            'randPosts' => $randPosts,
        ]);
    }
}
