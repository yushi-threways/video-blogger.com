<?php

namespace App\Controller\Admin;

use App\Entity\Post;
use App\Form\Type\ApiPostType;
use App\Form\Type\PostType;
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
    public function create(Request $request): Response
    {
        $client = new \Google_Client();
        $client->setApplicationName("Vlooger");
        $client->setClientId(self::API_KEY);
        
        $post = new Post();
        $form = $this->createForm(ApiPostType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            $url =  'https://www.googleapis.com/youtube/v3/videos?id=' . $data->getVideo() . '&key=' . self::API_KEY .'&fields=items(id,snippet(channelId,title,categoryId,description),statistics)&part=snippet,statistics';

            $httpClient = HttpClient::create();
            $response = $httpClient->request(
                'GET',
                $url
            );

            $videoData = [];
            if ($statusCode = $response->getStatusCode() === 200) {
                $content = json_decode($response->getContent(), true);
                if (is_array($content)) {
                    // $content = $response->getContent();

                    $post->setVideo($data->getVideo());
                    $post->setSlug($data->getVideo());
                    $post->setPublishedAt($data->getPublishedAt());
                    $post->setCategory($data->getCategory());

                    if ($data->getNext()) {
                        $nextPost = $data->getNext();
                        $nextPost->setPrevious($post);

                    }
                    if ($data->getPrevious()) {
                        $prevPost = $data->getPrevious();
                        $prevPost->setNext($post);
                    }
                    
                    $videoData[] = $content['items'][0]['snippet'];
                    $summary = mb_substr($videoData[0]['description'], 0, 200);

                    $post->setTitle($videoData[0]['title']);
                    $post->setContent($videoData[0]['description']);
                    $post->setSummary(str_replace(["\r\n", "\r", "\n"], '', $summary));

                    $entityManager = $this->getDoctrine()->getManager();
                    $entityManager->persist($post);
                    $entityManager->flush();
                }

                $this->addFlash('success', '???????????????????????????');

                return $this->redirectToRoute('admin_post_index');
            } else {
                $this->addFlash('warning', '??????????????????????????????');
                return $this->redirectToRoute('admin_post_index');
            }
        }

        return $this->render('admin/post/new.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="admin_post_show", methods={"GET"})
     */
    public function show(Post $post, PostRepository $postRepository): Response
    {
        $next = $postRepository->getnext($post);

        return $this->render('admin/post/show.html.twig', [
            'post' => $post,
            'next' => $next,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="admin_post_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Post $post): Response
    {
        $form = $this->createForm(PostType::class, $post, [
            'post_id' => $post->getId(), 
            // 'post_next' => $this->isNext($post), 
            // 'post_previous' => $this->isPrev($post)
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $data = $form->getData();

            if ($data->getNext()) {
                $nextPost = $data->getNext();
                $nextPost->setPrevious($post);
            }

            if ($data->getPrevious()) {
                $prevPost = $data->getPrevious();
                $prevPost->setNext($post);
            }
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
            if ($post->getNext()) {
                $postNext = $post->getNext();
                $postNext->setPrevious(null);
                $post->setNext(null);
            }
            if ($post->getPrevious()) {
                $postPrev = $post->getPrevious();
                $postPrev->setNext(null);
                $post->setPrevious(null);
            }
            $entityManager->remove($post);
            $entityManager->flush();
        }

        return $this->redirectToRoute('admin_post_index');
    }

    public function isNext(Post $post)
    {
        $nextPost = $post->getNext();
        if ($nextPost) {
            return $nextPost;
        }
        return null;
    }

    public function isPrev(Post $post)
    {
        $prevPost = $post->getPrevious();
        if ($prevPost) {
            return $prevPost;
        }
        return null;
    }
}
