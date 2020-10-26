<?php


namespace App\Service;

use App\Entity\Design\Cut;
use App\Entity\Design\Text;
use App\Repository\Design\CutRepository;
use App\Repository\Design\DesignRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use Exception;
use JMS\Serializer\SerializationContext;
use JMS\Serializer\SerializerBuilder;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ClientExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\DecodingExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\RedirectionExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\ServerExceptionInterface;
use Symfony\Contracts\HttpClient\Exception\TransportExceptionInterface;
/**
 * @Route("/designservice", name="designservice")
 * @return array|string
 */
class DesignService
{
    private $em;

    private $security;

    /**
     * DesignService constructor.
     * @param Security $security
     * @param EntityManagerInterface $em
     */
    public function __construct(Security $security, EntityManagerInterface $em)
    {
        $this->em = $em;
        $this->security = $security;
    }

    /**
     * @param Text $text
     * @return mixed
     */
    public function saveText(Text $text)
    {
        $recupText = $this->em->getRepository(Text::class)->findOneBy(['name' => $text->getName()]);

        if ($recupText == null) {
            $recupText = new Text();

            $recupText->setName($text->getName());
            $recupText->setGenre($text->getGenre());
            $recupText->setLength($text->getLength());
            $recupText->setWordCount($text->getWordCount());
            $recupText->setTemplates($text->getTemplates());
            $recupText->setModels($text->getModels());
            $recupText->setImages($text->getImages());
            $recupText->setTags($text->getTags());

            $this->em->persist($recupText);
            $this->em->flush();

            if ($text->getCuts() != null) {
                foreach ($text->getCuts() as $cut) {
                    $cut->setText($recupText);
                    $this->em->persist($cut);
                    $this->em->flush();
                    
                    $recupText->addCut($cut);

                }
            }

            $this->em->persist($recupText);
            $this->em->flush();

        }

        return $recupText;

    }

}