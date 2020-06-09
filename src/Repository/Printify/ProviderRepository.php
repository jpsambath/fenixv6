<?php

namespace App\Repository;

use App\Entity\Printify\Provider;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;
use Doctrine\ORM\NoResultException;

/**
 * @method Provider|null find($id, $lockMode = null, $lockVersion = null)
 * @method Provider|null findOneBy(array $criteria, array $orderBy = null)
 * @method Provider[]    findAll()
 * @method Provider[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProviderRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Provider::class);
    }

    public function findById($id)
    {
        $qb = $this->createQueryBuilder('p')
            ->where('p.id = :id')
            ->setParameter('id', $id);

        $query = $qb->getQuery();
        try {
            return $query->setMaxResults(1)->getOneOrNullResult();
        } catch (NonUniqueResultException $e) {
            echo $e->getMessage();
        }
    }

    public function updateById(Provider $provider)
    {
        $qb = $this->createQueryBuilder('p')
            ->update()
            ->set('p.title', '?1')
            ->set('p.location', '?2')
            ->set('p.blueprints', '?3')
            ->where('p.id = ?4')
            ->setParameter('1', $provider->getTitle())
            ->setParameter('2', $provider->getLocation())
            ->setParameter('3', $provider->getBlueprints())
            ->setParameter('4', $provider->getId());

        $query = $qb->getQuery();
        try {
            return $query->getSingleScalarResult();
        } catch (NoResultException $e) {
        } catch (NonUniqueResultException $e) {
        }

    }



    // /**
    //  * @return Provider[] Returns an array of Provider objects
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
    public function findOneBySomeField($value): ?Provider
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
