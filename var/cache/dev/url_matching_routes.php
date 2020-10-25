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
        '/admin/synchronizeprintify' => [[['_route' => 'admin_synchronizeprintify', '_controller' => 'App\\Controller\\AdminController::synchronizeprintify'], null, null, null, false, false, null]],
        '/admin/synchronizeprintful' => [[['_route' => 'admin_synchronizeprintful', '_controller' => 'App\\Controller\\AdminController::synchronizeprintful'], null, null, null, false, false, null]],
        '/design/cut' => [[['_route' => 'design_cut_index', '_controller' => 'App\\Controller\\Design\\CutController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/cut/new' => [[['_route' => 'design_cut_new', '_controller' => 'App\\Controller\\Design\\CutController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/design' => [[['_route' => 'design_design_index', '_controller' => 'App\\Controller\\Design\\DesignController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/design/new' => [[['_route' => 'design_design_new', '_controller' => 'App\\Controller\\Design\\DesignController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/font/fontlist' => [[['_route' => 'design_font_list', '_controller' => 'App\\Controller\\Design\\FontController::fontlist'], null, ['GET' => 0], null, false, false, null]],
        '/design/font' => [[['_route' => 'design_font_index', '_controller' => 'App\\Controller\\Design\\FontController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/font/new' => [[['_route' => 'design_font_new', '_controller' => 'App\\Controller\\Design\\FontController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/image' => [[['_route' => 'design_image_index', '_controller' => 'App\\Controller\\Design\\ImageController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/image/new' => [[['_route' => 'design_image_new', '_controller' => 'App\\Controller\\Design\\ImageController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/line/style' => [[['_route' => 'design_line_style_index', '_controller' => 'App\\Controller\\Design\\LineStyleController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/line/style/new' => [[['_route' => 'design_line_style_new', '_controller' => 'App\\Controller\\Design\\LineStyleController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/model/category' => [[['_route' => 'design_model_category_index', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/model/category/new' => [[['_route' => 'design_model_category_new', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/model' => [[['_route' => 'design_model_index', '_controller' => 'App\\Controller\\Design\\ModelController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/model/new' => [[['_route' => 'design_model_new', '_controller' => 'App\\Controller\\Design\\ModelController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/tag/taglist' => [[['_route' => 'design_tag_list', '_controller' => 'App\\Controller\\Design\\TagController::taglist'], null, ['GET' => 0], null, false, false, null]],
        '/design/tag' => [[['_route' => 'design_tag_index', '_controller' => 'App\\Controller\\Design\\TagController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/tag/new' => [[['_route' => 'design_tag_new', '_controller' => 'App\\Controller\\Design\\TagController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/template/category' => [[['_route' => 'design_template_category_index', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/template/category/new' => [[['_route' => 'design_template_category_new', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/template/templatelist' => [[['_route' => 'design_template_list', '_controller' => 'App\\Controller\\Design\\TemplateController::templatelist'], null, ['GET' => 0], null, false, false, null]],
        '/design/template' => [[['_route' => 'design_template_index', '_controller' => 'App\\Controller\\Design\\TemplateController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/template/new' => [[['_route' => 'design_template_new', '_controller' => 'App\\Controller\\Design\\TemplateController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/design/text' => [[['_route' => 'design_text_index', '_controller' => 'App\\Controller\\Design\\TextController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/text/new' => [[['_route' => 'design_text_new', '_controller' => 'App\\Controller\\Design\\TextController::new'], null, ['GET' => 0, 'POST' => 1], null, false, false, null]],
        '/' => [[['_route' => 'homepage', '_controller' => 'App\\Controller\\HomeController::homepage'], null, null, null, false, false, null]],
        '/pod/printful/printful' => [[['_route' => 'printful_printful', '_controller' => 'App\\Controller\\PrintfulController::index'], null, null, null, false, false, null]],
        '/pod/printify/shop/shoplist' => [[['_route' => 'printify_shoplist', '_controller' => 'App\\Controller\\PrintifyController::printify_shoplist'], null, null, null, false, false, null]],
        '/register' => [[['_route' => 'register', '_controller' => 'App\\Controller\\UserController::register'], null, null, null, false, false, null]],
        '/edit' => [[['_route' => 'edit', '_controller' => 'App\\Controller\\UserController::edit'], null, null, null, false, false, null]],
        '/login' => [[['_route' => 'app_login', '_controller' => 'App\\Controller\\UserController::login'], null, null, null, false, false, null]],
        '/logout' => [[['_route' => 'app_logout', '_controller' => 'App\\Controller\\UserController::logout'], null, null, null, false, false, null]],
        '/printfulservice/retrieveproductlist' => [[['_route' => 'printfulservice_retrieveproductlist', '_controller' => 'App\\Service\\Printful::retrieveproductlist'], null, null, null, false, false, null]],
        '/printfulservice/retrievevariantlist' => [[['_route' => 'printfulservice_retrievevariantlist', '_controller' => 'App\\Service\\Printful::retrievevariantlist'], null, null, null, false, false, null]],
        '/printfulservice/retrieveshoplist' => [[['_route' => 'printfulservice_retrieveshoplist', '_controller' => 'App\\Service\\Printful::retrieveshoplist'], null, null, null, false, false, null]],
        '/printifyservice/retrieveshoplist' => [[['_route' => 'printifyservice_retrieveshoplist', '_controller' => 'App\\Service\\Printify::retrieveshoplist'], null, null, null, false, false, null]],
        '/printifyservice/synchronizeproductlist' => [[['_route' => 'printifyservice_synchronizeproductlist', '_controller' => 'App\\Service\\Printify::synchronizeproductlist'], null, null, null, false, false, null]],
        '/printifyservice/deleteproduct' => [[['_route' => 'printifyservice_deleteproduct', '_controller' => 'App\\Service\\Printify::deleteproduct'], null, null, null, false, false, null]],
        '/printifyservice/publishproduct' => [[['_route' => 'printifyservice_publishproduct', '_controller' => 'App\\Service\\Printify::publishproduct'], null, null, null, false, false, null]],
        '/printifyservice/unpublishproduct' => [[['_route' => 'printifyservice_unpublishproduct', '_controller' => 'App\\Service\\Printify::unpublishproduct'], null, null, null, false, false, null]],
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
                .'|/design/(?'
                    .'|cut/(?'
                        .'|([^/]++)(?'
                            .'|(*:198)'
                            .'|/edit(*:211)'
                        .')'
                        .'|delete/([^/]++)(*:235)'
                    .')'
                    .'|design/(?'
                        .'|([^/]++)(?'
                            .'|(*:265)'
                            .'|/edit(*:278)'
                        .')'
                        .'|delete/([^/]++)(*:302)'
                        .'|ajax(?'
                            .'|addtag(*:323)'
                            .'|unlinktag(?'
                                .'|/([^/]++)/([^/]++)(*:361)'
                                .'|fromselection/([^/]++)(*:391)'
                            .')'
                        .')'
                    .')'
                    .'|font/([^/]++)(?'
                        .'|(*:418)'
                        .'|/edit(*:431)'
                        .'|(*:439)'
                    .')'
                    .'|image/(?'
                        .'|([^/]++)(?'
                            .'|(*:468)'
                            .'|/edit(*:481)'
                        .')'
                        .'|delete/([^/]++)(*:505)'
                    .')'
                    .'|line/style/([^/]++)(?'
                        .'|(*:536)'
                        .'|/edit(*:549)'
                        .'|(*:557)'
                    .')'
                    .'|model/(?'
                        .'|category/([^/]++)(?'
                            .'|(*:595)'
                            .'|/edit(*:608)'
                            .'|(*:616)'
                        .')'
                        .'|([^/]++)(?'
                            .'|(*:636)'
                            .'|/edit(*:649)'
                            .'|(*:657)'
                        .')'
                    .')'
                    .'|t(?'
                        .'|ag/([^/]++)(?'
                            .'|(*:685)'
                            .'|/edit(*:698)'
                            .'|(*:706)'
                        .')'
                        .'|e(?'
                            .'|mplate/(?'
                                .'|category/([^/]++)(?'
                                    .'|(*:749)'
                                    .'|/edit(*:762)'
                                    .'|(*:770)'
                                .')'
                                .'|([^/]++)(?'
                                    .'|(*:790)'
                                    .'|/edit(*:803)'
                                .')'
                                .'|delete/([^/]++)(*:827)'
                            .')'
                            .'|xt/(?'
                                .'|([^/]++)(?'
                                    .'|(*:853)'
                                    .'|/edit(*:866)'
                                .')'
                                .'|delete/([^/]++)(*:890)'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/p(?'
                    .'|od/printify/(?'
                        .'|product/(?'
                            .'|synchronizeproductlist/([^/]++)(*:964)'
                            .'|productlist/([^/]++)/([^/]++)(*:1001)'
                            .'|createproduct/([^/]++)(*:1032)'
                            .'|uploadimage/([^/]++)(*:1061)'
                        .')'
                        .'|blueprintsselector/([^/]++)(*:1098)'
                        .'|templateexporter/([^/]++)(*:1132)'
                    .')'
                    .'|rintifyservice/blueprintforshop/([^/]++)/([^/]++)(*:1191)'
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
        198 => [[['_route' => 'design_cut_show', '_controller' => 'App\\Controller\\Design\\CutController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        211 => [[['_route' => 'design_cut_edit', '_controller' => 'App\\Controller\\Design\\CutController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        235 => [[['_route' => 'design_cut_delete', '_controller' => 'App\\Controller\\Design\\CutController::delete'], ['id'], null, null, false, true, null]],
        265 => [[['_route' => 'design_design_show', '_controller' => 'App\\Controller\\Design\\DesignController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        278 => [[['_route' => 'design_design_edit', '_controller' => 'App\\Controller\\Design\\DesignController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        302 => [[['_route' => 'design_design_delete', '_controller' => 'App\\Controller\\Design\\DesignController::delete'], ['id'], null, null, false, true, null]],
        323 => [[['_route' => 'design_design_ajaxaddtag', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_add_tags'], [], null, null, false, false, null]],
        361 => [[['_route' => 'design_design_ajaxunlinktag', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_tag'], ['designid', 'tagid'], null, null, false, true, null]],
        391 => [[['_route' => 'design_design_ajaxunlinktagfromselection', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_tag_from_selection'], ['tagid'], null, null, false, true, null]],
        418 => [[['_route' => 'design_font_show', '_controller' => 'App\\Controller\\Design\\FontController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        431 => [[['_route' => 'design_font_edit', '_controller' => 'App\\Controller\\Design\\FontController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        439 => [[['_route' => 'design_font_delete', '_controller' => 'App\\Controller\\Design\\FontController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        468 => [[['_route' => 'design_image_show', '_controller' => 'App\\Controller\\Design\\ImageController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        481 => [[['_route' => 'design_image_edit', '_controller' => 'App\\Controller\\Design\\ImageController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        505 => [[['_route' => 'design_image_delete', '_controller' => 'App\\Controller\\Design\\ImageController::delete'], ['id'], null, null, false, true, null]],
        536 => [[['_route' => 'design_line_style_show', '_controller' => 'App\\Controller\\Design\\LineStyleController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        549 => [[['_route' => 'design_line_style_edit', '_controller' => 'App\\Controller\\Design\\LineStyleController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        557 => [[['_route' => 'design_line_style_delete', '_controller' => 'App\\Controller\\Design\\LineStyleController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        595 => [[['_route' => 'design_model_category_show', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        608 => [[['_route' => 'design_model_category_edit', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        616 => [[['_route' => 'design_model_category_delete', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        636 => [[['_route' => 'design_model_show', '_controller' => 'App\\Controller\\Design\\ModelController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        649 => [[['_route' => 'design_model_edit', '_controller' => 'App\\Controller\\Design\\ModelController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        657 => [[['_route' => 'design_model_delete', '_controller' => 'App\\Controller\\Design\\ModelController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        685 => [[['_route' => 'design_tag_show', '_controller' => 'App\\Controller\\Design\\TagController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        698 => [[['_route' => 'design_tag_edit', '_controller' => 'App\\Controller\\Design\\TagController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        706 => [[['_route' => 'design_tag_delete', '_controller' => 'App\\Controller\\Design\\TagController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        749 => [[['_route' => 'design_template_category_show', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        762 => [[['_route' => 'design_template_category_edit', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        770 => [[['_route' => 'design_template_category_delete', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        790 => [[['_route' => 'design_template_show', '_controller' => 'App\\Controller\\Design\\TemplateController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        803 => [[['_route' => 'design_template_edit', '_controller' => 'App\\Controller\\Design\\TemplateController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        827 => [[['_route' => 'design_template_delete', '_controller' => 'App\\Controller\\Design\\TemplateController::delete'], ['id'], null, null, false, true, null]],
        853 => [[['_route' => 'design_text_show', '_controller' => 'App\\Controller\\Design\\TextController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        866 => [[['_route' => 'design_text_edit', '_controller' => 'App\\Controller\\Design\\TextController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        890 => [[['_route' => 'design_text_delete', '_controller' => 'App\\Controller\\Design\\TextController::delete'], ['id'], null, null, false, true, null]],
        964 => [[['_route' => 'printify_synchronizeproductlist', '_controller' => 'App\\Controller\\PrintifyController::printify_synchronizeproductlist'], ['shopid'], null, null, false, true, null]],
        1001 => [[['_route' => 'printify_productlist', '_controller' => 'App\\Controller\\PrintifyController::printify_productlist'], ['shopid', 'action'], null, null, false, true, null]],
        1032 => [[['_route' => 'printify_createproduct', '_controller' => 'App\\Controller\\PrintifyController::printify_createproduct'], ['shopid'], null, null, false, true, null]],
        1061 => [[['_route' => 'printify_uploadimage', '_controller' => 'App\\Controller\\PrintifyController::printify_uploadimage'], ['shopid'], null, null, false, true, null]],
        1098 => [[['_route' => 'printify_blueprintsselector', '_controller' => 'App\\Controller\\PrintifyController::printify_blueprintsselector'], ['shopid'], null, null, false, true, null]],
        1132 => [[['_route' => 'printify_templateexporter', '_controller' => 'App\\Controller\\PrintifyController::printify_templateexporter'], ['shopid'], null, null, false, true, null]],
        1191 => [
            [['_route' => 'printifyservice_blueprintforshop', '_controller' => 'App\\Service\\Printify::blueprintforshop'], ['shopid', 'blueprintid'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
