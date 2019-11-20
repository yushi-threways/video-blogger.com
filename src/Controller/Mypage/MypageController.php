<?php

namespace App\Controller\Mypage;

use App\Entity\Post;
use App\Repository\FavoriteRepository;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Exception\AccessDeniedException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/mypage")
 */
class MypageController extends AbstractController
{
    /**
     * @Route("/", name="mypage_index")
     */
    public function index(Request $request, FavoriteRepository $favoriteRepository, PostRepository $postRepository)
    {

        /** @var User $user */
        $user = $this->getUser();

        $post = $postRepository->findOneBy(['id' => '11']);
        $favorite = $favoriteRepository->findOneOrCreateByUser($user, $post);

        // if (!is_object($user) || !$user instanceof UserInterface) {
        //     throw new AccessDeniedException('ログインしてください。');
        // }

        return $this->render('my_page/index.html.twig', [
            'user' => $user,
            'favorite' => $favorite,
            'post' => $post,
        ]);
    }
}
