<?php

namespace App\Controller\Design;

use App\Entity\Design\Image;
use App\Form\Design\ImageType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;

/**
 * @Route("/design/image")
 */
class ImageController extends AbstractController
{
    /**
     * @Route("/", name="design_image_index", methods={"GET"})
     */
    public function index(): Response
    {
        $images = $this->getDoctrine()
            ->getRepository(Image::class)
            ->findAll();

        return $this->render('design/image/index.html.twig', [
            'images' => $images,
        ]);
    }

    /**
     * @Route("/new", name="design_image_new", methods={"GET","POST"})
     * @param Request $request
     * @param SluggerInterface $slugger
     * @return Response
     */
    public function new(Request $request, SluggerInterface $slugger): Response
    {
        $image = new Image();
        $form = $this->createForm(ImageType::class, $image);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $img = $form->get('file')->getData();

            if ($img) {
                $originalFilename = pathinfo($img->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename . '-' . uniqid() . '.' . $img->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $img->move($this->getParameter('kernel.project_dir').'\public\build\images', $newFilename);
                    $image->setSrc($this->getParameter('kernel.project_dir').'\public\build\images\\'.$newFilename);

                } catch (FileException $e) {
                    echo $e->getMessage();
                }
            }

            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($image);
            $entityManager->flush();

            return $this->redirectToRoute('design_image_index');
        }

        return $this->render('design/image/new.html.twig', [
            'image' => $image,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_image_show", methods={"GET"})
     * @param Image $image
     * @return Response
     */
    public function show(Image $image): Response
    {
        return $this->render('design/image/show.html.twig', [
            'image' => $image,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="design_image_edit", methods={"GET","POST"})
     * @param Request $request
     * @param Image $image
     * @return Response
     */
    public function edit(Request $request, Image $image): Response
    {
        var_dump(pathinfo($image->getSrc(), PATHINFO_DIRNAME));
        var_dump(pathinfo($image->getSrc(), PATHINFO_BASENAME));
        $image->setFile(
            new UploadedFile(
                $image->getSrc(),
                pathinfo($image->getSrc(), PATHINFO_BASENAME)
            ));
//        $image->setFile(new File($image->getSrc()));
        //dd($image);

        $form = $this->createForm(ImageType::class, $image);

        $form->get('file')->setData($image->getFile());
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('design_image_index');
        }

        return $this->render('design/image/edit.html.twig', [
            'image' => $image,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="design_image_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Image $image): Response
    {
        if ($this->isCsrfTokenValid('delete'.$image->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($image);
            $entityManager->flush();
        }

        return $this->redirectToRoute('design_image_index');
    }
}
