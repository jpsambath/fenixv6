<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/pod/printful", name="printful_")
 */
class PrintfulController extends AbstractController
{
    /**
     * @Route("/printful", name="printful")
     */
    public function index()
    {
        return $this->render('printful/index.html.twig', [
            'controller_name' => 'PrintfulController',
        ]);
    }
}
