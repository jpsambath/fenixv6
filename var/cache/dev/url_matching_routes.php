<?php

/**
 * This file has been auto-generated
 * by the Symfony Routing Component.
 */

return [
    false, // $matchHost
    [ // $staticRoutes
        '/_profiler' => [[['_route' => '_profiler_home', '_controller' => 'web_profiler.controller.profiler::homeAction'], null, null, null, true, false, null]],
        '/_profiler/search' => [[['_route' => '_profiler_search', '_controller' => 'web_profiler.controller.profiler::searchAction'], null, null, null, false, false, null]],
        '/_profiler/search_bar' => [[['_route' => '_profiler_search_bar', '_controller' => 'web_profiler.controller.profiler::searchBarAction'], null, null, null, false, false, null]],
        '/_profiler/phpinfo' => [[['_route' => '_profiler_phpinfo', '_controller' => 'web_profiler.controller.profiler::phpinfoAction'], null, null, null, false, false, null]],
        '/_profiler/open' => [[['_route' => '_profiler_open_file', '_controller' => 'web_profiler.controller.profiler::openAction'], null, null, null, false, false, null]],
        '/admin/printify/synchronizeprintify' => [[['_route' => 'admin_synchronizeprintify', '_controller' => 'App\\Controller\\AdminController::index'], null, null, null, false, false, null]],
        '/' => [[['_route' => 'homepage', '_controller' => 'App\\Controller\\HomeController::homepage'], null, null, null, false, false, null]],
        '/printful' => [[['_route' => 'printful', '_controller' => 'App\\Controller\\PrintfulController::index'], null, null, null, false, false, null]],
        '/pod/printify/shop/shoplist' => [[['_route' => 'printify_shoplist', '_controller' => 'App\\Controller\\PrintifyController::printify_shoplist'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\UserController::register'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\UserController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\UserController::logout'], null, null, null, false, false, null]],
        '/printifyservice/retrieveshoplist' => [[['_route' => 'printifyservice_retrieveshoplist', '_controller' => 'App\\Service\\Printify::retrieveshoplist'], null, null, null, false, false, null]],
        '/printifyservice/retrieveproductlist' => [[['_route' => 'printifyservice_retrieveproductlist', '_controller' => 'App\\Service\\Printify::retrieveproductlist'], null, null, null, false, false, null]],
        '/printifyservice/retrieveblueprintlist' => [[['_route' => 'printifyservice_retrieveblueprintlist', '_controller' => 'App\\Service\\Printify::retrieveblueprintlist'], null, null, null, false, false, null]],
        '/printifyservice/retrieveproviderlist' => [[['_route' => 'printifyservice_retrieveproviderlist', '_controller' => 'App\\Service\\Printify::retrieveproviderlist'], null, null, null, false, false, null]],
        '/printifyservice/retrieveprovider' => [[['_route' => 'printifyservice_retrieveprovider', '_controller' => 'App\\Service\\Printify::retrieveprovider'], null, null, null, false, false, null]],
        '/printifyservice/retrieveblueprintprovider' => [[['_route' => 'printifyservice_retrieveblueprintprovider', '_controller' => 'App\\Service\\Printify::retrieveblueprintprovider'], null, null, null, false, false, null]],
    ],
    [ // $regexpList
        0 => '{^(?'
                .'|/_(?'
                    .'|error/(\\d+)(?:\\.([^/]++))?(*:38)'
                    .'|wdt/([^/]++)(*:57)'
                    .'|profiler/([^/]++)(?'
                        .'|/(?'
                            .'|search/results(*:102)'
                            .'|router(*:116)'
                            .'|exception(?'
                                .'|(*:136)'
                                .'|\\.css(*:149)'
                            .')'
                        .')'
                        .'|(*:159)'
                    .')'
                .')'
                .'|/p(?'
                    .'|od/printify/(?'
                        .'|product/(?'
                            .'|productlist/([^/]++)(*:220)'
                            .'|createproduct/([^/]++)(*:250)'
                            .'|uploadimage/([^/]++)(*:278)'
                        .')'
                        .'|blueprintsselector/([^/]++)(*:314)'
                        .'|templateexporter/([^/]++)(*:347)'
                    .')'
                    .'|rintifyservice/blueprintforshop/([^/]++)/([^/]++)(*:405)'
                .')'
            .')/?$}sDu',
    ],
    [ // $dynamicRoutes
        38 => [[['_route' => '_preview_error', '_controller' => 'error_controller::preview', '_format' => 'html'], ['code', '_format'], null, null, false, true, null]],
        57 => [[['_route' => '_wdt', '_controller' => 'web_profiler.controller.profiler::toolbarAction'], ['token'], null, null, false, true, null]],
        102 => [[['_route' => '_profiler_search_results', '_controller' => 'web_profiler.controller.profiler::searchResultsAction'], ['token'], null, null, false, false, null]],
        116 => [[['_route' => '_profiler_router', '_controller' => 'web_profiler.controller.router::panelAction'], ['token'], null, null, false, false, null]],
        136 => [[['_route' => '_profiler_exception', '_controller' => 'web_profiler.controller.exception_panel::body'], ['token'], null, null, false, false, null]],
        149 => [[['_route' => '_profiler_exception_css', '_controller' => 'web_profiler.controller.exception_panel::stylesheet'], ['token'], null, null, false, false, null]],
        159 => [[['_route' => '_profiler', '_controller' => 'web_profiler.controller.profiler::panelAction'], ['token'], null, null, false, true, null]],
        220 => [[['_route' => 'printify_productlist', '_controller' => 'App\\Controller\\PrintifyController::printify_productlist'], ['shopid'], null, null, false, true, null]],
        250 => [[['_route' => 'printify_createproduct', '_controller' => 'App\\Controller\\PrintifyController::printify_createproduct'], ['shopid'], null, null, false, true, null]],
        278 => [[['_route' => 'printify_uploadimage', '_controller' => 'App\\Controller\\PrintifyController::printify_uploadimage'], ['shopid'], null, null, false, true, null]],
        314 => [[['_route' => 'printify_blueprintsselector', '_controller' => 'App\\Controller\\PrintifyController::printify_blueprintsselector'], ['shopid'], null, null, false, true, null]],
        347 => [[['_route' => 'printify_templateexporter', '_controller' => 'App\\Controller\\PrintifyController::printify_templateexporter'], ['shopid'], null, null, false, true, null]],
        405 => [
            [['_route' => 'printifyservice_blueprintforshop', '_controller' => 'App\\Service\\Printify::blueprintforshop'], ['shopid', 'blueprintid'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
