<?php

namespace App\Controller\Design;

use App\Entity\Design\Model;
use App\Form\Design\ModelType;
use App\Repository\Design\ModelRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/design/model")
 */
class ModelController extends AbstractController
{
    /**
     * @Route("/", name="design_model_index", methods={"GET"})
     * @param ModelRepository $modelRepository
     * @return Response
     */
    public function index(ModelRepository $modelRepository): Response
    {
        return $this->render('design/model/index.html.twig', [
            'models' => $modelRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="design_model_new", methods={"GET","POST"})
     * @param Request $request
     * @param SluggerInterface $slugger
     * @return Response
     */
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $model = new Model();
        $form = $this->createForm(ModelType::class, $model);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $mdl = $form->get('file')->getData();

            if ($mdl) {
                $originalFilename = pathinfo($mdl->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $mdl->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $mdl->move($this->getParameter('kernel.project_dir').'\public\models', $newFilename);
                    $model->setSrc($this->getParameter('kernel.project_dir').'\public\models\\'.$newFilename);

                } catch (FileException $e) {
                    echo $e->getMessage();
                }
            }


            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($model);
            $entityManager->flush();

            return $this->redirectToRoute('design_model_index');
        }

        return $this->render('design/model/new.html.twig', [
            'model' => $model,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_model_show", methods={"GET"})
     * @param Model $model
     * @return Response
     */
    public function show(Model $model): Response
    {
        return $this->render('design/model/show.html.twig', [
            'model' => $model,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_model_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Model $model
     * @param SluggerInterface $slugger
     * @return Response
     */
    public function edit(Request $request, Model $model, SluggerInterface $slugger): Response
    {
        $model->setFile(
            new UploadedFile(
                $model->getSrc(),
                pathinfo($model->getSrc(), PATHINFO_BASENAME)
            ));
        $form = $this->createForm(ModelType::class, $model);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $mdl = $form->get('file')->getData();

            if ($mdl) {
                $originalFilename = pathinfo($mdl->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $mdl->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $mdl->move($this->getParameter('kernel.project_dir').'\public\models', $newFilename);
                    $model->setSrc($this->getParameter('kernel.project_dir').'\public\models\\'.$newFilename);

                } catch (FileException $e) {
                    echo $e->getMessage();
                }
            }


            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_model_index');
        }

        return $this->render('design/model/edit.html.twig', [
            'model' => $model,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_model_delete", methods={"DELETE"})
     * @param Request $request
     * @param Model $model
     * @return Response
     */
    public function delete(Request $request, Model $model): Response
    {
        if ($this->isCsrfTokenValid('delete'.$model->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($model);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_model_index');
    }
}
