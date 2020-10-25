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

/* user/login.html.twig */
class __TwigTemplate_4ce980615800afbc7ca45f1d1bdcd60569eb7f5769a529945f8519781d4e07b5 extends Template
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
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/login.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "user/login.html.twig"));

        $this->parent = $this->loadTemplate("base.html.twig", "user/login.html.twig", 1);
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
        <h1 class=\"display-4\">Log in!</h1>
        <p class=\"lead\">Connectez vous! Ca se fait en douceur ;) !</p>
    </div>

    <div class=\"container\">

        ";
        // line 14
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 14, $this->source); })())) {
            // line 15
            echo "            <div class=\"alert alert-danger\">";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 15, $this->source); })()), "messageKey", [], "any", false, false, false, 15), twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 15, $this->source); })()), "messageData", [], "any", false, false, false, 15), "security"), "html", null, true);
            echo "</div>
        ";
        }
        // line 17
        echo "        ";
        if (twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 17, $this->source); })()), "user", [], "any", false, false, false, 17)) {
            // line 18
            echo "            <div class=\"mb-3\">
                You are logged in as ";
            // line 19
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 19, $this->source); })()), "user", [], "any", false, false, false, 19), "username", [], "any", false, false, false, 19), "html", null, true);
            echo ", <a href=\"";
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            echo "\">Logout</a>
            </div>
        ";
        }
        // line 22
        echo "
        <div class=\"card-deck mb-3 text-center\">
            <div class=\"card mb-6 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Connexion</h4>
                </div>
                <div class=\"card-body\">
                    <form method=\"post\">
                        <div class=\"form-group\">
                            <label for=\"inputUsername\">Username</label>
                            <input type=\"text\" value=\"";
        // line 32
        echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 32, $this->source); })()), "html", null, true);
        echo "\" name=\"username\" id=\"inputUsername\"
                                   class=\"form-control\" required autofocus>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"inputPassword\">Password</label>
                            <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" required>
                        </div>

                        <input type=\"hidden\" name=\"_csrf_token\"
                               value=\"";
        // line 41
        echo twig_escape_filter($this->env, $this->env->getRuntime('Symfony\Component\Form\FormRenderer')->renderCsrfToken("authenticate"), "html", null, true);
        echo "\"
                        >

                        <button type=\"submit\" class=\"btn btn-outline-primary\">Sign in</button>
                    </form>

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
        return "user/login.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  144 => 41,  132 => 32,  120 => 22,  112 => 19,  109 => 18,  106 => 17,  100 => 15,  98 => 14,  88 => 6,  78 => 5,  59 => 3,  36 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("{% extends 'base.html.twig' %}

{% block title %}Hello UserController!{% endblock %}

{% block body %}

    <div class=\"pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center\">
        <h1 class=\"display-4\">Log in!</h1>
        <p class=\"lead\">Connectez vous! Ca se fait en douceur ;) !</p>
    </div>

    <div class=\"container\">

        {% if error %}
            <div class=\"alert alert-danger\">{{ error.messageKey|trans(error.messageData, 'security') }}</div>
        {% endif %}
        {% if app.user %}
            <div class=\"mb-3\">
                You are logged in as {{ app.user.username }}, <a href=\"{{ path('app_logout') }}\">Logout</a>
            </div>
        {% endif %}

        <div class=\"card-deck mb-3 text-center\">
            <div class=\"card mb-6 box-shadow\">
                <div class=\"card-header\">
                    <h4 class=\"my-0 font-weight-normal\">Connexion</h4>
                </div>
                <div class=\"card-body\">
                    <form method=\"post\">
                        <div class=\"form-group\">
                            <label for=\"inputUsername\">Username</label>
                            <input type=\"text\" value=\"{{ last_username }}\" name=\"username\" id=\"inputUsername\"
                                   class=\"form-control\" required autofocus>
                        </div>
                        <div class=\"form-group\">
                            <label for=\"inputPassword\">Password</label>
                            <input type=\"password\" name=\"password\" id=\"inputPassword\" class=\"form-control\" required>
                        </div>

                        <input type=\"hidden\" name=\"_csrf_token\"
                               value=\"{{ csrf_token('authenticate') }}\"
                        >

                        <button type=\"submit\" class=\"btn btn-outline-primary\">Sign in</button>
                    </form>

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
", "user/login.html.twig", "C:\\wamp64\\www\\fenix\\templates\\user\\login.html.twig");
    }
}
