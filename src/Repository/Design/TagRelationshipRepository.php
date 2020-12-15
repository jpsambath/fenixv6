<?php

namespace App\Repository\Design;

use App\Entity\Design\TagRelationship;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TagRelationship|null find($id, $lockMode = null, $lockVersion = null)
 * @method TagRelationship|null findOneBy(array $criteria, array $orderBy = null)
 * @method TagRelationship[]    findAll()
 * @method TagRelationship[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TagRelationshipRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TagRelationship::class);
    }

    // /**
    //  * @return TagRelationship[] Returns an array of TagRelationship objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?TagRelationship
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
