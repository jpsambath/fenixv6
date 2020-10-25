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

/* admin/synchronizeprintify.html.twig */
class __TwigTemplate_8d7b8d39896b3857d89be596272cc8bbd2f9ca31a22240a61fa0b88589e66879 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/synchronizeprintify.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "admin/synchronizeprintify.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "admin/synchronizeprintify.html.twig", 1);
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

        echo "Admin Page";
        
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
        echo "<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class=\"example-wrapper\">
    <h1>Synchronisation</h1>

    ";
        // line 14
        if ((isset($context["printify_shoplist"]) || array_key_exists("printify_shoplist", $context))) {
            // line 15
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_shoplist"]) || array_key_exists("printify_shoplist", $context) ? $context["printify_shoplist"] : (function () { throw new RuntimeError('Variable "printify_shoplist" does not exist.', 15, $this->source); })()));
            echo "
    ";
        }
        // line 17
        echo "
    ";
        // line 18
        if ((isset($context["printify_blueprintlist"]) || array_key_exists("printify_blueprintlist", $context))) {
            // line 19
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_blueprintlist"]) || array_key_exists("printify_blueprintlist", $context) ? $context["printify_blueprintlist"] : (function () { throw new RuntimeError('Variable "printify_blueprintlist" does not exist.', 19, $this->source); })()));
            echo "
    ";
        }
        // line 21
        echo "
    ";
        // line 22
        if ((isset($context["printify_providerlist"]) || array_key_exists("printify_providerlist", $context))) {
            // line 23
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_providerlist"]) || array_key_exists("printify_providerlist", $context) ? $context["printify_providerlist"] : (function () { throw new RuntimeError('Variable "printify_providerlist" does not exist.', 23, $this->source); })()));
            echo "
    ";
        }
        // line 25
        echo "
    ";
        // line 26
        if ((isset($context["printify_fullblueprintlist"]) || array_key_exists("printify_fullblueprintlist", $context))) {
            // line 27
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_fullblueprintlist"]) || array_key_exists("printify_fullblueprintlist", $context) ? $context["printify_fullblueprintlist"] : (function () { throw new RuntimeError('Variable "printify_fullblueprintlist" does not exist.', 27, $this->source); })()));
            echo "
    ";
        }
        // line 29
        echo "
    ";
        // line 30
        if ((isset($context["printify_variantlist"]) || array_key_exists("printify_variantlist", $context))) {
            // line 31
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_variantlist"]) || array_key_exists("printify_variantlist", $context) ? $context["printify_variantlist"] : (function () { throw new RuntimeError('Variable "printify_variantlist" does not exist.', 31, $this->source); })()));
            echo "
    ";
        }
        // line 33
        echo "
    ";
        // line 34
        if ((isset($context["printify_shippinglist"]) || array_key_exists("printify_shippinglist", $context))) {
            // line 35
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["printify_shippinglist"]) || array_key_exists("printify_shippinglist", $context) ? $context["printify_shippinglist"] : (function () { throw new RuntimeError('Variable "printify_shippinglist" does not exist.', 35, $this->source); })()));
            echo "
    ";
        }
        // line 37
        echo "

";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "admin/synchronizeprintify.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  161 => 37,  155 => 35,  153 => 34,  150 => 33,  144 => 31,  142 => 30,  139 => 29,  133 => 27,  131 => 26,  128 => 25,  122 => 23,  120 => 22,  117 => 21,  111 => 19,  109 => 18,  106 => 17,  100 => 15,  98 => 14,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Admin Page{% endblock %}

{% block body %}
<style>
    .example-wrapper { margin: 1em auto; max-width: 800px; width: 95%; font: 18px/1.5 sans-serif; }
    .example-wrapper code { background: #F5F5F5; padding: 2px 6px; }
</style>

<div class=\"example-wrapper\">
    <h1>Synchronisation</h1>

    {% if printify_shoplist is defined %}
        {{ dump(printify_shoplist) }}
    {% endif %}

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

    {% if printify_shippinglist is defined %}
        {{ dump(printify_shippinglist) }}
    {% endif %}


{% endblock %}
", "admin/synchronizeprintify.html.twig", "C:\\wamp64\\www\\fenix\\templates\\admin\\synchronizeprintify.html.twig");
    }
}
