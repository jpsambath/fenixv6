<?php

namespace App\Controller\Design;

use App\Entity\Design\ModelCategory;
use App\Form\Design\ModelCategoryType;
use App\Repository\Design\ModelCategoryRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/design/model/category")
 */
class ModelCategoryController extends AbstractController
{
    /**
     * @Route("/", name="design_model_category_index", methods={"GET"})
     */
    public function index(ModelCategoryRepository $modelCategoryRepository): Response
    {
        return $this->render('design/model_category/index.html.twig', [
            'model_categories' => $modelCategoryRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_model_category_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $modelCategory = new ModelCategory();
        $form = $this->createForm(ModelCategoryType::class, $modelCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($modelCategory);
            $entityManager->flush();

            return $this->redirectToRoute('design_model_category_index');
        }

        return $this->render('design/model_category/new.html.twig', [
            'model_category' => $modelCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_model_category_show", methods={"GET"})
     */
    public function show(ModelCategory $modelCategory): Response
    {
        return $this->render('design/model_category/show.html.twig', [
            'model_category' => $modelCategory,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_model_category_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, ModelCategory $modelCategory): Response
    {
        $form = $this->createForm(ModelCategoryType::class, $modelCategory);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_model_category_index');
        }

        return $this->render('design/model_category/edit.html.twig', [
            'model_category' => $modelCategory,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_model_category_delete", methods={"DELETE"})
     */
    public function delete(Request $request, ModelCategory $modelCategory): Response
    {
        if ($this->isCsrfTokenValid('delete'.$modelCategory->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($modelCategory);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_model_category_index');
    }
}
