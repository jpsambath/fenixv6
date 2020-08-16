<?php

namespace App\Controller;


use App\Entity\Printify\Blueprint;
use App\Entity\Printify\Image;
use App\Entity\Printify\Placeholder;
use App\Entity\Printify\Printarea;
use App\Entity\Printify\Product;
use App\Entity\Printify\Shop;
use App\Entity\Printify\Upload;
use App\Entity\Printify\Variant;
use App\Service\Printify;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Knp\Component\Pager\PaginatorInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\FileType;
use Symfony\Component\Form\Extension\Core\Type\HiddenType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Component\Serializer\Normalizer\ArrayDenormalizer;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 * @Route("/pod/printify", name="printify_")
 */
class PrintifyController extends AbstractController
{


    /**
     * @Route("/shop/shoplist", name="shoplist")
     */
    public function printify_shoplist()
    {
        $em = $this->getDoctrine()->getManager();
        $security = new Security($this->container);

        $printify = new Printify($security, $em);
        $shoplist = $printify->retrieveshoplist();

        return $this->render('printify/shopList.html.twig', [
            'printify_shoplist' => $shoplist
        ]);
    }

    /**
     * @Route("/product/productlist/{shopid}", name="productlist")
     * @ParamConverter("shop", options={"mapping": {"shopid" : "id"}})
     * @param Request $request
     * @param Shop $shop
     * @return Response
     */
    public function printify_productlist(Request $request, Shop $shop)
    {
        $em = $this->getDoctrine()->getManager();
        $security = new Security($this->container);

        $printify = new Printify($security, $em);
        $productList = $printify->retrieveproductlist($shop->getId(), null);

        return $this->render('printify/productList.html.twig', [
            'productlist' => $productList,
            'shop' => $shop
        ]);

    }

    /**
     * @Route("/product/createproduct/{shopid}", name="createproduct")
     * @param Request $request
     * @ParamConverter("shop", options={"mapping": {"shopid" : "id"}})
     * @param Shop $shop
     * @return Response
     */
    public function printify_createproduct(Request $request, Shop $shop)
    {

        $defaultData = ['message' => 'Import your products with Excel'];
        $form = $this->createFormBuilder($defaultData)
            ->add('csvfile', FileType::class)
            ->add('createproduct', SubmitType::class)
            ->getForm();

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $security = new Security($this->container);

            $printify = new Printify($security, $em);

            $filename = $form->get('csvfile')->getData();
            $originalFilename = $filename->getRealPath();

            $importedcsv = [];

            if (($h = fopen("{$originalFilename}", "r")) !== FALSE) {
                while (($data = fgetcsv($h, 100000, ";")) !== FALSE) {
                    $importedcsv[] = $data;
                }
                fclose($h);
            }

            $productlist = $this->arraytoproduct($importedcsv);

            foreach ($productlist as $product) {
                $createdproduct = $printify->createproduct($shop->getId(), $product);
            }

            //$this->addFlash('success', 'Produit créé! Knowledge is power!');


            return $this->render('printify/createProduct.html.twig', [
                'shop' => $shop,
                'form' => $form->createView(),
                'filename' => $filename,
                'productlist' => $productlist,
//                'createproduct' => $createdproduct
            ]);
        }

