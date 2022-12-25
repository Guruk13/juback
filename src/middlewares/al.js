var parser = require('accept-language-parser');

module.exports = (config, { strapi }) => {
  return async (context, next) => {
    if (context.url.startsWith('/api/') && !context.request.query.locale) {
      const locales = (await strapi.entityService.findMany('plugin::i18n.locale')).map(locale => { return locale.code });
      context.request.query.locale = parser.pick(locales, context.header["accept-language"], { loose: true });
    }
    return next()
  };
};


