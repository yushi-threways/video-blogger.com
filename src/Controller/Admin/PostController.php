<?php

namespace App\Controller\Admin;

use App\Entity\Post;
use App\Form\Type\ApiPostType;
use App\Repository\PostRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpClient\HttpClient;


/**
 * @Route("/admin/post")
 */
class PostController extends AbstractController
{

    const API_KEY = 'AIzaSyBxFnqOhHoT17GVKc3PZAHaVnOgnnVKqLk';

    
    /**
     * @Route("/", name="admin_post_index", methods={"GET"})
     */
    public function index(PostRepository $postRepository): Response
    {
        return $this->render('admin/post/index.html.twig', [
            'posts' => $postRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="admin_post_new", methods={"GET","POST"})
     */
    public function new(Request $request, PostRepository $postRepository): Response
    {
        $client = new \Google_Client();
        $client->setApplicationName("Vlooger");
        $client->setClientId(self::API_KEY);
        
        $post = new Post();
        $form = $this->createForm(ApiPostType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $url =  'https://www.googleapis.com/youtube/v3/videos?id=' . $data['videoId'] . '&key=' . self::API_KEY .'&fields=items(id,snippet(channelId,title,categoryId,description),statistics)&part=snippet,statistics';

            $httpClient = HttpClient::create();
            $response = $httpClient->request(
                'GET', 
                $url
            );
    
            $post->setVideo($data['videoId']);
            $post->setSlug($data['videoId']);
            echo '<pre>';
            var_dump($response);
            echo '</pre>';

            // $post->setTitle($response['videos']['title']);
            $post->setSummary($response['videos']['description']);
            // $post->setContent($response['videos']['description']);
            // $post->setPublishedAt(new \Date);

            // $entityManager = $this->getDoctrine()->getManager();
            // $entityManager->persist($post);
            // $entityManager->flush();

            return $this->redirectToRoute('admin_post_index');
        }

        return $this->render('admin/post/new.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="admin_post_show", methods={"GET"})
     */
    public function show(Post $post): Response
    {
        return $this->render('admin/post/show.html.twig', [
            'post' => $post,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin_post_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Post $post): Response
    {
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('admin_post_index');
        }

        return $this->render('admin/post/edit.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="admin_post_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Post $post): Response
    {
        if ($this->isCsrfTokenValid('delete'.$post->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($post);
            $entityManager->flush();
        }

        return $this->redirectToRoute('post_index');
    }
}
