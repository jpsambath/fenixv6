<?php

namespace App\Controller;

use App\Entity\Printify\Blueprint;
use App\Entity\Printify\Provider;
use App\Service\Printful;
use App\Service\Printify;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;


/**
 * @Route("/admin/printify", name="admin_")
 */
class AdminController extends AbstractController
{
    /**
     * @Route("/synchronizeprintify", name="synchronizeprintify")
     */
    public function synchronizeprintify()
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY') AND $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $em = $this->getDoctrine()->getManager();
            $security = new Security($this->container);

            $printify = new Printify($security, $em);

            // RETRIEVE ALL SHOP FOR THIS USER
            $shoplist = $printify->retrieveshoplist();

//            // RETRIEVE ALL PROVIDERS FROM PRINTIFY
//            $providerlist = $printify->retrieveproviderlist();
//
//            // RETRIEVE ALL BLUEPRINTS FROM PRINTIFY
//            $blueprintlist = $printify->retrieveblueprintlist();
//
//            // RETRIEVE LINK BETWEEN BLUEPRINTS AND PROVIDERS FROM BLUEPRINT SIDE (PROVIDERS' SIDE IS NOT RELIABLE)
//            $blueprintlist = $this->getDoctrine()->getRepository(Blueprint::class)->findAll();
//            $fullblueprintlist = array();
//            foreach ($blueprintlist as $blueprint) {
//                $fullblueprintlist[] = $printify->retrieveblueprintprovider($blueprint->getId());
//            }
//
//            // RETRIEVE ALL SHIPPINGS INFO BASED ON PROVIDERS AND BLUEPRINTS
//            $fullproviderlist = $this->getDoctrine()->getRepository(Provider::class)->findAll();
//            foreach ($fullproviderlist as $fullprovider) {
//                foreach ($fullprovider->getBlueprints() as $fullproviderblueprint) {
//                    $shippinglist[] = $printify->retrieveshipping($fullproviderblueprint->getId(), $fullprovider->getId());
//                }
//            }

//
//             RETRIEVE ALL VARIANTS BASED ON PROVIDERS AND BLUEPRINTS
            $fullproviderlist = $this->getDoctrine()->getRepository(Provider::class)->findAll();
            $variantslist = array();
            foreach($fullproviderlist as $fullprovider){
                foreach($fullprovider->getBlueprints() as $fullproviderblueprint){
                    $variantslist[] = $printify->retrievevariants($fullproviderblueprint->getId(), $fullprovider->getId());
                }
            }

//            $variantslist[] = $printify->retrievevariants(14, 25);
//            $variantslist[] = $printify->retrievevariants(14, 16);

            return $this->render('admin/synchronizeprintify.html.twig', [
                'printify_shoplist' => $shoplist,
//                'printify_blueprintlist' => $blueprintlist,
//                'printify_providerlist' => $providerlist,
//                'printify_fullblueprintlist' => $fullblueprintlist,
//               'printify_shippinglist' => $shippinglist,
                'printify_variantlist' => $variantslist,
            ]);
        }

        return $this->render('admin/synchronizeprintify.html.twig');
    }

    /**
     * @Route("/synchronizeprintful", name="synchronizeprintful")
     */
    public function synchronizeprintful()
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY') AND $this->get('security.authorization_checker')->isGranted('ROLE_ADMIN')) {
            $em = $this->getDoctrine()->getManager();
            $security = new Security($this->container);

            $printful = new Printful($security, $em);

            // RETRIEVE ALL SHOP FOR THIS USER
            $productlist = $printful->retrieveproductlist();

//            // RETRIEVE ALL PROVIDERS FROM PRINTIFY
//            $providerlist = $printify->retrieveproviderlist();
//
//            // RETRIEVE ALL BLUEPRINTS FROM PRINTIFY
//            $blueprintlist = $printify->retrieveblueprintlist();
//
//            // RETRIEVE LINK BETWEEN BLUEPRINTS AND PROVIDERS FROM BLUEPRINT SIDE (PROVIDERS' SIDE IS NOT RELIABLE)
//            $blueprintlist = $this->getDoctrine()->getRepository(Blueprint::class)->findAll();
//            $fullblueprintlist = array();
//            foreach ($blueprintlist as $blueprint) {
//                $fullblueprintlist[] = $printify->retrieveblueprintprovider($blueprint->getId());
//            }
//
//            // RETRIEVE ALL SHIPPINGS INFO BASED ON PROVIDERS AND BLUEPRINTS
//            $fullproviderlist = $this->getDoctrine()->getRepository(Provider::class)->findAll();
//            foreach ($fullproviderlist as $fullprovider) {
//                foreach ($fullprovider->getBlueprints() as $fullproviderblueprint) {
//                    $shippinglist[] = $printify->retrieveshipping($fullproviderblueprint->getId(), $fullprovider->getId());
//                }
//            }

//
//             RETRIEVE ALL VARIANTS BASED ON PROVIDERS AND BLUEPRINTS
//            $fullproviderlist = $this->getDoctrine()->getRepository(Provider::class)->findAll();
//            $variantslist = array();
//            foreach($fullproviderlist as $fullprovider){
//                foreach($fullprovider->getBlueprints() as $fullproviderblueprint){
//                    $variantslist[] = $printify->retrievevariants($fullproviderblueprint->getId(), $fullprovider->getId());
//                }
//            }

//            $variantslist[] = $printify->retrievevariants(14, 25);
//            $variantslist[] = $printify->retrievevariants(14, 16);

            return $this->render('admin/synchronizeprintful.html.twig', [
                'printful_productlist' => $productlist,
//                'printify_blueprintlist' => $blueprintlist,
//                'printify_providerlist' => $providerlist,
//                'printify_fullblueprintlist' => $fullblueprintlist,
//               'printify_shippinglist' => $shippinglist,
//                'printify_variantlist' => $variantslist,
            ]);
        }

        return $this->render('admin/synchronizeprintify.html.twig');
    }

}
