<?php

namespace App\Repository\Printify;

use App\Entity\Printify\Publishing;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Publishing|null find($id, $lockMode = null, $lockVersion = null)
 * @method Publishing|null findOneBy(array $criteria, array $orderBy = null)
 * @method Publishing[]    findAll()
 * @method Publishing[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PublishingRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Publishing::class);
    }

    // /**
    //  * @return Publishing[] Returns an array of Publishing objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('p.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Publishing
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
