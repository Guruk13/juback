'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('lang-head')
      .service('myService')
      .getWelcomeMessage();
  },
};
