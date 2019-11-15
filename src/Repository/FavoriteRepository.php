<?php

namespace App\Repository;

use App\Entity\Favorite;
use App\Entity\User;
use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Favorite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Favorite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Favorite[]    findAll()
 * @method Favorite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class FavoriteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Favorite::class);
    }

    public function findByUser(User $user)
    {
        return $this->findBy(['user' => $user]);
    }

    public function findOneByPost(Post $post): ?Favorite
    {
        return $this->findOneBy(['post' => $post]);
    }

    public function findOneOrCreateByUser(User $user, Post $post, bool $flush = true): Favorite
    {

        $favorites = $user->getFavorites();
        if (!$favorites->contains($user)) {
            $favorite = new Favorite();
            $favorite->setUser($user);
            $favorite->setPost($post);

            $this->_em->persist($favorite);
            if ($flush) {
                $this->_em->flush($favorite);
            }
            return $favorite;
        }

        return $favorite;
    }

    // /**
    //  * @return Favorite[] Returns an array of Favorite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('f.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Favorite
    {
        return $this->createQueryBuilder('f')
            ->andWhere('f.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
