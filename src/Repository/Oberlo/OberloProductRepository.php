<?php

namespace App\Repository\Oberlo;

use App\Entity\Oberlo\OberloProduct;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method OberloProduct|null find($id, $lockMode = null, $lockVersion = null)
 * @method OberloProduct|null findOneBy(array $criteria, array $orderBy = null)
 * @method OberloProduct[]    findAll()
 * @method OberloProduct[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OberloProductRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OberloProduct::class);
    }

    // /**
    //  * @return OberloProduct[] Returns an array of OberloProduct objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('o.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?OberloProduct
    {
        return $this->createQueryBuilder('o')
            ->andWhere('o.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
