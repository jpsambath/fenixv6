<?php

namespace App\Repository\Design;

use App\Entity\Design\Text;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Text|null find($id, $lockMode = null, $lockVersion = null)
 * @method Text|null findOneBy(array $criteria, array $orderBy = null)
 * @method Text[]    findAll()
 * @method Text[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TextRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Text::class);
    }

    /**
     * @return Text[]|null
     */
    public function fullFindAll(): ?array
    {
        return $this->createQueryBuilder('t')->addSelect(['templates', 'models', 'secondarytags', 'primarytags', 'cuts', 'lineStyles', 'supports', 'shops'])
            ->leftJoin('t.templates', 'templates')
            ->leftJoin('t.models', 'models')
            ->leftJoin('t.secondarytags', 'secondarytags')
            ->leftJoin('t.primarytags', 'primarytags')
            ->leftJoin('t.cuts', 'cuts')
            ->leftJoin('t.supports', 'supports')
            ->leftJoin('t.shops', 'shops')
            ->leftJoin('templates.lineStyles', 'lineStyles')
            ->getQuery()
            ->getResult();
    }


    // /**
    //  * @return Design[] Returns an array of Design objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('d.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Design
    {
        return $this->createQueryBuilder('d')
            ->andWhere('d.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
