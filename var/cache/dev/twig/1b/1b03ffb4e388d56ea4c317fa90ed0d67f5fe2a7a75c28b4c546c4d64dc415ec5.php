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

/* printify/blueprintsSelector.html.twig */
class __TwigTemplate_e73b85cb73a2fea5720f575ec7d9ad7fd1030543b58cec26f9e23118b9041be5 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->blocks = [
            'title' => [$this, 'block_title'],
            'stylesheets' => [$this, 'block_stylesheets'],
            'body' => [$this, 'block_body'],
            'javascripts' => [$this, 'block_javascripts'],
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/blueprintsSelector.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "printify/blueprintsSelector.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "printify/blueprintsSelector.html.twig", 1);
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

    // line 4
    public function block_stylesheets($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "stylesheets"));

        // line 5
        echo "    ";
        $this->displayParentBlock("stylesheets", $context, $blocks);
        echo "
    ";
        // line 6
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackLinkTags("blueprintselector");
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    // line 10
    public function block_body($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "body"));

        // line 11
        echo "


    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Printify Blueprints</h1>
        <p class=\"lead\">Choose blueprints you want to save in your shop. <br>You will be able to create product from
            them.</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Blueprints</h4>
                </div>
                <div class=\"card-body\">
                    <input type=\"hidden\" id=\"selectedshop\" value=\"";
        // line 28
        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, (isset($context["selectedShop"]) || array_key_exists("selectedShop", $context) ? $context["selectedShop"] : (function () { throw new RuntimeError('Variable "selectedShop" does not exist.', 28, $this->source); })()), "id", [], "any", false, false, false, 28), "html", null, true);
        echo "\">
                    </input>
                    <table class=\"table table-bordered table-sm m-0\">
                        <thead class=\"\">
                        <tr>
                            <th>Save</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Provider</th>
                        </tr>
                        </thead>
                        <tbody>
                        ";
        // line 41
        $context['_parent'] = $context;
        $context['_seq'] = twig_ensure_traversable((isset($context["blueprintslist"]) || array_key_exists("blueprintslist", $context) ? $context["blueprintslist"] : (function () { throw new RuntimeError('Variable "blueprintslist" does not exist.', 41, $this->source); })()));
        foreach ($context['_seq'] as $context["_key"] => $context["blueprint"]) {
            // line 42
            echo "                            <tr>
                                <td>
                                    <label class=\"custom-control custom-checkbox\">
                                        ";
            // line 45
            if (twig_in_filter($context["blueprint"], twig_get_attribute($this->env, $this->source, (isset($context["selectedShop"]) || array_key_exists("selectedShop", $context) ? $context["selectedShop"] : (function () { throw new RuntimeError('Variable "selectedShop" does not exist.', 45, $this->source); })()), "blueprints", [], "any", false, false, false, 45))) {
                // line 46
                echo "                                            <input type=\"checkbox\"
                                                   data-url=\"";
                // line 47
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printifyservice_blueprintforshop", ["shopid" => twig_get_attribute($this->env, $this->source, (isset($context["selectedShop"]) || array_key_exists("selectedShop", $context) ? $context["selectedShop"] : (function () { throw new RuntimeError('Variable "selectedShop" does not exist.', 47, $this->source); })()), "id", [], "any", false, false, false, 47), "blueprintid" => twig_get_attribute($this->env, $this->source, $context["blueprint"], "id", [], "any", false, false, false, 47)]), "html", null, true);
                echo "\"
                                                   value=\"";
                // line 48
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["blueprint"], "id", [], "any", false, false, false, 48), "html", null, true);
                echo "\" class=\"custom-control-input\" checked>
                                        ";
            } else {
                // line 50
                echo "                                            <input type=\"checkbox\"
                                                   data-url=\"";
                // line 51
                echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printifyservice_blueprintforshop", ["shopid" => twig_get_attribute($this->env, $this->source, (isset($context["selectedShop"]) || array_key_exists("selectedShop", $context) ? $context["selectedShop"] : (function () { throw new RuntimeError('Variable "selectedShop" does not exist.', 51, $this->source); })()), "id", [], "any", false, false, false, 51), "blueprintid" => twig_get_attribute($this->env, $this->source, $context["blueprint"], "id", [], "any", false, false, false, 51)]), "html", null, true);
                echo "\"
                                                   value=\"";
                // line 52
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["blueprint"], "id", [], "any", false, false, false, 52), "html", null, true);
                echo "\" class=\"custom-control-input\">
                                        ";
            }
            // line 54
            echo "                                        <span class=\"custom-control-indicator\"></span>
                                    </label>
                                </td>
                                <td>";
            // line 57
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["blueprint"], "title", [], "any", false, false, false, 57), "html", null, true);
            echo "</td>
                                <td>";
            // line 58
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["blueprint"], "brand", [], "any", false, false, false, 58), "html", null, true);
            echo "</td>
                                <td>";
            // line 59
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["blueprint"], "model", [], "any", false, false, false, 59), "html", null, true);
            echo "</td>
                                <td>
                                    ";
            // line 61
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["blueprint"], "providers", [], "any", false, false, false, 61));
            foreach ($context['_seq'] as $context["_key"] => $context["provider"]) {
                // line 62
                echo "                                        ";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["provider"], "title", [], "any", false, false, false, 62), "html", null, true);
                echo " [";
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["provider"], "location", [], "any", false, false, false, 62), "country", [], "any", false, false, false, 62), "html", null, true);
                echo "],
                                    ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['provider'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 64
            echo "                                </td>
                            </tr>
                            <tr class=\"blueprintdetail\">
                                <td colspan=\"5\" class=\"blueprintdetail\">
                                    <table class=\"table table-bordered table-sm m-0\">
                                        <thead>
                                        <tr>
                                            <th>Provider</th>
                                            <th>Country</th>
                                            <th>Region</th>
                                            <th>City</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        ";
            // line 78
            $context['_parent'] = $context;
            $context['_seq'] = twig_ensure_traversable(twig_get_attribute($this->env, $this->source, $context["blueprint"], "providers", [], "any", false, false, false, 78));
            foreach ($context['_seq'] as $context["_key"] => $context["provider"]) {
                // line 79
                echo "                                        <tr>
                                            <td>";
                // line 80
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["provider"], "title", [], "any", false, false, false, 80), "html", null, true);
                echo "</td>
                                            <td>";
                // line 81
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["provider"], "location", [], "any", false, false, false, 81), "country", [], "any", false, false, false, 81), "html", null, true);
                echo "</td>
                                            <td>";
                // line 82
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["provider"], "location", [], "any", false, false, false, 82), "region", [], "any", false, false, false, 82), "html", null, true);
                echo "</td>
                                            <td>";
                // line 83
                echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, $context["provider"], "location", [], "any", false, false, false, 83), "city", [], "any", false, false, false, 83), "html", null, true);
                echo "</td>
                                        </tr>
                                        ";
            }
            $_parent = $context['_parent'];
            unset($context['_seq'], $context['_iterated'], $context['_key'], $context['provider'], $context['_parent'], $context['loop']);
            $context = array_intersect_key($context, $_parent) + $_parent;
            // line 86
            echo "                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                        ";
        }
        $_parent = $context['_parent'];
        unset($context['_seq'], $context['_iterated'], $context['_key'], $context['blueprint'], $context['_parent'], $context['loop']);
        $context = array_intersect_key($context, $_parent) + $_parent;
        // line 92
        echo "                        </tbody>
                    </table>

                    ";
        // line 95
        echo $this->extensions['Knp\Bundle\PaginatorBundle\Twig\Extension\PaginationExtension']->render($this->env, (isset($context["blueprintslist"]) || array_key_exists("blueprintslist", $context) ? $context["blueprintslist"] : (function () { throw new RuntimeError('Variable "blueprintslist" does not exist.', 95, $this->source); })()));
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

    // line 144
    public function block_javascripts($context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "block", "javascripts"));

        // line 145
        echo "    ";
        $this->displayParentBlock("javascripts", $context, $blocks);
        echo "
    ";
        // line 146
        echo $this->extensions['Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension']->renderWebpackScriptTags("blueprintselector");
        echo "
