<?php
namespace App\Repository;

use App\Entity\Category;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepositoryInterface;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use LogicException;


/**
 * @method Admin|null find($id, $lockMode = null, $lockVersion = null)
 * @method Admin|null findOneBy(array $criteria, array $orderBy = null)
 * @method Admin[]    findAll()
 * @method Admin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryRepository extends NestedTreeRepository implements ServiceEntityRepositoryInterface
{
    /**
     * @param string $entityClass The class name of the entity this repository manages
     */
    public function __construct(RegistryInterface $registry)
    {
        $entityClass = Category::class;
        $manager = $registry->getManagerForClass($entityClass);
        if ($manager === null) {
            throw new LogicException(sprintf(
                'Could not find the entity manager for class "%s". Check your Doctrine configuration to make sure it is configured to load this entity’s metadata.',
                $entityClass
            ));
        }
        parent::__construct($manager, $manager->getClassMetadata($entityClass));
    }

    public function getCategoriesPosts($limit = null)
    {
        $qb = $this->createQueryBuilder("c");
        $qb->setMaxResults($limit)
        ;
        
        return $qb->getQuery()->getResult();
    }
}
