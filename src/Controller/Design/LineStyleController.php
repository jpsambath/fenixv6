<?php

namespace App\Controller\Design;

use App\Entity\Design\LineStyle;
use App\Form\Design\LineStyleType;
use App\Repository\Design\LineStyleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/design/line/style")
 */
class LineStyleController extends AbstractController
{
    /**
     * @Route("/", name="design_line_style_index", methods={"GET"})
     */
    public function index(LineStyleRepository $lineStyleRepository): Response
    {
        return $this->render('design/line_style/index.html.twig', [
            'line_styles' => $lineStyleRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_line_style_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $lineStyle = new LineStyle();
        $form = $this->createForm(LineStyleType::class, $lineStyle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($lineStyle);
            $entityManager->flush();

            return $this->redirectToRoute('design_line_style_index');
        }

        return $this->render('design/line_style/new.html.twig', [
            'line_style' => $lineStyle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_line_style_show", methods={"GET"})
     */
    public function show(LineStyle $lineStyle): Response
    {
        return $this->render('design/line_style/show.html.twig', [
            'line_style' => $lineStyle,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_line_style_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, LineStyle $lineStyle): Response
    {
        $form = $this->createForm(LineStyleType::class, $lineStyle);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_line_style_index');
        }

        return $this->render('design/line_style/edit.html.twig', [
            'line_style' => $lineStyle,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_line_style_delete", methods={"DELETE"})
     */
    public function delete(Request $request, LineStyle $lineStyle): Response
    {
        if ($this->isCsrfTokenValid('delete'.$lineStyle->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($lineStyle);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_line_style_index');
    }
}
