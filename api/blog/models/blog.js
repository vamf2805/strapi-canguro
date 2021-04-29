'use strict';
const slugify = require('slugify');
const normalizeString = require('../../../utils/normalizeString');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
          if (data.titulo) {
            data.slug = slugify(normalizeString(data.titulo));
          }
        },
        beforeUpdate: async (params, data) => {
          if (data.titulo) {
            data.slug = slugify(normalizeString(data.titulo));
          }
        },
      }
};
