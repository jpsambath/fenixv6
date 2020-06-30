<?php

namespace App\Repository\Printify;

use App\Entity\Printify\Variant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Variant|null find($id, $lockMode = null, $lockVersion = null)
 * @method Variant|null findOneBy(array $criteria, array $orderBy = null)
 * @method Variant[]    findAll()
 * @method Variant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VariantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Variant::class);
    }

    // /**
    //  * @return Variant[] Returns an array of Variant objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Variant
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */

    public function findOneByIdBlueprintProvider($id, $blueprint, $provider): ?Variant
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.id = :id')
            ->andWhere('v.blueprint = :blueprint')
            ->andWhere('v.provider = :provider')
            ->setParameter('id', $id)
            ->setParameter('blueprint', $blueprint)
            ->setParameter('provider', $provider)
            ->getQuery()
            ->getOneOrNullResult();
    }

}
