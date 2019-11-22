<?php

namespace App\Controller;

use App\Entity\Favorite;
use App\Entity\Post;
use App\Entity\User;
use App\Form\FavoriteType;
use App\Repository\FavoriteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/favorite")
 */
class FavoriteController extends AbstractController
{

    /**
     * @Route("/add/{id}.json", name="add_post_favorite", methods={"POST"})
     */
    public function addFavorite(Request $request, Post $post, FavoriteRepository $favoriteRepositpry): Response
    {
        $user = $this->getUser();

        $favorite = $favoriteRepositpry->findOneOrCreateByUser($user, $post);

        return new JsonResponse('success', 200);
    }

    /**
     * @Route("/remove/{id}.json", name="remove_post_favorite", methods={"POST"})
     */
    public function removeFavorite(Request $request, Post $post, FavoriteRepository $favoriteRepositpry): Response
    {
        $user = $this->getUser();

        $favorite = $favoriteRepositpry->findOneByFavorite($user, $post);

        // if ($this->isCsrfTokenValid('delete'.$favorite->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($favorite);
            $entityManager->flush();
        // } 

        return new JsonResponse('success', 200);
    }
}
