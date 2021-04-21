'use strict';
const slugify = require('slugify');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
          if (data.titulo) {
            data.slug = slugify(data.titulo.toLowerCase());
          }
        },
        beforeUpdate: async (params, data) => {
          if (data.titulo) {
            data.slug = slugify(data.titulo.toLowerCase());
          }
        },
      }
};
