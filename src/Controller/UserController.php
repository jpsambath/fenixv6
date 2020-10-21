<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserEdit;
use App\Form\UserRegister;
use LogicException;
use Swift_Mailer;
use Swift_Message;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class UserController extends AbstractController
{
    /**
     * @Route("/register", name="register")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param Swift_Mailer $mailer
     * @return RedirectResponse|Response
     */
    public function register(Request $request, UserPasswordEncoderInterface $passwordEncoder, Swift_Mailer $mailer)
    {
        // 1) build the form
        $user = new User();
        $form = $this->createForm(UserRegister::class, $user);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            // 3) Encode the password (you could also do this via Doctrine listener)
            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setPassword($password);
            $user->setRoles(['ROLE_PRINTIFY', 'ROLE_SHOPIFY', 'ROLE_PRINTFUL', 'ROLE_ADMIN']);
            $user->addApikeys("printify_apikey", $form->get("printify_apikey")->getData());
            $user->addApikeys("printful_apikey", $form->get("printful_apikey")->getData());

            // 4) save the User!
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            $message = (new Swift_Message('Printify Lightning Fast - Utilisateur créé avec succès'))
                ->setFrom(array('contact@plf.com' => 'Printify Lightning Fast'))
                ->setTo('pa.tisle@karmage.fr')
                ->setBody('Utilisateur créé ! xD');
            /*->setBody(
                $this->renderView(
                // templates/emails/registration.html.twig
                    'emails/registration.html.twig',
                    ['name' => $name]
                ),
                'text/html'
            )*/

            // you can remove the following code if you don't define a text version for your emails

            $mailer->send($message);


            $this->addFlash('success', 'Utilisateur créé avec succés!');

            return $this->redirectToRoute('homepage');
        }

        return $this->render(
            'user/register.html.twig',
            array('registerform' => $form->createView())
        );
    }

    /**
     * @Route("/edit", name="edit")
     * @param Request $request
     * @param UserPasswordEncoderInterface $passwordEncoder
     * @param Swift_Mailer $mailer
     * @return RedirectResponse|Response
     */
    public function edit(Request $request, UserPasswordEncoderInterface $passwordEncoder, Swift_Mailer $mailer)
    {
        // 1) build the form
        $user = $this->getUser();
        $form = $this->createForm(UserEdit::class, $user);

        // 2) handle the submit (will only happen on POST)
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {

            // 3) Encode the password (you could also do this via Doctrine listener)
            $password = $passwordEncoder->encodePassword($user, $user->getPassword());
            $user->setEmail($form->get("email")->getData());
            $user->setUsername($form->get("username")->getData());
            $user->addApikeys("printify_apikey", $form->get("printify_apikey")->getData());
            $user->addApikeys("printful_apikey", $form->get("printful_apikey")->getData());

            // 4) save the User!
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();


            $this->addFlash('success', 'Utilisateur modifié avec succés!');

            return $this->redirectToRoute('homepage');
        }

        return $this->render(
            'user/edit.html.twig',
            array('editform' => $form->createView())
        );
    }


    /**
     * @Route("/login", name="app_login")
     * @param AuthenticationUtils $authenticationUtils
     * @return Response
     */
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        // if ($this->getUser()) {
        //     return $this->redirectToRoute('target_path');
        // }

        // get the login error if there is one
        $error = $authenticationUtils->getLastAuthenticationError();
        // last username entered by the user
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('user/login.html.twig', ['last_username' => $lastUsername, 'error' => $error]);
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }


}
