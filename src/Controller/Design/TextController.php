<?php

namespace App\Controller\Design;

use App\Entity\Design\Design;
use App\Entity\Design\Text;
use App\Form\Design\TextType;
use App\Repository\Design\CutRepository;
use App\Repository\Design\DesignRepository;
use App\Service\DesignService;
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
            $text->setWordCount(str_word_count($text->getName(),0));
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


        return $this->redirectToRoute('design_text_index');
    }


}
