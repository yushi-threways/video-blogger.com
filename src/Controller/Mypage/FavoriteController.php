<?php

namespace App\Controller\Mypage;

use App\Entity\Favorite;
use App\Form\FavoriteType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("mypage/favorite")
 */
class FavoriteController extends AbstractController
{
    

    /**
     * @Route("/", name="mypage_favorite", methods={"GET","POST"})
     */
    public function index(Request $request, UserRepository $userRepository): Response
    {
        $user = $this->getUser();
        $favoritePosts = $user->getFavoritePosts();

        return $this->render('my_page/favorite.html.twig', [
            'favorite_posts' => $favoritePosts,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="mypage_favorite_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Favorite $favorite): Response
    {
        $form = $this->createForm(FavoriteType::class, $favorite);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('favorite_index');
        }

        return $this->render('favorite/edit.html.twig', [
            'favorite' => $favorite,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="mypage_favorite_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Favorite $favorite): Response
    {
        if ($this->isCsrfTokenValid('delete'.$favorite->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($favorite);
            $entityManager->flush();
        }

        return $this->redirectToRoute('favorite_index');
    }
}
