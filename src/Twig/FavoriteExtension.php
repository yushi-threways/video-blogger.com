<?php

namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use App\Entity\Post;
use App\Entity\Favorite;
use App\Repository\FavoriteRepository;
use Doctrine\ORM\EntityManagerInterface;
use FOS\UserBundle\Model\UserManagerInterface;

class FavoriteExtension extends AbstractExtension
{

    private $em;

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

    /**
    ** @return FavoriteRepository
    **/
    public function getFavoriteRepository()
    {
        return $this->em->getRepository(Favorite::class);
    }
    
    public function isFavorite(Post $post)
    {

        $favorites = $post->getFavorites();

        if($favorites->contains($favorites->first())) {
            return $favorites;
        }

        return false;
    }

}