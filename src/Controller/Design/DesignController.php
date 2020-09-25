<?php

namespace App\Controller\Design;

use App\Entity\Design\Design;
use App\Form\Design\DesignType;
use App\Repository\Design\DesignRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/design/design")
 */
class DesignController extends AbstractController
{
    /**
     * @Route("/", name="design_design_index", methods={"GET"})
     */
    public function index(DesignRepository $designRepository): Response
    {
        return $this->render('design/design/index.html.twig', [
            'designs' => $designRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_design_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $design = new Design();
        $form = $this->createForm(DesignType::class, $design);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($design);
            $entityManager->flush();

            return $this->redirectToRoute('design_design_index');
        }

        return $this->render('design/design/new.html.twig', [
            'design' => $design,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_design_show", methods={"GET"})
     */
    public function show(Design $design): Response
    {
        return $this->render('design/design/show.html.twig', [
            'design' => $design,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_design_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Design $design): Response
    {
        $form = $this->createForm(DesignType::class, $design);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_design_index');
        }

        return $this->render('design/design/edit.html.twig', [
            'design' => $design,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_design_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Design $design): Response
    {
        if ($this->isCsrfTokenValid('delete'.$design->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($design);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_design_index');
    }
}
