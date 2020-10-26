<?php

namespace App\Controller\Design;

use App\Entity\Design\Template;
use App\Form\Design\TemplateType;
use App\Repository\Design\TemplateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;

/**
 * @Route("/design/template")
 */
class TemplateController extends AbstractController
{
    /**
     * @Route("/templatelist", name="design_template_list", methods={"GET"})
     * @param TemplateRepository $templateRepository
     * @return JsonResponse
     */
    public function templatelist(TemplateRepository $templateRepository): JsonResponse
    {
//        var_dump( $this->json($tagRepository->findAll()));
//        return $this->json($tagRepository->findAll());

        return $this->json($templateRepository->findAll(), 200,[],[AbstractNormalizer::ATTRIBUTES => ['id', 'name']]);

    }



    /**
     * @Route("/", name="design_template_index", methods={"GET"})
     * @param TemplateRepository $templateRepository
     * @return Response
     */
    public function index(TemplateRepository $templateRepository): Response
    {
        return $this->render('design/template/index.html.twig', [
            'templates' => $templateRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_template_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $template = new Template();
        $form = $this->createForm(TemplateType::class, $template);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($template);
            $entityManager->flush();

            return $this->redirectToRoute('design_template_index');
        }

        return $this->render('design/template/new.html.twig', [
            'template' => $template,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_template_show", methods={"GET"})
     * @param Template $template
     * @return Response
     */
    public function show(Template $template): Response
    {
        return $this->render('design/template/show.html.twig', [
            'template' => $template,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_template_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Template $template
     * @return Response
     */
    public function edit(Request $request, Template $template): Response
    {
        $form = $this->createForm(TemplateType::class, $template);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_template_index');
        }

        return $this->render('design/template/edit.html.twig', [
            'template' => $template,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="design_template_delete")
     * @param Request $request
     * @param Template $template
     * @return Response
     */
    public function delete(Request $request, Template $template): Response
    {

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($template);
            $entityManager->flush();


        return $this->redirectToRoute('design_template_index');
    }
}
