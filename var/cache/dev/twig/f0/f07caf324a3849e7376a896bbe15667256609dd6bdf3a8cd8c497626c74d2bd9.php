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

/* navbar.html.twig */
class __TwigTemplate_86c908e1532e91d0f4980f46c21cc59c3463934bd06bf4f2a957b9cef407ccc5 extends Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "navbar.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "navbar.html.twig"));

        // line 1
        echo "<div id=\"menu_area\" class=\"menu-area\">
    <div class=\"container-fluid\">
        <div class=\"row\">
            <nav class=\"navbar navbar-light navbar-expand-lg mainmenu\">
                <a class=\"navbar-brand font-weight-bold\" href=\"";
        // line 5
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("homepage");
        echo "\">FENIX</a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"
                        data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"
                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>
                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                    <ul class=\"navbar-nav mr-auto\">
                        ";
        // line 13
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) {
            // line 14
            echo "
                            ";
            // line 16
            echo "
                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\"
                                   aria-haspopup=\"true\" aria-expanded=\"false\">POD Platform</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    ";
            // line 22
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_PRINTIFY")) {
                // line 23
                echo "                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Printify</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                ";
                // line 27
                if ((isset($context["printify_shoplist"]) || array_key_exists("printify_shoplist", $context))) {
                    // line 28
                    echo "                                                    ";
                    $context['_parent'] = $context;
                    $context['_seq'] = twig_ensure_traversable((isset($context["printify_shoplist"]) || array_key_exists("printify_shoplist", $context) ? $context["printify_shoplist"] : (function () { throw new RuntimeError('Variable "printify_shoplist" does not exist.', 28, $this->source); })()));
                    foreach ($context['_seq'] as $context["_key"] => $context["shop"]) {
                        // line 29
                        echo "                                                        <li class=\"dropdown\">
                                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\"
                                                               role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                                               aria-expanded=\"false\">";
                        // line 32
                        echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, $context["shop"], "title", [], "any", false, false, false, 32), "html", null, true);
                        echo "</a>
                                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                                <li>
                                                                    <a href=\"";
                        // line 35
                        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printify_blueprintsselector", ["shopid" => twig_get_attribute($this->env, $this->source, $context["shop"], "id", [], "any", false, false, false, 35)]), "html", null, true);
                        echo "\">Blueprints
                                                                        Selector</a></li>
                                                                <li>
                                                                    <a href=\"";
                        // line 38
                        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printify_templateexporter", ["shopid" => twig_get_attribute($this->env, $this->source, $context["shop"], "id", [], "any", false, false, false, 38)]), "html", null, true);
                        echo "\">Template Exporter</a></li>
                                                                <li>
                                                                    <a href=\"";
                        // line 40
                        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printify_productlist", ["shopid" => twig_get_attribute($this->env, $this->source, $context["shop"], "id", [], "any", false, false, false, 40)]), "html", null, true);
                        echo "\">Product
                                                                        List</a></li>
                                                                <li>
                                                                    <a href=\"";
                        // line 43
                        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printify_createproduct", ["shopid" => twig_get_attribute($this->env, $this->source, $context["shop"], "id", [], "any", false, false, false, 43)]), "html", null, true);
                        echo "\">Create
                                                                        Products</a></li>
                                                                <li>
                                                                    <a href=\"";
                        // line 46
                        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("printify_uploadimage", ["shopid" => twig_get_attribute($this->env, $this->source, $context["shop"], "id", [], "any", false, false, false, 46)]), "html", null, true);
                        echo "\">Upload
                                                                        Images</a></li>
                                                            </ul>
                                                        </li>
                                                    ";
                    }
                    $_parent = $context['_parent'];
                    unset($context['_seq'], $context['_iterated'], $context['_key'], $context['shop'], $context['_parent'], $context['loop']);
                    $context = array_intersect_key($context, $_parent) + $_parent;
                    // line 51
                    echo "                                                ";
                }
                // line 52
                echo "
                                            </ul>
                                        </li>
                                    ";
            }
            // line 56
            echo "
                                    ";
            // line 57
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_PRINTFUL")) {
                // line 58
                echo "                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">Printful</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products Light</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Upload Images</a></li>
                                            </ul>
                                        </li>
                                    ";
            }
            // line 69
            echo "                                </ul>
                            </li>
                            ";
            // line 72
            echo "
                            ";
            // line 74
            echo "
                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\"
                                   aria-haspopup=\"true\" aria-expanded=\"false\">Shop Platform</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    ";
            // line 80
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_SHOPIFY")) {
                // line 81
                echo "                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">Shopify</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products List</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Blablabla</a></li>
                                            </ul>
                                        </li>
                                    ";
            }
            // line 92
            echo "
                                    ";
            // line 93
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_WOOCOMMERCE")) {
                // line 94
                echo "                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">WooCommerce</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products Light</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Blablabla</a></li>
                                            </ul>
                                        </li>
                                    ";
            }
            // line 105
            echo "                                </ul>
                            </li>

                            ";
            // line 109
            echo "

                            ";
            // line 111
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_SPINNING")) {
                // line 112
                echo "
                                <li><a href=\"#\">Spinning Tool</a></li>

                            ";
            }
            // line 116
            echo "
                        ";
        }
        // line 118
        echo "                    </ul>
                    ";
        // line 119
        if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) {
            // line 120
            echo "                        <ul class=\"nav navbar-nav navbar-right mr-5\">
                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                   aria-expanded=\"false\">";
            // line 124
            echo twig_escape_filter($this->env, twig_get_attribute($this->env, $this->source, twig_get_attribute($this->env, $this->source, (isset($context["app"]) || array_key_exists("app", $context) ? $context["app"] : (function () { throw new RuntimeError('Variable "app" does not exist.', 124, $this->source); })()), "user", [], "any", false, false, false, 124), "username", [], "any", false, false, false, 124), "html", null, true);
            echo "</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    <li><a href=\"#\">My Profile</a></li>
                                    <li><a href=\"#\">Inbox</a></li>
                                    ";
            // line 128
            if ($this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("ROLE_ADMIN")) {
                // line 129
                echo "                                        <li class=\"dropdown-divider\"></li>
                                        <li><a href=\"";
                // line 130
                echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("admin_synchronizeprintify");
                echo "\">Synchronize Printify</a>
                                        </li>
                                    ";
            }
            // line 133
            echo "                                    <li class=\"dropdown-divider\"></li>
                                    <li><a href=\"";
            // line 134
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_logout");
            echo "\">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    ";
        }
        // line 139
        echo "

                    ";
        // line 141
        if ( !$this->extensions['Symfony\Bridge\Twig\Extension\SecurityExtension']->isGranted("IS_AUTHENTICATED_FULLY")) {
            // line 142
            echo "                        <ul class=\"nav navbar-nav navbar-right\">
                            <li class=\"nav-item\">
                                <a href=\"";
            // line 144
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("register");
            echo "\" class=\"nav-link\">S'inscrire</a>
                            </li>
                            <li class=\"nav-item\">
                                <a href=\"";
            // line 147
            echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("app_login");
            echo "\" class=\"nav-link\">Se connecter</a>
                            </li>
                        </ul>
                    ";
        }
        // line 151
        echo "
                </div>
            </nav>
        </div>
    </div>
