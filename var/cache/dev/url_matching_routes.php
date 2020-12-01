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
        '/design/design/linktagtodesign' => [[['_route' => 'design_design_linktagtodesign', '_controller' => 'App\\Controller\\Design\\DesignController::linktagtodesign'], null, null, null, false, false, null]],
        '/design/design/savedesign' => [[['_route' => 'design_design_savedesign', '_controller' => 'App\\Controller\\Design\\DesignController::savedesign'], null, null, null, false, false, null]],
        '/design/design' => [[['_route' => 'design_design_index', '_controller' => 'App\\Controller\\Design\\DesignController::index'], null, ['GET' => 0], null, true, false, null]],
        '/design/design/gettextandimage' => [[['_route' => 'design_design_gettextandimage', '_controller' => 'App\\Controller\\Design\\DesignController::getTextAndImage'], null, ['GET' => 0], null, false, false, null]],
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
        '/design/text/smartcuttext' => [[['_route' => 'design_text_smartcuttext', '_controller' => 'App\\Controller\\Design\\TextController::smartcuttext'], null, null, null, false, false, null]],
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
                        .'|savecut/([^/]++)(*:203)'
                        .'|([^/]++)(?'
                            .'|(*:222)'
                            .'|/edit(*:235)'
                        .')'
                        .'|delete/([^/]++)(*:259)'
                    .')'
                    .'|design/(?'
                        .'|([^/]++)(?'
                            .'|(*:289)'
                            .'|/edit(*:302)'
                        .')'
                        .'|delete/([^/]++)(*:326)'
                        .'|ajax(?'
                            .'|add(?'
                                .'|t(?'
                                    .'|ag(*:353)'
                                    .'|emplate(*:368)'
                                .')'
                                .'|model(*:382)'
                            .')'
                            .'|unlink(?'
                                .'|t(?'
                                    .'|ag(?'
                                        .'|/([^/]++)/([^/]++)(*:427)'
                                        .'|fromselection/([^/]++)(*:457)'
                                    .')'
                                    .'|emplate(?'
                                        .'|/([^/]++)/([^/]++)(*:494)'
                                        .'|fromselection/([^/]++)(*:524)'
                                    .')'
                                .')'
                                .'|model(?'
                                    .'|/([^/]++)/([^/]++)(*:560)'
                                    .'|fromselection/([^/]++)(*:590)'
                                .')'
                            .')'
                        .')'
                    .')'
                    .'|font/([^/]++)(?'
                        .'|(*:618)'
                        .'|/edit(*:631)'
                        .'|(*:639)'
                    .')'
                    .'|image/(?'
                        .'|([^/]++)(?'
                            .'|(*:668)'
                            .'|/edit(*:681)'
                        .')'
                        .'|delete/([^/]++)(*:705)'
                    .')'
                    .'|line/style/([^/]++)(?'
                        .'|(*:736)'
                        .'|/edit(*:749)'
                        .'|(*:757)'
                    .')'
                    .'|model/(?'
                        .'|category/([^/]++)(?'
                            .'|(*:795)'
                            .'|/edit(*:808)'
                            .'|(*:816)'
                        .')'
                        .'|([^/]++)(?'
                            .'|(*:836)'
                            .'|/edit(*:849)'
                            .'|(*:857)'
                        .')'
                    .')'
                    .'|t(?'
                        .'|ag/([^/]++)(?'
                            .'|(*:885)'
                            .'|/edit(*:898)'
                            .'|(*:906)'
                        .')'
                        .'|e(?'
                            .'|mplate/(?'
                                .'|category/([^/]++)(?'
                                    .'|(*:949)'
                                    .'|/edit(*:962)'
                                    .'|(*:970)'
                                .')'
                                .'|([^/]++)(?'
                                    .'|(*:990)'
                                    .'|/edit(*:1003)'
                                .')'
                                .'|delete/([^/]++)(*:1028)'
                            .')'
                            .'|xt/(?'
                                .'|([^/]++)(?'
                                    .'|(*:1055)'
                                    .'|/edit(*:1069)'
                                .')'
                                .'|delete/([^/]++)(*:1094)'
                            .')'
                        .')'
                    .')'
                .')'
                .'|/p(?'
                    .'|od/printify/(?'
                        .'|product/(?'
                            .'|synchronizeproductlist/([^/]++)(*:1169)'
                            .'|productlist/([^/]++)/([^/]++)(*:1207)'
                            .'|createproduct/([^/]++)(*:1238)'
                            .'|uploadimage/([^/]++)(*:1267)'
                        .')'
                        .'|blueprintsselector/([^/]++)(*:1304)'
                        .'|templateexporter/([^/]++)(*:1338)'
                    .')'
                    .'|rintifyservice/blueprintforshop/([^/]++)/([^/]++)(*:1397)'
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
        203 => [[['_route' => 'design_cut_savecut', '_controller' => 'App\\Controller\\Design\\CutController::savecut'], ['textid'], null, null, false, true, null]],
        222 => [[['_route' => 'design_cut_show', '_controller' => 'App\\Controller\\Design\\CutController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        235 => [[['_route' => 'design_cut_edit', '_controller' => 'App\\Controller\\Design\\CutController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        259 => [[['_route' => 'design_cut_delete', '_controller' => 'App\\Controller\\Design\\CutController::delete'], ['id'], null, null, false, true, null]],
        289 => [[['_route' => 'design_design_show', '_controller' => 'App\\Controller\\Design\\DesignController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        302 => [[['_route' => 'design_design_edit', '_controller' => 'App\\Controller\\Design\\DesignController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        326 => [[['_route' => 'design_design_delete', '_controller' => 'App\\Controller\\Design\\DesignController::delete'], ['id'], null, null, false, true, null]],
        353 => [[['_route' => 'design_design_ajaxaddtag', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_add_tags'], [], null, null, false, false, null]],
        368 => [[['_route' => 'design_design_ajaxaddtemplate', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_add_templates'], [], null, null, false, false, null]],
        382 => [[['_route' => 'design_design_ajaxaddmodel', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_add_models'], [], null, null, false, false, null]],
        427 => [[['_route' => 'design_design_ajaxunlinktag', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_tag'], ['designid', 'tagid'], null, null, false, true, null]],
        457 => [[['_route' => 'design_design_ajaxunlinktagfromselection', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_tag_from_selection'], ['tagid'], null, null, false, true, null]],
        494 => [[['_route' => 'design_design_ajaxunlinktemplate', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_template'], ['designid', 'templateid'], null, null, false, true, null]],
        524 => [[['_route' => 'design_design_ajaxunlinktemplatefromselection', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_template_from_selection'], ['templateid'], null, null, false, true, null]],
        560 => [[['_route' => 'design_design_ajaxunlinkmodel', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_model'], ['designid', 'modelid'], null, null, false, true, null]],
        590 => [[['_route' => 'design_design_ajaxunlinkmodelfromselection', '_controller' => 'App\\Controller\\Design\\DesignController::ajax_unlink_model_from_selection'], ['modelid'], null, null, false, true, null]],
        618 => [[['_route' => 'design_font_show', '_controller' => 'App\\Controller\\Design\\FontController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        631 => [[['_route' => 'design_font_edit', '_controller' => 'App\\Controller\\Design\\FontController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        639 => [[['_route' => 'design_font_delete', '_controller' => 'App\\Controller\\Design\\FontController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        668 => [[['_route' => 'design_image_show', '_controller' => 'App\\Controller\\Design\\ImageController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        681 => [[['_route' => 'design_image_edit', '_controller' => 'App\\Controller\\Design\\ImageController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        705 => [[['_route' => 'design_image_delete', '_controller' => 'App\\Controller\\Design\\ImageController::delete'], ['id'], null, null, false, true, null]],
        736 => [[['_route' => 'design_line_style_show', '_controller' => 'App\\Controller\\Design\\LineStyleController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        749 => [[['_route' => 'design_line_style_edit', '_controller' => 'App\\Controller\\Design\\LineStyleController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        757 => [[['_route' => 'design_line_style_delete', '_controller' => 'App\\Controller\\Design\\LineStyleController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        795 => [[['_route' => 'design_model_category_show', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        808 => [[['_route' => 'design_model_category_edit', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        816 => [[['_route' => 'design_model_category_delete', '_controller' => 'App\\Controller\\Design\\ModelCategoryController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        836 => [[['_route' => 'design_model_show', '_controller' => 'App\\Controller\\Design\\ModelController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        849 => [[['_route' => 'design_model_edit', '_controller' => 'App\\Controller\\Design\\ModelController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        857 => [[['_route' => 'design_model_delete', '_controller' => 'App\\Controller\\Design\\ModelController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        885 => [[['_route' => 'design_tag_show', '_controller' => 'App\\Controller\\Design\\TagController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        898 => [[['_route' => 'design_tag_edit', '_controller' => 'App\\Controller\\Design\\TagController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        906 => [[['_route' => 'design_tag_delete', '_controller' => 'App\\Controller\\Design\\TagController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        949 => [[['_route' => 'design_template_category_show', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        962 => [[['_route' => 'design_template_category_edit', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        970 => [[['_route' => 'design_template_category_delete', '_controller' => 'App\\Controller\\Design\\TemplateCategoryController::delete'], ['id'], ['DELETE' => 0], null, false, true, null]],
        990 => [[['_route' => 'design_template_show', '_controller' => 'App\\Controller\\Design\\TemplateController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        1003 => [[['_route' => 'design_template_edit', '_controller' => 'App\\Controller\\Design\\TemplateController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        1028 => [[['_route' => 'design_template_delete', '_controller' => 'App\\Controller\\Design\\TemplateController::delete'], ['id'], null, null, false, true, null]],
        1055 => [[['_route' => 'design_text_show', '_controller' => 'App\\Controller\\Design\\TextController::show'], ['id'], ['GET' => 0], null, false, true, null]],
        1069 => [[['_route' => 'design_text_edit', '_controller' => 'App\\Controller\\Design\\TextController::edit'], ['id'], ['GET' => 0, 'POST' => 1], null, false, false, null]],
        1094 => [[['_route' => 'design_text_delete', '_controller' => 'App\\Controller\\Design\\TextController::delete'], ['id'], null, null, false, true, null]],
        1169 => [[['_route' => 'printify_synchronizeproductlist', '_controller' => 'App\\Controller\\PrintifyController::printify_synchronizeproductlist'], ['shopid'], null, null, false, true, null]],
        1207 => [[['_route' => 'printify_productlist', '_controller' => 'App\\Controller\\PrintifyController::printify_productlist'], ['shopid', 'action'], null, null, false, true, null]],
        1238 => [[['_route' => 'printify_createproduct', '_controller' => 'App\\Controller\\PrintifyController::printify_createproduct'], ['shopid'], null, null, false, true, null]],
        1267 => [[['_route' => 'printify_uploadimage', '_controller' => 'App\\Controller\\PrintifyController::printify_uploadimage'], ['shopid'], null, null, false, true, null]],
        1304 => [[['_route' => 'printify_blueprintsselector', '_controller' => 'App\\Controller\\PrintifyController::printify_blueprintsselector'], ['shopid'], null, null, false, true, null]],
        1338 => [[['_route' => 'printify_templateexporter', '_controller' => 'App\\Controller\\PrintifyController::printify_templateexporter'], ['shopid'], null, null, false, true, null]],
        1397 => [
            [['_route' => 'printifyservice_blueprintforshop', '_controller' => 'App\\Service\\Printify::blueprintforshop'], ['shopid', 'blueprintid'], null, null, false, true, null],
            [null, null, null, null, false, false, 0],
        ],
    ],
    null, // $checkCondition
];
