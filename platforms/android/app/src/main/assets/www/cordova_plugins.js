cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-admob.AdMob",
    "file": "plugins/cordova-plugin-admob/www/AdMob.js",
    "pluginId": "cordova-plugin-admob",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  },
  {
    "id": "cordova-plugin-admob-simple.AdMob",
    "file": "plugins/cordova-plugin-admob-simple/www/AdMob.js",
    "pluginId": "cordova-plugin-admob-simple",
    "clobbers": [
      "window.plugins.AdMob"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-admobsdk": "1.0.4",
  "cordova-plugin-admob": "3.2.4",
  "cordova-admob-sdklibs": "2.1.6",
  "cordova-plugin-admob-simple": "3.3.4"
};
// BOTTOM OF METADATA
});