        return $this->render('printify/createProduct.html.twig', [
            'shop' => $shop,
            'form' => $form->createView()
        ]);

    }

    /**
     * @Route("/product/uploadimage/{shopid}", name="uploadimage")
     * @param Shop $shop
     * @return Response
     * @throws ExceptionInterface
     */
    public function printify_uploadimage(Shop $shop)
    {
        $encoders = [new XmlEncoder(), new JsonEncoder()];
        $normalizers = [new ObjectNormalizer(), new ArrayDenormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        $em = $this->getDoctrine()->getManager();
        $upload = new Upload();
        $uploadList = array();
        $defaultData = ['message' => 'Import your products json file'];
        $form = $this->createFormBuilder($defaultData)
            ->add('file', FileType::class, ['multiple' => true])
            ->add('api', HiddenType::class, ['data' => $this->getUser()->getPrintifyApikey()])
            ->getForm();


        return $this->render('printify/uploadImage.html.twig', [
            'uploadlist' => $uploadList,
            'shop' => $shop,
            'form' => $form->createView()
        ]);
    }

    /**
     * @Route("/blueprintsselector/{shopid}", name="blueprintsselector")
     * @ParamConverter("selectedShop", options={"mapping": {"shopid" : "id"}})
     * @param Request $request
     * @param PaginatorInterface $paginator
     * @return Response
     */
    public function printify_blueprintsselector(Shop $selectedShop, Request $request, PaginatorInterface $paginator)
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY') AND $this->get('security.authorization_checker')->isGranted('ROLE_PRINTIFY')) {
            $user = $this->getUser();

            $shoplist = $this->getDoctrine()->getRepository(Shop::class)->findBy(['user' => $user]);

            $blueprintsquery = $this->getDoctrine()->getRepository(Blueprint::class)->createQueryBuilder('a');

            $blueprintslist = $paginator->paginate(
                $blueprintsquery,
                $request->query->getInt('page', 1),
                10
            );
        }

        return $this->render('printify/blueprintsSelector.html.twig', [
            'printify_shoplist' => $shoplist,
            'selectedShop' => $selectedShop,
            'blueprintslist' => $blueprintslist
        ]);
    }

    /**
     * @Route("/templateexporter/{shopid}", name="templateexporter")
     * @ParamConverter("selectedShop", options={"mapping": {"shopid" : "id"}})
     * @param Shop $selectedShop
     * @param Request $request
     * @return Response
     * @throws ExceptionInterface
     */
    public function printify_templateexporter(Shop $selectedShop, Request $request)
    {
        if ($this->get('security.authorization_checker')->isGranted('IS_AUTHENTICATED_FULLY') AND $this->get('security.authorization_checker')->isGranted('ROLE_PRINTIFY')) {
            $user = $this->getUser();

            $shoplist = $this->getDoctrine()->getRepository(Shop::class)->findBy(['user' => $user]);

            $serializer = SerializerBuilder::create()->build();
            $selectedShopArray = $serializer->serialize($selectedShop, 'json', SerializationContext::create()->setGroups(["blueprintexporter"]));

        }

        return $this->render('printify/templateExporter.html.twig', [
            'printify_shoplist' => $shoplist,
            'selectedShop' => $selectedShop,
            'selectedShopArray' => $selectedShopArray
        ]);
    }


    public function arraytoproduct($importedcsv)
    {
        $em = $this->getDoctrine()->getManager();
        $security = new Security($this->container);

        $printify = new Printify($security, $em);

        $currentproductid = '';
        $currentvariantid = '';
        $currentprintareaid = '';
        $currentimageurl = '';

        $productlist = array();

        $product = new Product();
        $variant = new Variant();
        $printarea = new Printarea();
        $createdupload = new Upload();
        $image = new Image();
        $placeholder = new Placeholder();

        for ($i = 1; $i < count($importedcsv); ++$i) {

            if ($currentproductid != $importedcsv[$i][0]) {
                if ($currentproductid != '') {
                    $product->addPrintarea($printarea);
                    $currentprintareaid = '';
                    $productlist[] = $product;
                }
                $currentproductid = $importedcsv[$i][0];
                $product = new Product();
                $product->setTitle($importedcsv[$i][5]);
                $product->setDescription($importedcsv[$i][6]);
                $product->setBlueprintId($importedcsv[$i][1]);
                $product->setPrintProviderId($importedcsv[$i][2]);

                $tags = explode(',', $importedcsv[$i][15]);
                foreach ($tags as $tag) {
                    $product->addTag($tag);
                }
            }

            if ($currentprintareaid != $importedcsv[$i][9]) {
                if ($currentprintareaid != '') {
                    $product->addPrintarea($printarea);
                }
                $currentprintareaid = $importedcsv[$i][9];
                $printarea = new Printarea();
                $printarea->setId($importedcsv[$i][9]);
            }

            if ($importedcsv[$i][14] != '' && $currentimageurl != $importedcsv[$i][14]) {

                $placeholder = new Placeholder();
                $placeholder->setId($importedcsv[$i][10]);
                $placeholder->setPosition($importedcsv[$i][13]);
                $currentimageurl = $importedcsv[$i][14];
                //var_dump(basename($importedcsv[$i][14]));
                //var_dump($importedcsv[$i][14]);
                $createdupload = new Upload();
                $createdupload = $printify->uploadimage(basename($importedcsv[$i][14]), $importedcsv[$i][14]);
                $image = new Image();
                $image->setId($createdupload->getId())
                    ->setName($createdupload->getFileName())
                    ->setWidth($createdupload->getWidth())
                    ->setHeight($createdupload->getHeight())
                    ->setType($createdupload->getMimeType())
                    ->setX(0.5)
                    ->setY(0.5)
                    ->setScale(1)
                    ->setAngle(0);

                $placeholder->addImage($image);
                $printarea->addPlaceholder($placeholder);
            }

            if ($currentvariantid != $importedcsv[$i][3]) {
                $currentvariantid = $importedcsv[$i][3];
                $variant = new Variant();
                $variant->setId($importedcsv[$i][3]);
                $variant->setPrice($importedcsv[$i][7]);
                $variant->setIsEnabled($importedcsv[$i][8]);

                $product->addVariant($variant);
                $printarea->addVariantId($importedcsv[$i][3]);
            }
        }

        $product->addPrintarea($printarea);
        $productlist[] = $product;

        return $productlist;

    }
}
