<?php

namespace App\Repository;

use App\Entity\Post;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use DoctrineExtensions\Query\Mysql;

/**
 * @method UserDetail|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserDetail|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserDetail[]    findAll()
 * @method UserDetail[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PostRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Post::class);
    }

    public function getNewPosts($limit = null)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->where('p.publishedAt <= :today')
           ->setParameters([
                "today" => new \DateTime(),
            ])
            ->setMaxResults($limit)
            ->orderBy('p.createdAt', 'DESC')
        ;
        
        return $qb->getQuery()->getResult();
    }

    public function getRandPosts($limit = null)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->where('p.publishedAt <= :today')
           ->setParameters([
                "today" => new \DateTime(),
            ])
            ->setMaxResults($limit)
            ->orderBy('RAND()');
        
        return $qb->getQuery()->getResult();
    }

    public function getVisualPost($limit = null)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->where('p.publishedAt <= :today')
           ->setParameters([
                "today" => new \DateTime(),
            ])
            ->setMaxResults($limit)
            ->orderBy('RAND()');
        
        return $qb->getQuery()->getSingleResult();
    }
    
    public function getCategoryPosts($title, $id = null, $limit = null)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->join("p.category", "c")
            ->where('c.title = :title')
            ->andWhere("p.publishedAt <= :today")
            ->setParameters([
                "title" => $title,
                "today" => new \DateTime(),
            ])
            ->setMaxResults($limit)
            ->orderBy('p.createdAt', 'DESC')
        ;

        if (null !== $id) {
            $qb->andWhere("p.id != :id")
                    ->setParameter('id', $id);
        }
        
        return $qb->getQuery()->getResult();
    }

    public function getnext(Post $post)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->leftJoin("p.next", "pn")
        ->where('p.next is null')
        ->andWhere("p.id != :id")
        ->setParameters([
            'id' => $post,
        ])
        ->orderBy('p.createdAt', 'DESC')
        ;
        
        return $qb->getQuery()->getResult();
    }

    public function findUserFavoritedPost(User $user, $limit = null)
    {
        $qb = $this->createQueryBuilder("p");
        $qb->leftJoin("p.favorites", "pf")
        ->join("pf.user", "pfu")
        ->where(
            $qb->expr()->in(':user', 'pfu.id')
        )
        ->setParameter('user', $user->getId())
        ->setMaxResults($limit)
        ->orderBy('p.createdAt', 'DESC')
        ;
        
        return $qb->getQuery()->getResult();
    }
}
