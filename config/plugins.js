// path: ./config/plugins.js

module.exports = ({ env }) => ({
    // enable a plugin that doesn't require any configuration
    //i18n: true,
  
    // enable a custom plugin
    "smol-lang": {
        enabled: true,
        resolve: './src/plugins/smol-lang' // path to plugin folder
      }
    // disable a plugin

  });
   