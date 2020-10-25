var Encore = require('@symfony/webpack-encore');
const CopyPlugin = require('copy-webpack-plugin');

// Manually configure the runtime environment if not already configured yet by the "encore" command.
// It's useful when you use tools that rely on webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')


    .addPlugin(new CopyPlugin({
    patterns: [
        { from: './assets/fonts', to: 'fonts' },
    ],
}))
    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('base', './assets/js/global/base.js')
    .addEntry('loadingbar', './assets/js/global/loading-bar.js')
    .addEntry('blueprintselector', './assets/js/printify/blueprintselector.js')
    .addEntry('blueprintexporter', './assets/js/printify/blueprintexporter.js')
    .addEntry('tableexport', './assets/js/global/tableexport.js')

    .addEntry('global_notifyjs', './assets/js/global/notify.js')


    .addEntry('global_bootstraptable', './assets/js/global/bootstrap-table-master/dist/bootstrap-table.min.js')
    .addEntry('global_bootstraptable_editable', './assets/js/global/bootstrap-table-master/dist/extensions/editable/bootstrap-table-editable.min.js')
    .addEntry('global_bootstraptable_export', './assets/js/global/bootstrap-table-master/dist/extensions/export/bootstrap-table-export.min.js')
    .addEntry('global_bootstraptable_filtercontrol', './assets/js/global/bootstrap-table-master/dist/extensions/filter-control/bootstrap-table-filter-control.min.js')

    .addEntry('design_base', './assets/js/design/base.js')
    .addEntry('design_design_index', './assets/js/design/design/index.js')
    .addEntry('design_design_new', './assets/js/design/design/new.js')

    .addEntry('design_text_new', './assets/js/design/text/new.js')

    .addEntry('design_image_new', './assets/js/design/image/new.js')
    .addEntry('design_image_edit', './assets/js/design/image/edit.js')

    .addEntry('design_linestyle_new', './assets/js/design/linestyle/new.js')

    .addEntry('design_template_new', './assets/js/design/template/new.js')
    .addEntry('design_template_index', './assets/js/design/template/index.js')

    .addEntry('design_model_new', './assets/js/design/model/new.js')
    .addEntry('design_model_edit', './assets/js/design/model/edit.js')


    .createSharedEntry('vendor', './assets/js/global/tableexport.js')

    //.addEntry('page1', './assets/js/page1.js')
    //.addEntry('page2', './assets/js/page2.js')

    // When enabled, Webpack "splits" your files into smaller pieces for greater optimization.
    //.splitEntryChunks()

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    .autoProvideVariables({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery'
    });

    // enables Sass/SCSS support
    //.enableSassLoader()

    // uncomment if you use TypeScript
    //.enableTypeScriptLoader()

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    //.enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()

    // uncomment if you use API Platform Admin (composer req api-admin)
    //.enableReactPreset()
    //.addEntry('admin', './assets/js/admin.js')
;

module.exports = Encore.getWebpackConfig();
