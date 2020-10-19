<?php

namespace App\Controller\Design;

use App\Entity\Design\Font;
use App\Form\Design\FontType;
use App\Repository\Design\FontRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

/**
 * @Route("/design/font")
 */
class FontController extends AbstractController
{
    /**
     * @Route("/fontlist", name="design_font_list", methods={"GET"})
     * @param FontRepository $fontRepository
     * @return JsonResponse
     */
    public function fontlist(FontRepository $fontRepository): JsonResponse
    {
//        var_dump( $this->json($tagRepository->findAll()));
//        return $this->json($tagRepository->findAll());

        return $this->json($fontRepository->findAll(), 200,[],[AbstractNormalizer::ATTRIBUTES => ['postscriptName', 'name']]);

    }


    /**
     * @Route("/", name="design_font_index", methods={"GET"})
     */
    public function index(FontRepository $fontRepository): Response
    {
        return $this->render('design/font/index.html.twig', [
            'fonts' => $fontRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_font_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $font = new Font();
        $form = $this->createForm(FontType::class, $font);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($font);
            $entityManager->flush();

            return $this->redirectToRoute('design_font_index');
        }

        return $this->render('design/font/new.html.twig', [
            'font' => $font,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_font_show", methods={"GET"})
     */
    public function show(Font $font): Response
    {
        return $this->render('design/font/show.html.twig', [
            'font' => $font,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_font_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Font $font): Response
    {
        $form = $this->createForm(FontType::class, $font);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_font_index');
        }

        return $this->render('design/font/edit.html.twig', [
            'font' => $font,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_font_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Font $font): Response
    {
        if ($this->isCsrfTokenValid('delete'.$font->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($font);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_font_index');
    }
}
