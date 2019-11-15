<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use App\Entity\Post;
use App\Entity\Favorite;
use App\Repository\FavoriteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Doctrine\ORM\EntityManagerInterface;

class FavoriteExtension extends AbstractExtension
{

    private $em;

    private $favorites;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('is_favorite', [$this, 'isFavorite']),
        ];
    }

    public function getFavoriteRepository()
    {
        return $this->em->getRepository(Favorite::class);
    }
    
    public function isFavorite(Post $post): bool
    {
        $favoriteRepository = $this->getFavoriteRepository();

        $this->favorites = $favoriteRepository->findByOnePost($post);
        return $post->hasFavorite($post);
    }

}