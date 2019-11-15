<?php

namespace App\Controller\Mypage;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
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
    public function index(Request $request)
    {

        /** @var User $user */
        $user = $this->getUser();

        if (!is_object($user) || !$user instanceof UserInterface) {
            throw new AccessDeniedException('ログインしてください。');
        }

        return $this->render('my_page/index.html.twig', [
            'user' => $user,
        ]);
    }
}
