<?php

namespace App\Repository\Design;

use App\Entity\Design\Cut;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Cut|null find($id, $lockMode = null, $lockVersion = null)
 * @method Cut|null findOneBy(array $criteria, array $orderBy = null)
 * @method Cut[]    findAll()
 * @method Cut[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CutRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Cut::class);
    }

    // /**
    //  * @return Cut[] Returns an array of Cut objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('c.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Cut
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
