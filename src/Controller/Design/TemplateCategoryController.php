<?php

namespace App\Controller\Design;

use App\Entity\Design\TemplateCategory;
use App\Form\Design\TemplateCategoryType;
use App\Repository\Design\TemplateCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/design/template/category")
 */
class TemplateCategoryController extends AbstractController
{
    /**
     * @Route("/", name="design_template_category_index", methods={"GET"})
     */
    public function index(TemplateCategoryRepository $templateCategoryRepository): Response
    {
        return $this->render('design/template_category/index.html.twig', [
            'template_categories' => $templateCategoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_template_category_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $templateCategory = new TemplateCategory();
        $form = $this->createForm(TemplateCategoryType::class, $templateCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($templateCategory);
            $entityManager->flush();

            return $this->redirectToRoute('design_template_category_index');
        }

        return $this->render('design/template_category/new.html.twig', [
            'template_category' => $templateCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_template_category_show", methods={"GET"})
     */
    public function show(TemplateCategory $templateCategory): Response
    {
        return $this->render('design/template_category/show.html.twig', [
            'template_category' => $templateCategory,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_template_category_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, TemplateCategory $templateCategory): Response
    {
        $form = $this->createForm(TemplateCategoryType::class, $templateCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_template_category_index');
        }

        return $this->render('design/template_category/edit.html.twig', [
            'template_category' => $templateCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_template_category_delete", methods={"DELETE"})
     */
    public function delete(Request $request, TemplateCategory $templateCategory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$templateCategory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($templateCategory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_template_category_index');
    }
}
