<?php
namespace App\Repository;
use App\Entity\Comment;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
/**
 * @method Admin|null find($id, $lockMode = null, $lockVersion = null)
 * @method Admin|null findOneBy(array $criteria, array $orderBy = null)
 * @method Admin[]    findAll()
 * @method Admin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommentRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Comment::class);
    }
}