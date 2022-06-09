'use strict';

/**
 * bonjour-hello service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bonjour-hello.bonjour-hello');
