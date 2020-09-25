<?php

namespace App\Repository\Design;

use App\Entity\Design\TemplateCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method TemplateCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method TemplateCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method TemplateCategory[]    findAll()
 * @method TemplateCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TemplateCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, TemplateCategory::class);
    }

    // /**
    //  * @return TemplateCategory[] Returns an array of TemplateCategory objects
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
    public function findOneBySomeField($value): ?TemplateCategory
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
