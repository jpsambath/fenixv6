<?php

namespace App\Controller;


use App\Entity\Printify\Shop;
use App\Service\Printify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function homepage()
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY') AND $this->get('security.authorization_checker')->isGranted('ROLE_PRINTIFY')) {
            $em = $this->getDoctrine()->getManager();
            $user = $this->getUser();

            $printifyshoplist = $this->getDoctrine()->getRepository(Shop::class)->findBy(['user' => $user]);
            $printfulshoplist = $this->getDoctrine()->getRepository(\App\Entity\Printful\Shop::class)->findBy(['user' => $user]);


//            $providerlist = $printify->retrieveproviderlist();
//
//            $blueprintlist = $printify->retrieveblueprintlist();
//
//            $fullproviderlist = array();
//            foreach($providerlist as $provider){
//                $fullproviderlist[] = $printify->retrieveprovider($provider['id']);
//            }

            return $this->render('home/index.html.twig', [
                'printify_shoplist' => $printifyshoplist,
                'printful_shoplist' => $printfulshoplist,
//                'printify_blueprintlist' => $blueprintlist,
//                'printify_providerlist' => $providerlist,
//                'printify_fullproviderlist' => $fullproviderlist


            ]);
        }

        return $this->render('home/index.html.twig');
    }
}
