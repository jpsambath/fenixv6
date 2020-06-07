<?php

namespace App\Repository;

use App\Entity\Printify\Printarea;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Printarea|null find($id, $lockMode = null, $lockVersion = null)
 * @method Printarea|null findOneBy(array $criteria, array $orderBy = null)
 * @method Printarea[]    findAll()
 * @method Printarea[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PrintareaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Printarea::class);
    }

    // /**
    //  * @return Printarea[] Returns an array of Printarea objects
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

    public function findOneByVariantIdsProduct($variants, $product): ?Printarea
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.variant_ids IN(:variantids)')
            ->andWhere('p.product = :product')
            ->setParameter('variantids', $variants)
            ->setParameter('product', $product)
            ->getQuery()
            ->getOneOrNullResult()
            ;
    }

    /*
    public function findOneBySomeField($value): ?Printarea
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