</div>";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "navbar.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  292 => 151,  285 => 147,  279 => 144,  275 => 142,  273 => 141,  269 => 139,  261 => 134,  258 => 133,  252 => 130,  249 => 129,  247 => 128,  240 => 124,  234 => 120,  232 => 119,  229 => 118,  225 => 116,  219 => 112,  217 => 111,  213 => 109,  208 => 105,  195 => 94,  193 => 93,  190 => 92,  177 => 81,  175 => 80,  167 => 74,  164 => 72,  160 => 69,  147 => 58,  145 => 57,  142 => 56,  136 => 52,  133 => 51,  122 => 46,  116 => 43,  110 => 40,  105 => 38,  99 => 35,  93 => 32,  88 => 29,  83 => 28,  81 => 27,  75 => 23,  73 => 22,  65 => 16,  62 => 14,  60 => 13,  49 => 5,  43 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("<div id=\"menu_area\" class=\"menu-area\">
    <div class=\"container-fluid\">
        <div class=\"row\">
            <nav class=\"navbar navbar-light navbar-expand-lg mainmenu\">
                <a class=\"navbar-brand font-weight-bold\" href=\"{{ path('homepage') }}\">FENIX</a>
                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\"
                        data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"
                        aria-expanded=\"false\" aria-label=\"Toggle navigation\">
                    <span class=\"navbar-toggler-icon\"></span>
                </button>
                <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">
                    <ul class=\"navbar-nav mr-auto\">
                        {% if is_granted('IS_AUTHENTICATED_FULLY') %}

                            {#                            {% if is_granted(['ROLE_PRINTIFY','ROLE_PRINTFUL']) %} #}

                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\"
                                   aria-haspopup=\"true\" aria-expanded=\"false\">POD Platform</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    {% if is_granted('ROLE_PRINTIFY') %}
                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Printify</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                {% if printify_shoplist is defined %}
                                                    {% for shop in printify_shoplist %}
                                                        <li class=\"dropdown\">
                                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\"
                                                               role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                                               aria-expanded=\"false\">{{ shop.title }}</a>
                                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                                <li>
                                                                    <a href=\"{{ path('printify_blueprintsselector', {shopid: shop.id}) }}\">Blueprints
                                                                        Selector</a></li>
                                                                <li>
                                                                    <a href=\"{{ path('printify_templateexporter', {shopid: shop.id}) }}\">Template Exporter</a></li>
                                                                <li>
                                                                    <a href=\"{{ path('printify_productlist', {shopid: shop.id}) }}\">Product
                                                                        List</a></li>
                                                                <li>
                                                                    <a href=\"{{ path('printify_createproduct', {shopid: shop.id}) }}\">Create
                                                                        Products</a></li>
                                                                <li>
                                                                    <a href=\"{{ path('printify_uploadimage', {shopid: shop.id}) }}\">Upload
                                                                        Images</a></li>
                                                            </ul>
                                                        </li>
                                                    {% endfor %}
                                                {% endif %}

                                            </ul>
                                        </li>
                                    {% endif %}

                                    {% if is_granted('ROLE_PRINTFUL') %}
                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">Printful</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products Light</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Upload Images</a></li>
                                            </ul>
                                        </li>
                                    {% endif %}
                                </ul>
                            </li>
                            {#                        {% endif %}#}

                            {#                        {% if is_granted(['ROLE_SHOPIFY','ROLE_WOOCOMMERCE']) %}#}

                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\"
                                   aria-haspopup=\"true\" aria-expanded=\"false\">Shop Platform</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    {% if is_granted('ROLE_SHOPIFY') %}
                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">Shopify</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products List</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Blablabla</a></li>
                                            </ul>
                                        </li>
                                    {% endif %}

                                    {% if is_granted('ROLE_WOOCOMMERCE') %}
                                        <li class=\"dropdown\">
                                            <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                               data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                               aria-expanded=\"false\">WooCommerce</a>
                                            <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                                <li><a href=\"#\">Products Light</a></li>
                                                <li><a href=\"#\">Create Products</a></li>
                                                <li><a href=\"#\">Blablabla</a></li>
                                            </ul>
                                        </li>
                                    {% endif %}
                                </ul>
                            </li>

                            {#                        {% endif %}#}


                            {% if is_granted('ROLE_SPINNING') %}

                                <li><a href=\"#\">Spinning Tool</a></li>

                            {% endif %}

                        {% endif %}
                    </ul>
                    {% if is_granted('IS_AUTHENTICATED_FULLY') %}
                        <ul class=\"nav navbar-nav navbar-right mr-5\">
                            <li class=\"dropdown\">
                                <a class=\"dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\"
                                   data-toggle=\"dropdown\" aria-haspopup=\"true\"
                                   aria-expanded=\"false\">{{ app.user.username }}</a>
                                <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">
                                    <li><a href=\"#\">My Profile</a></li>
                                    <li><a href=\"#\">Inbox</a></li>
                                    {% if is_granted('ROLE_ADMIN') %}
                                        <li class=\"dropdown-divider\"></li>
                                        <li><a href=\"{{ path('admin_synchronizeprintify') }}\">Synchronize Printify</a>
                                        </li>
                                    {% endif %}
                                    <li class=\"dropdown-divider\"></li>
                                    <li><a href=\"{{ path('app_logout') }}\">Logout</a></li>
                                </ul>
                            </li>
                        </ul>
                    {% endif %}


                    {% if not is_granted('IS_AUTHENTICATED_FULLY') %}
                        <ul class=\"nav navbar-nav navbar-right\">
                            <li class=\"nav-item\">
                                <a href=\"{{ path('register') }}\" class=\"nav-link\">S'inscrire</a>
                            </li>
                            <li class=\"nav-item\">
                                <a href=\"{{ path('app_login') }}\" class=\"nav-link\">Se connecter</a>
                            </li>
                        </ul>
                    {% endif %}

                </div>
            </nav>
        </div>
    </div>
</div>", "navbar.html.twig", "C:\\wamp64\\www\\fenix\\templates\\navbar.html.twig");
    }
}
