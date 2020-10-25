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

/* user/register.html.twig */
class __TwigTemplate_c48d0eaef7cb2d46bb5013b3a7e81185d5c746b4ec5db545f91ddbf90250a364 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/register.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/register.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "user/register.html.twig", 1);
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

        echo "Hello UserController!";
        
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
        echo "
    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Inscription</h1>
        <p class=\"lead\">Inscrivez vous! Outil de spin ultra puissant</p>
    </div>

    <div class=\"container\">
        <div class=\"card-deck mb-3 text-center\">
            <div class=\"card mb-6 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Inscription</h4>
                </div>
                <div class=\"card-body\">

                    ";
        // line 20
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 20, $this->source); })()), 'form_start');
        echo "
                    ";
        // line 21
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 21, $this->source); })()), "username", [], "any", false, false, false, 21), 'row');
        echo "
                    ";
        // line 22
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 22, $this->source); })()), "email", [], "any", false, false, false, 22), 'row');
        echo "
                    ";
        // line 23
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 23, $this->source); })()), "password", [], "any", false, false, false, 23), "first", [], "any", false, false, false, 23), 'row');
        echo "
                    ";
        // line 24
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 24, $this->source); })()), "password", [], "any", false, false, false, 24), "second", [], "any", false, false, false, 24), 'row');
        echo "
                    ";
        // line 25
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 25, $this->source); })()), "printify_apikey", [], "any", false, false, false, 25), 'row');
        echo "
                    ";
        // line 26
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 26, $this->source); })()), "printful_apikey", [], "any", false, false, false, 26), 'row');
        echo "

                    <button type=\"submit\" class=\"btn btn-outline-primary\">S'inscrire</button>
                    ";
        // line 29
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 29, $this->source); })()), 'form_end');
        echo "
                </div>
            </div>

        </div>

        <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">
            <div class=\"row\">
                <div class=\"col-12 col-md\">
                    <img class=\"mb-2\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">
                    <small class=\"d-block mb-3 text-muted\">© 2017-2018</small>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>Features</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>
                    </ul>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>Resources</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>
                    </ul>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>About</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Team</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "user/register.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  134 => 29,  128 => 26,  124 => 25,  120 => 24,  116 => 23,  112 => 22,  108 => 21,  104 => 20,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello UserController!{% endblock %}

{% block body %}

    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Inscription</h1>
        <p class=\"lead\">Inscrivez vous! Outil de spin ultra puissant</p>
    </div>

    <div class=\"container\">
        <div class=\"card-deck mb-3 text-center\">
            <div class=\"card mb-6 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Inscription</h4>
                </div>
                <div class=\"card-body\">

                    {{ form_start(form) }}
                    {{ form_row(form.username) }}
                    {{ form_row(form.email) }}
                    {{ form_row(form.password.first) }}
                    {{ form_row(form.password.second) }}
                    {{ form_row(form.printify_apikey) }}
                    {{ form_row(form.printful_apikey) }}

                    <button type=\"submit\" class=\"btn btn-outline-primary\">S'inscrire</button>
                    {{ form_end(form) }}
                </div>
            </div>

        </div>

        <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">
            <div class=\"row\">
                <div class=\"col-12 col-md\">
                    <img class=\"mb-2\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"24\" height=\"24\">
                    <small class=\"d-block mb-3 text-muted\">© 2017-2018</small>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>Features</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Cool stuff</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Random feature</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Team feature</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Stuff for developers</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Another one</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Last time</a></li>
                    </ul>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>Resources</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Resource</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Resource name</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Another resource</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Final resource</a></li>
                    </ul>
                </div>
                <div class=\"col-6 col-md\">
                    <h5>About</h5>
                    <ul class=\"list-unstyled text-small\">
                        <li><a class=\"text-muted\" href=\"#\">Team</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Locations</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Privacy</a></li>
                        <li><a class=\"text-muted\" href=\"#\">Terms</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
{% endblock %}
", "user/register.html.twig", "C:\\wamp64\\www\\fenix\\templates\\user\\register.html.twig");
    }
}
