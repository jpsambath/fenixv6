<?php

namespace App\Repository\Printify;

use App\Entity\Printify\Placeholder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Placeholder|null find($id, $lockMode = null, $lockVersion = null)
 * @method Placeholder|null findOneBy(array $criteria, array $orderBy = null)
 * @method Placeholder[]    findAll()
 * @method Placeholder[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PlaceholderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Placeholder::class);
    }

    // /**
    //  * @return Placeholder[] Returns an array of Placeholder objects
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


    public function findOneByPositionHeightWeight($position, $height, $width): ?Placeholder
    {
        return $this->createQueryBuilder('p')
            ->andWhere('p.position = :position')
            ->andWhere('p.height = :height')
            ->andWhere('p.width = :width')
            ->setParameter('position', $position)
            ->setParameter('height', $height)
            ->setParameter('width', $width)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }

}
