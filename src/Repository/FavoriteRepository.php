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

    public function findOneByUser(User $user)
    {
        return $this->findOneBy(['user' => $user]);
    }

    public function findOneByPost(Post $post): ?Favorite
    {
        return $this->findOneBy(['post' => $post]);
    }


    public function findOneOrCreateByUser(User $user, Post $post, bool $flush = true): ?Favorite
    {
        $query = $this->createQueryBuilder('f');
        $query->where('f.post = :post')
            ->andWhere('f.user = :user')
            ->setParameters([
                'user' => $user,
                'post' => $post,
            ])
        ;


        $favorite = $query->getQuery()->getOneOrNullResult();
        if(!$favorite) {

            $favorite = new Favorite();
            $favorite->setUser($user);
            $favorite->setPost($post);
            $this->_em->persist($favorite);
            if ($flush) {
                $this->_em->flush($favorite);
            }
            return $favorite;
        } else {
            return $favorite;
        }    
    }

    
    public function findOneOrCreateByUser(User $user, Post $post, bool $flush = true)
    {
        $qb = $this->createQueryBuilder('f');
        $qb->where('f.user = :user')
            ->andWhere('f.post = :post')
            ->setParameters([
                'user' => $user,
                'post' => $post,
            ])
        ;

        if (!$qb) {
            $favorite = new Favorite();
            $favorite->setUser($user);
            $favorite->setPost($post);
            $this->_em->persist($favorite);
                if ($flush) {
                    $this->_em->flush($favorite);
                }
            return $favorite;
        } else {
            return $qb;
        }
        
    }

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