";
        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

    }

    public function getTemplateName()
    {
        return "printify/blueprintsSelector.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  352 => 146,  347 => 145,  337 => 144,  280 => 95,  275 => 92,  264 => 86,  255 => 83,  251 => 82,  247 => 81,  243 => 80,  240 => 79,  236 => 78,  220 => 64,  209 => 62,  205 => 61,  200 => 59,  196 => 58,  192 => 57,  187 => 54,  182 => 52,  178 => 51,  175 => 50,  170 => 48,  166 => 47,  163 => 46,  161 => 45,  156 => 42,  152 => 41,  136 => 28,  117 => 11,  107 => 10,  95 => 6,  90 => 5,  80 => 4,  61 => 3,  38 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello ProjetController!{% endblock %}
{% block stylesheets %}
    {{ parent() }}
    {{ encore_entry_link_tags('blueprintselector') }}
{% endblock %}


{% block body %}



    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Printify Blueprints</h1>
        <p class=\"lead\">Choose blueprints you want to save in your shop. <br>You will be able to create product from
            them.</p>
    </div>

    <div class=\"container-fluid\">
        <div class=\"card-deck mb-3 text-center\">

            <div class=\"card mb-8 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Blueprints</h4>
                </div>
                <div class=\"card-body\">
                    <input type=\"hidden\" id=\"selectedshop\" value=\"{{ selectedShop.id }}\">
                    </input>
                    <table class=\"table table-bordered table-sm m-0\">
                        <thead class=\"\">
                        <tr>
                            <th>Save</th>
                            <th>Title</th>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Provider</th>
                        </tr>
                        </thead>
                        <tbody>
                        {% for blueprint in blueprintslist %}
                            <tr>
                                <td>
                                    <label class=\"custom-control custom-checkbox\">
                                        {% if blueprint in selectedShop.blueprints %}
                                            <input type=\"checkbox\"
                                                   data-url=\"{{ path('printifyservice_blueprintforshop', {shopid: selectedShop.id, blueprintid: blueprint.id}) }}\"
                                                   value=\"{{ blueprint.id }}\" class=\"custom-control-input\" checked>
                                        {% else %}
                                            <input type=\"checkbox\"
                                                   data-url=\"{{ path('printifyservice_blueprintforshop', {shopid: selectedShop.id, blueprintid: blueprint.id}) }}\"
                                                   value=\"{{ blueprint.id }}\" class=\"custom-control-input\">
                                        {% endif %}
                                        <span class=\"custom-control-indicator\"></span>
                                    </label>
                                </td>
                                <td>{{ blueprint.title }}</td>
                                <td>{{ blueprint.brand }}</td>
                                <td>{{ blueprint.model }}</td>
                                <td>
                                    {% for provider in blueprint.providers %}
                                        {{ provider.title }} [{{ provider.location.country }}],
                                    {% endfor %}
                                </td>
                            </tr>
                            <tr class=\"blueprintdetail\">
                                <td colspan=\"5\" class=\"blueprintdetail\">
                                    <table class=\"table table-bordered table-sm m-0\">
                                        <thead>
                                        <tr>
                                            <th>Provider</th>
                                            <th>Country</th>
                                            <th>Region</th>
                                            <th>City</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {% for provider in blueprint.providers %}
                                        <tr>
                                            <td>{{ provider.title }}</td>
                                            <td>{{ provider.location.country }}</td>
                                            <td>{{ provider.location.region }}</td>
                                            <td>{{ provider.location.city }}</td>
                                        </tr>
                                        {% endfor %}
                                        </tbody>
                                    </table>

                                </td>
                            </tr>
                        {% endfor %}
                        </tbody>
                    </table>

                    {{ knp_pagination_render(blueprintslist) }}


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


{% block javascripts %}
    {{ parent() }}
    {{ encore_entry_script_tags('blueprintselector') }}
{% endblock %}", "printify/blueprintsSelector.html.twig", "C:\\wamp64\\www\\fenix\\templates\\printify\\blueprintsSelector.html.twig");
    }
}
