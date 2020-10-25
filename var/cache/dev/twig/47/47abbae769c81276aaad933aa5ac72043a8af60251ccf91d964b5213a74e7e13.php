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

/* printify/shopList.html.twig */
class __TwigTemplate_043bb4f1fcef7d7ad164575330f6c486575ca243a0f9a43d14a1837139c2c0eb extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/shopList.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/shopList.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "printify/shopList.html.twig", 1);
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
        <h1 class=\"display-4\">Shops</h1>
        <p class=\"lead\">With API Key</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Shop List</h4>
                </div>
                <div class=\"card-body\">

                    <table class=\"table table-striped\">
                        <thead>
                        <tr>
                            <th>Shop Id</th>
                            <th>Shop Title</th>
                            <th>Shop Type</th>
                            <th>Platform</th>
                        </tr>
                        </thead>
                        <tbody>
                        ";
        // line 33
        if ((((isset($context["shoplist"]) || array_key_exists("shoplist", $context)) &&  !twig_test_empty((isset($context["shoplist"]) || array_key_exists("shoplist", $context) ? $context["shoplist"] : (function () { throw new RuntimeError('Variable "shoplist" does not exist.', 33, $this->source); })()))) &&  !(null === (isset($context["shoplist"]) || array_key_exists("shoplist", $context) ? $context["shoplist"] : (function () { throw new RuntimeError('Variable "shoplist" does not exist.', 33, $this->source); })())))) {
            // line 34
            echo "                            ";
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable((isset($context["shoplist"]) || array_key_exists("shoplist", $context) ? $context["shoplist"] : (function () { throw new RuntimeError('Variable "shoplist" does not exist.', 34, $this->source); })()));
            foreach ($context['_seq'] as $context["_key"] => $context["oneshop"]) {
                // line 35
                echo "                                <tr>
                                    <td>";
                // line 36
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["oneshop"], "id", [], "any", false, false, false, 36), "html", null, true);
                echo "</td>
                                    <td><a href=\"product/productlist/";
                // line 37
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["oneshop"], "id", [], "any", false, false, false, 37), "html", null, true);
                echo "\">";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["oneshop"], "title", [], "any", false, false, false, 37), "html", null, true);
                echo " </a></td>
                                    <td>";
                // line 38
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["oneshop"], "salesChannel", [], "any", false, false, false, 38), "html", null, true);
                echo "</td>
                                    <td>";
                // line 39
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["oneshop"], "platform", [], "any", false, false, false, 39), "html", null, true);
                echo "</td>
                                </tr>
                            ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['oneshop'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 42
            echo "                        ";
        } else {
            // line 43
            echo "                            No shop found!
                        ";
        }
        // line 45
        echo "
                        </tbody>
                    </table>

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
        return "printify/shopList.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  157 => 45,  153 => 43,  150 => 42,  141 => 39,  137 => 38,  131 => 37,  127 => 36,  124 => 35,  119 => 34,  117 => 33,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello ProjetController!{% endblock %}

{% block body %}



    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Shops</h1>
        <p class=\"lead\">With API Key</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Shop List</h4>
                </div>
                <div class=\"card-body\">

                    <table class=\"table table-striped\">
                        <thead>
                        <tr>
                            <th>Shop Id</th>
                            <th>Shop Title</th>
                            <th>Shop Type</th>
                            <th>Platform</th>
                        </tr>
                        </thead>
                        <tbody>
                        {% if shoplist is defined and shoplist is not empty and shoplist is not null %}
                            {% for oneshop in shoplist %}
                                <tr>
                                    <td>{{ oneshop.id }}</td>
                                    <td><a href=\"product/productlist/{{ oneshop.id }}\">{{ oneshop.title }} </a></td>
                                    <td>{{ oneshop.salesChannel }}</td>
                                    <td>{{ oneshop.platform }}</td>
                                </tr>
                            {% endfor %}
                        {% else %}
                            No shop found!
                        {% endif %}

                        </tbody>
                    </table>

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
", "printify/shopList.html.twig", "C:\\wamp64\\www\\fenix\\templates\\printify\\shopList.html.twig");
    }
}
