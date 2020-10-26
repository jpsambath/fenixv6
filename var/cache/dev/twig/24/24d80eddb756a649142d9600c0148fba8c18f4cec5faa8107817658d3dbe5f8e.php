<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* home/index.html.twig */
class __TwigTemplate_660437c786129553da3bc70ca46035eecc14f2b7e364c67fc3cb285949a15266 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'body' => [$this, 'block_body'],
        ];
    }

    protected function doGetParent(array $context)
    {
        // line 1
        return "base.html.twig";
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "home/index.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "home/index.html.twig", 1);
        $this->parent->display($context, array_merge($this->blocks, $blocks));
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    // line 3
    public function block_title($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "title"));

        echo "FENIX";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 5
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 6
        echo "    <style>
        .example-wrapper {
            margin: 1em auto;
            max-width: 800px;
            width: 95%;
            font: 18px/1.5 sans-serif;
        }

        .example-wrapper code {
            background: #F5F5F5;
            padding: 2px 6px;
        }
    </style>

    <div class=\"example-wrapper\">
        <h1>Hello ! ✅</h1>


        Ici présentation de l'outil blablabla !
        <ul>
            <li>Your controller at <code><a
                            href=\"";
        // line 27
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\CodeExtension']->getFileLink("C:/wamp64/www/Spinning/src/Controller/HomeController.php", 0), "html", null, true);
        echo "\">src/Controller/HomeController.php</a></code>
            </li>
            <li>Your template at <code><a
                            href=\"";
        // line 30
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\CodeExtension']->getFileLink("C:/wamp64/www/Spinning/templates/home/index.html.twig", 0), "html", null, true);
        echo "\">templates/home/index.html.twig</a></code>
            </li>
        </ul>

        ";
        // line 34
        if ((isset($context["printify_blueprintlist"]) || array_key_exists("printify_blueprintlist", $context))) {
            // line 35
            echo "            ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_blueprintlist"]) || array_key_exists("printify_blueprintlist", $context) ? $context["printify_blueprintlist"] : (function () { throw new RuntimeError('Variable "printify_blueprintlist" does not exist.', 35, $this->source); })()));
            echo "
        ";
        }
        // line 37
        echo "
        ";
        // line 38
        if ((isset($context["printify_providerlist"]) || array_key_exists("printify_providerlist", $context))) {
            // line 39
            echo "            ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_providerlist"]) || array_key_exists("printify_providerlist", $context) ? $context["printify_providerlist"] : (function () { throw new RuntimeError('Variable "printify_providerlist" does not exist.', 39, $this->source); })()));
            echo "
        ";
        }
        // line 41
        echo "
        ";
        // line 42
        if ((isset($context["printify_fullblueprintlist"]) || array_key_exists("printify_fullblueprintlist", $context))) {
            // line 43
            echo "            ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_fullblueprintlist"]) || array_key_exists("printify_fullblueprintlist", $context) ? $context["printify_fullblueprintlist"] : (function () { throw new RuntimeError('Variable "printify_fullblueprintlist" does not exist.', 43, $this->source); })()));
            echo "
        ";
        }
        // line 45
        echo "
        ";
        // line 46
        if ((isset($context["printify_variantlist"]) || array_key_exists("printify_variantlist", $context))) {
            // line 47
            echo "            ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_variantlist"]) || array_key_exists("printify_variantlist", $context) ? $context["printify_variantlist"] : (function () { throw new RuntimeError('Variable "printify_variantlist" does not exist.', 47, $this->source); })()));
            echo "
        ";
        }
        // line 49
        echo "


    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "home/index.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  165 => 49,  159 => 47,  157 => 46,  154 => 45,  148 => 43,  146 => 42,  143 => 41,  137 => 39,  135 => 38,  132 => 37,  126 => 35,  124 => 34,  117 => 30,  111 => 27,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}FENIX{% endblock %}

{% block body %}
    <style>
        .example-wrapper {
            margin: 1em auto;
            max-width: 800px;
            width: 95%;
            font: 18px/1.5 sans-serif;
        }

        .example-wrapper code {
            background: #F5F5F5;
            padding: 2px 6px;
        }
    </style>

    <div class=\"example-wrapper\">
        <h1>Hello ! ✅</h1>


        Ici présentation de l'outil blablabla !
        <ul>
            <li>Your controller at <code><a
                            href=\"{{ 'C:/wamp64/www/Spinning/src/Controller/HomeController.php'|file_link(0) }}\">src/Controller/HomeController.php</a></code>
            </li>
            <li>Your template at <code><a
                            href=\"{{ 'C:/wamp64/www/Spinning/templates/home/index.html.twig'|file_link(0) }}\">templates/home/index.html.twig</a></code>
            </li>
        </ul>

        {% if printify_blueprintlist is defined %}
            {{ dump(printify_blueprintlist) }}
        {% endif %}

        {% if printify_providerlist is defined %}
            {{ dump(printify_providerlist) }}
        {% endif %}

        {% if printify_fullblueprintlist is defined %}
            {{ dump(printify_fullblueprintlist) }}
        {% endif %}

        {% if printify_variantlist is defined %}
            {{ dump(printify_variantlist) }}
        {% endif %}



    </div>
{% endblock %}
", "home/index.html.twig", "C:\\wamp64\\www\\fenix\\templates\\home\\index.html.twig");
    }
}
