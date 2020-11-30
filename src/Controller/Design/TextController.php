<?php

namespace App\Controller\Design;

use App\Entity\Design\Cut;
use App\Entity\Design\Text;
use App\Form\Design\TextType;
use App\Repository\Design\ImageRepository;
use App\Repository\Design\TagRepository;
use App\Repository\Design\TextRepository;
use App\Service\DesignService;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Security;

/**
 * @Route("/design/text")
 */
class TextController extends AbstractController
{

    /**
     * @Route("/smartcuttext", name="design_text_smartcuttext")
     * @param TextRepository $textRepository
     * @param ImageRepository $imageRepository
     * @param TagRepository $tagRepository
     * @param Request $request
     * @return Response
     */
    public function smartcuttext(TextRepository $textRepository, ImageRepository $imageRepository, TagRepository $tagRepository, Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $serializer = SerializerBuilder::create()->build();
        $textlist = $textRepository->fullFindAll();

        $testtext = $textRepository->find(1135);
        $textresultlist = array();

        $response = array();
        $nblink = 0;

        foreach ($textlist as $text) {
            //Gestion 1 ligne
            if ($text->getLength() <= 15 or $text->getWordCount()==1) {
                $oneCut = new Cut();
                $oneCut->setParts([$text->getName()]);
                $oneCut->setLinecount(1);
                $text->addCut($oneCut);

                $entityManager->flush();
                $textresultlist[] = $text;
            }

            //Gestion 2 lignes
            if ($text->getWordCount()==2) {
                $parts = explode(" ", $text->getName());
                $oneCut = new Cut();
                $oneCut->setParts([$parts[0], $parts[1]]);
                $oneCut->setLinecount(2);
                $text->addCut($oneCut);

                $entityManager->flush();
                $textresultlist[] = $text;
            }
        }

        $result = $serializer->serialize(['status' => 'ok', 'data' => $textresultlist], "json", SerializationContext::create()->setGroups(["design_export"]));
        return new Response($result);
    }


    /**
     * @Route("/", name="design_text_index", methods={"GET"})
     */
    public function index(): Response
    {
        $texts = $this->getDoctrine()
            ->getRepository(Text::class)
            ->findAll();

        return $this->render('design/text/index.html.twig', [
            'texts' => $texts,
        ]);
    }

    /**
     * @Route("/new", name="design_text_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $em = $this->getDoctrine()->getManager();
        $security = new Security($this->container);

        $designService = new DesignService($security, $em);

        $text = new Text();
        $form = $this->createForm(TextType::class, $text);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $text->setLength(strlen($text->getName()));
            $text->setWordCount(str_word_count($text->getName(), 0));
            $designService->saveText($text);
//            $entityManager = $this->getDoctrine()->getManager();
//            $entityManager->persist($text);
//            $entityManager->flush();

            return $this->redirectToRoute('design_design_index');
        }

        return $this->render('design/text/new.html.twig', [
            'text' => $text,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_text_show", methods={"GET"})
     * @param Text $text
     * @return Response
     */
    public function show(Text $text): Response
    {
        return $this->render('design/text/show.html.twig', [
            'text' => $text,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_text_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Text $text
     * @return Response
     */
    public function edit(Request $request, Text $text): Response
    {
        $form = $this->createForm(TextType::class, $text);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_text_index');
        }

        return $this->render('design/text/edit.html.twig', [
            'text' => $text,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="design_text_delete")
     * @param Request $request
     * @param Text $text
     * @return Response
     */
    public function delete(Request $request, Text $text): Response
    {

        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($text);
        $entityManager->flush();


        return $this->redirectToRoute('design_design_index');
    }


}
