<?php

namespace App\Controller\Design;

use App\Entity\Design\Cut;
use App\Entity\Design\Text;
use App\Form\Design\CutType;
use App\Repository\Design\CutRepository;
use App\Repository\Design\TextRepository;
use JMS\Serializer\SerializerBuilder;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/design/cut")
 */
class CutController extends AbstractController
{
    /**
     * @Route("/savecut/{textid}", name="design_cut_savecut")
     * @ParamConverter("text", options={"mapping": {"textid" : "id"}})
     * @param TextRepository $textRepository
     * @param Text $text
     * @param CutRepository $cutRepository
     * @param Request $request
     * @return Response
     */
    public function savecut(TextRepository $textRepository, Text $text, CutRepository $cutRepository, Request $request): Response
    {
        if ($request->isXMLHttpRequest()) {
            $data = $request->request->all();

            $entityManager = $this->getDoctrine()->getManager();

            $serializer = SerializerBuilder::create()->build();
            $cut = $serializer->deserialize($data['cut'], 'App\Entity\Design\Cut', "json");
            $cut->setText($text);

            $entityManager->merge($cut);
            $entityManager->flush();
            $response = $serializer->serialize(['result' => 'ok', 'cut' => $cut], "json");

            return new Response($response);
        } else {
            $this->redirectToRoute('design_design_index');
        }
        return new Response('This is not ajax!', 400);
    }


    /**
     * @Route("/", name="design_cut_index", methods={"GET"})
     * @param CutRepository $cutRepository
     * @return Response
     */
    public function index(CutRepository $cutRepository): Response
    {
        return $this->render('design/cut/index.html.twig', [
            'cuts' => $cutRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_cut_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $cut = new Cut();
        $form = $this->createForm(CutType::class, $cut);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($cut);
            $entityManager->flush();

            return $this->redirectToRoute('design_cut_index');
        }

        return $this->render('design/cut/new.html.twig', [
            'cut' => $cut,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_cut_show", methods={"GET"})
     * @param Cut $cut
     * @return Response
     */
    public function show(Cut $cut): Response
    {
        return $this->render('design/cut/show.html.twig', [
            'cut' => $cut,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_cut_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Cut $cut
     * @return Response
     */
    public function edit(Request $request, Cut $cut): Response
    {
        $form = $this->createForm(CutType::class, $cut);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_cut_index');
        }

        return $this->render('design/cut/edit.html.twig', [
            'cut' => $cut,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/delete/{id}", name="design_cut_delete")
     * @param Request $request
     * @param Cut $cut
     * @return Response
     */
    public function delete(Request $request, Cut $cut): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        $entityManager->remove($cut);
        $entityManager->flush();

        return $this->redirectToRoute('design_cut_index');
    }
}
