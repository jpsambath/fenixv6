<?php

namespace App\Repository\Printify;

use App\Entity\Printify\Blueprint;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

/**
 * @method Blueprint|null find($id, $lockMode = null, $lockVersion = null)
 * @method Blueprint|null findOneBy(array $criteria, array $orderBy = null)
 * @method Blueprint[]    findAll()
 * @method Blueprint[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class BlueprintRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Blueprint::class);
    }

    public function findById($id)
    {
        $qb = $this->createQueryBuilder('b')
            ->where('b.id = :id')
            ->setParameter('id', $id);

        $query = $qb->getQuery();
        try {
            return $query->setMaxResults(1)->getOneOrNullResult();
        } catch (NonUniqueResultException $e) {
            echo $e->getMessage();
        }
    }

    public function updateById($blueprint)
    {
        $qb = $this->createQueryBuilder('b')
            ->update()
            ->set('b', ':blueprint')
            ->where('b.id = :id')
            ->setParameter('blueprint', $blueprint)
            ->setParameter('id', $blueprint);

        $query = $qb->getQuery();
        try {
            return $query->getSingleScalarResult();
        } catch (NoResultException $e) {
        } catch (NonUniqueResultException $e) {
        }

    }


    // /**
    //  * @return Blueprint[] Returns an array of Blueprint objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('b.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Blueprint
    {
        return $this->createQueryBuilder('b')
            ->andWhere('b.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
