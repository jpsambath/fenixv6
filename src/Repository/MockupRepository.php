<?php

namespace App\Repository;

use App\Entity\Printify\Mockup;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Mockup|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mockup|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mockup[]    findAll()
 * @method Mockup[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MockupRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Mockup::class);
    }

    public function findOneBySrcProduct($src, $product): ?Mockup
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.src = :src')
            ->andWhere('m.product = :product')
            ->setParameter('src', $src)
            ->setParameter('product', $product)
            ->getQuery()
            ->getOneOrNullResult();
    }

    // /**
    //  * @return Mockup[] Returns an array of Mockup objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('m.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Mockup
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
