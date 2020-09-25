<?php

namespace App\Controller\Design;

use App\Entity\Design\Text;
use App\Form\Design\TextType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

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
     */
    public function new(Request $request): Response
    {
        $text = new Text();
        $form = $this->createForm(TextType::class, $text);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($text);
            $entityManager->flush();

            return $this->redirectToRoute('design_text_index');
        }

        return $this->render('design/text/new.html.twig', [
            'text' => $text,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_text_show", methods={"GET"})
     */
    public function show(Text $text): Response
    {
        return $this->render('design/text/show.html.twig', [
            'text' => $text,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_text_edit", methods={"GET","POST"})
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
     * @Route("/{id}", name="design_text_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Text $text): Response
    {
        if ($this->isCsrfTokenValid('delete'.$text->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($text);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_text_index');
    }
}
