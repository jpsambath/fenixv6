<?php

namespace App\Repository\Design;

use App\Entity\Design\LineStyle;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method LineStyle|null find($id, $lockMode = null, $lockVersion = null)
 * @method LineStyle|null findOneBy(array $criteria, array $orderBy = null)
 * @method LineStyle[]    findAll()
 * @method LineStyle[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LineStyleRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, LineStyle::class);
    }

    // /**
    //  * @return LineStyle[] Returns an array of LineStyle objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('l.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?LineStyle
    {
        return $this->createQueryBuilder('l')
            ->andWhere('l.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
