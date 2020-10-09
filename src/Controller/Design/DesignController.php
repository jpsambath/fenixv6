<?php

namespace App\Controller\Design;

use App\Entity\Design\Design;
use App\Entity\Design\Tag;
use App\Form\Design\DesignType;
use App\Repository\Design\DesignRepository;
use App\Repository\Design\ModelCategoryRepository;
use App\Repository\Design\ModelRepository;
use App\Repository\Design\TagRepository;
use App\Repository\Design\TemplateCategoryRepository;
use App\Repository\Design\TemplateRepository;
use JMS\Serializer\SerializerBuilder;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
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
     * @param DesignRepository $designRepository
     * @param TagRepository $tagRepository
     * @param ModelRepository $modelRepository
     * @param TemplateRepository $templateRepository
     * @param ModelCategoryRepository $modelCategoryRepository
     * @param TemplateCategoryRepository $templateCategoryRepository
     * @return Response
     */
    public function index(DesignRepository $designRepository, TagRepository $tagRepository, ModelRepository $modelRepository, TemplateRepository $templateRepository, ModelCategoryRepository $modelCategoryRepository, TemplateCategoryRepository $templateCategoryRepository): Response
    {
        return $this->render('design/design/index.html.twig', [
            'designs' => $designRepository->findAll(),
            'tags' => $tagRepository->findAll(),
            'models' => $modelRepository->findAll(),
            'modelCategories' => $modelCategoryRepository->findAll(),
            'templates' => $templateRepository->findAll(),
            'templateCategories' => $templateCategoryRepository->findAll()
        ]);
    }

    /**
     * @Route("/new", name="design_design_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
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
     * @param Design $design
     * @return Response
     */
    public function show(Design $design): Response
    {
        return $this->render('design/design/show.html.twig', [
            'design' => $design,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_design_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Design $design
     * @return Response
     */
    public function edit(Request $request, Design $design): Response
    {


        $form = $this->createForm(DesignType::class, $design);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();
        }

        return $this->render('design/design/edit.html.twig', [
            'design' => $design,
            'form' => $form->createView(),
        ]);

    }

    /**
     * @Route("/delete/{id}", name="design_design_delete")
     * @param Request $request
     * @param Design $design
     * @return Response
     */
    public function delete(Request $request, Design $design): Response
    {
        //if ($this->isCsrfTokenValid('delete'.$design->getId(), $request->request->get('_token'))) {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($design);
        $entityManager->flush();
        //}

        return $this->redirectToRoute('design_design_index');
    }

    /**
     * @Route("/ajaxaddtag", name="design_design_ajaxaddtag")
     * @param Request $request
     * @param TagRepository $tagRepository
     * @param DesignRepository $designRepository
     * @return JsonResponse
     */
    public function ajax_add_tags(Request $request, TagRepository $tagRepository, DesignRepository $designRepository)
    {
        if ($request->isXMLHttpRequest()) {
            $data = $request->request->all();

            $entityManager = $this->getDoctrine()->getManager();

            $serializer = SerializerBuilder::create()->build();
            $tagArgument = $serializer->deserialize($data['tags'], "array", "json");
            $designArgument = $serializer->deserialize($data['designs'], "array", "json");

            $designList = array();
            $oneDesign = new Design();

            $tagList = array();
            $oneTag = new Tag();

            $htmlresponse = "";
            $htmltag = "";
            $i = 0;

            foreach ($tagArgument as $tag) {
                if (is_numeric($tag)) {
                    $oneTag = new Tag();
                    $oneTag = $tagRepository->find($tag);
                    $tagList[] = $oneTag;
                } else {
                    $oneTag = new Tag();
                    $oneTag->setName($tag);
                    $entityManager->persist($oneTag);
                    $entityManager->flush();
                    $tagList[] = $oneTag;
                }

            }

            foreach ($designArgument as $design) {
                $htmltag = "";
                $oneDesign = $designRepository->find($design['id']);

                foreach ($tagList as $tag) {
                    $oneDesign->addTag($tag);
                }

                $entityManager->persist($oneDesign);
                $entityManager->flush();
                $designList[] = $oneDesign;

//                foreach($oneDesign->getTags() as $tag){
//                    $htmltag .= $tag->getName()." ";
//                }
//
//                $htmlresponse .= "<tr data-index=\"".$i."\" class=\"selected\"><td class=\"bs-checkbox \" style=\"width: 36px; \"><label>
//            <input data-index=\"".$i."\" name=\"id\" type=\"checkbox\" value=\"".$oneDesign->getId()."\">
//            <span></span>
//            </label></td><td>".$oneDesign->getId()."</td><td>".$oneDesign->getName()."</td><td>".$htmltag."</td><td></td><td></td><td><a href=\"/design/design/".$oneDesign->getId()."\"><span class=\"faicon\"><i class=\"fas fa-eye\"></i></span></a>
//                                    <a href=\"/design/design/".$oneDesign->getId()."/edit\"><span class=\"faicon\"><i class=\"fas fa-edit\"></i></span></a>
//                                    <a href=\"/design/design/delete/".$oneDesign->getId()."\"><span class=\"faicon\"><i class=\"fas fa-trash-alt\"></i></span></a></td></tr>";
//
//                $i++;

            }
            $designListJson = $serializer->serialize($designList, "json");

            return new JsonResponse($designListJson);
        } else {
            $this->redirectToRoute('design_design_index');
        }
    }

    /**
     * @Route("/ajaxunlinktag/{designid}/{tagid}", name="design_design_ajaxunlinktag")
     * @param Request $request
     * @param Design $design
     * @param Tag $tag
     * @return JsonResponse
     * @ParamConverter("design", options={"mapping": {"designid" : "id"}})
     * @ParamConverter("tag", options={"mapping": {"tagid" : "id"}})
     */
    public function ajax_unlink_tag(Request $request, Design $design, Tag $tag)
    {
        if ($request->isXMLHttpRequest()) {
            $entityManager = $this->getDoctrine()->getManager();

            $design->removeTag($tag);
            $entityManager->persist($design);
            $entityManager->flush();

            $serializer = SerializerBuilder::create()->build();

            $designJson = $serializer->serialize($design, "json");

            return new JsonResponse($designJson);
        } else {
            $this->redirectToRoute('design_design_index');
        }
    }
}
