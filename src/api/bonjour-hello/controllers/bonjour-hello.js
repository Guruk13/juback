'use strict';

/**
 *  bonjour-hello controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::bonjour-hello.bonjour-hello');
