<?php

namespace App\Controller;

use App\Entity\Category;
use App\Form\CategoryType;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Knp\Component\Pager\PaginatorInterface;


class CategoryController extends AbstractController
{

    /**
     * @Route("/post/{slug}", name="category_index", methods={"GET"})
     */
    public function show(Request $request, Category $category, PostRepository $postRepository, PaginatorInterface $paginator): Response
    {

        $query = $postRepository->getCategoryPosts($category->getTitle());

        $pagination = $paginator->paginate(
            $query, /* query NOT result */
            $request->query->getInt('page', 1), /*page number*/
            10 /*limit per page*/
        );

        $total = $pagination->getTotalItemCount();
        $pagination_data = $pagination->getPaginationData();
        $start = $pagination_data['firstItemNumber'];
        $end = $pagination_data['lastItemNumber'];

        return $this->render('category/index.html.twig', [
            'category' => $category,
            'pagination' => $pagination,
            'total' => $total,
            'start' => $start,
            'end' => $end
        ]);
    }
}
