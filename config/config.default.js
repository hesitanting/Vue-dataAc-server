/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1592062195915_2169';

  // add your middleware config here
  config.middleware = [];

  config.mongoose = {
    url: 'mongodb://127.0.0.1/acData',
    options: {},
    // plugins: [createdPlugin, [updatedPlugin, pluginOptions]],
  }
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,OPTIONS'
  };
  config.security = {
    csrf: {
      enable: false,
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
