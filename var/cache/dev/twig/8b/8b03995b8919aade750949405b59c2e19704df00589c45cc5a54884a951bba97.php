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

/* printify/createProduct.html.twig */
class __TwigTemplate_f56f576460c20b3fbbe29093218ba969fb960955c42cfa0e1cee7708b6cc751b extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/createProduct.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/createProduct.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "printify/createProduct.html.twig", 1);
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

        echo "Hello ProjetController!";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 6
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 7
        echo "
    ";
        // line 8
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 8, $this->source); })()), "flashes", [0 => "success"], "method", false, false, false, 8));
        foreach ($context['_seq'] as $context["_key"] => $context["message"]) {
            // line 9
            echo "        <div class=\"alert alert-success\">
            ";
            // line 10
            echo twig_escape_filter($this->env, $context["message"], "html", null, true);
            echo "
        </div>
    ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['message'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 13
        echo "
    ";
        // line 14
        if ((isset($context["filename"]) || array_key_exists("filename", $context))) {
            // line 15
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["filename"]) || array_key_exists("filename", $context) ? $context["filename"] : (function () { throw new RuntimeError('Variable "filename" does not exist.', 15, $this->source); })()));
            echo "
    ";
        }
        // line 17
        echo "    ";
        if ((isset($context["originalfilename"]) || array_key_exists("originalfilename", $context))) {
            // line 18
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["originalfilename"]) || array_key_exists("originalfilename", $context) ? $context["originalfilename"] : (function () { throw new RuntimeError('Variable "originalfilename" does not exist.', 18, $this->source); })()));
            echo "
    ";
        }
        // line 20
        echo "
    ";
        // line 21
        if ((isset($context["productlist"]) || array_key_exists("productlist", $context))) {
            // line 22
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["productlist"]) || array_key_exists("productlist", $context) ? $context["productlist"] : (function () { throw new RuntimeError('Variable "productlist" does not exist.', 22, $this->source); })()));
            echo "
    ";
        }
        // line 24
        echo "
    ";
        // line 25
        if ((isset($context["createproduct"]) || array_key_exists("createproduct", $context))) {
            // line 26
            echo "        ";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\DumpExtension']->dump($this->env, $context, (isset($context["createproduct"]) || array_key_exists("createproduct", $context) ? $context["createproduct"] : (function () { throw new RuntimeError('Variable "createproduct" does not exist.', 26, $this->source); })()));
            echo "
    ";
        }
        // line 28
        echo "

    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Product from ";
        // line 31
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["shop"]) || array_key_exists("shop", $context) ? $context["shop"] : (function () { throw new RuntimeError('Variable "shop" does not exist.', 31, $this->source); })()), "title", [], "any", false, false, false, 31), "html", null, true);
        echo "</h1>
        <p class=\"lead\">";
        // line 32
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["shop"]) || array_key_exists("shop", $context) ? $context["shop"] : (function () { throw new RuntimeError('Variable "shop" does not exist.', 32, $this->source); })()), "platform", [], "any", false, false, false, 32), "html", null, true);
        echo " on ";
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["shop"]) || array_key_exists("shop", $context) ? $context["shop"] : (function () { throw new RuntimeError('Variable "shop" does not exist.', 32, $this->source); })()), "salesChannel", [], "any", false, false, false, 32), "html", null, true);
        echo "</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">New Products</h4>
                </div>
                <div class=\"card-body\">

                    ";
        // line 44
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 44, $this->source); })()), 'form_start');
        echo "
                    <div class=\"my-custom-class-for-errors\">
                        ";
        // line 46
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 46, $this->source); })()), 'errors');
        echo "
                    </div>
                    ";
        // line 48
        echo $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->searchAndRenderBlock(twig_get_attribute($this->env, $this->source, (isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 48, $this->source); })()), "csvfile", [], "any", false, false, false, 48), 'row');
        echo "
                    ";
        // line 49
        echo         $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderBlock((isset($context["form"]) || array_key_exists("form", $context) ? $context["form"] : (function () { throw new RuntimeError('Variable "form" does not exist.', 49, $this->source); })()), 'form_end');
        echo "

                </div>
            </div>
        </div>

        <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">
            <div class=\"row\">
                <div class=\"col-12 col-md\">
                    <img class=\"mb-2\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" alt=\"\"
                         width=\"24\" height=\"24\">
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
        return "printify/createProduct.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  189 => 49,  185 => 48,  180 => 46,  175 => 44,  158 => 32,  154 => 31,  149 => 28,  143 => 26,  141 => 25,  138 => 24,  132 => 22,  130 => 21,  127 => 20,  121 => 18,  118 => 17,  112 => 15,  110 => 14,  107 => 13,  98 => 10,  95 => 9,  91 => 8,  88 => 7,  78 => 6,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello ProjetController!{% endblock %}


{% block body %}

    {% for message in app.flashes('success') %}
        <div class=\"alert alert-success\">
            {{ message }}
        </div>
    {% endfor %}

    {% if(filename is defined) %}
        {{ dump(filename) }}
    {% endif %}
    {% if(originalfilename is defined) %}
        {{ dump(originalfilename) }}
    {% endif %}

    {% if(productlist is defined) %}
        {{ dump(productlist) }}
    {% endif %}

    {% if(createproduct is defined) %}
        {{ dump(createproduct) }}
    {% endif %}


    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Product from {{ shop.title }}</h1>
        <p class=\"lead\">{{ shop.platform }} on {{ shop.salesChannel }}</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">New Products</h4>
                </div>
                <div class=\"card-body\">

                    {{ form_start(form) }}
                    <div class=\"my-custom-class-for-errors\">
                        {{ form_errors(form) }}
                    </div>
                    {{ form_row(form.csvfile) }}
                    {{ form_end(form) }}

                </div>
            </div>
        </div>

        <footer class=\"pt-4 my-md-5 pt-md-5 border-top\">
            <div class=\"row\">
                <div class=\"col-12 col-md\">
                    <img class=\"mb-2\" src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" alt=\"\"
                         width=\"24\" height=\"24\">
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
", "printify/createProduct.html.twig", "C:\\wamp64\\www\\fenix\\templates\\printify\\createProduct.html.twig");
    }
}
