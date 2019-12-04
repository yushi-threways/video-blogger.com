<?php

namespace App\Repository;

use App\Entity\Post;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

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
            ->orderBy('p.createdAt', 'DESC')
        ;
        
        return $qb->getQuery()->getResult();
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
}
