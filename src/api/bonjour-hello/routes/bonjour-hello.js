'use strict';

/**
 * bonjour-hello router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::bonjour-hello.bonjour-hello');
