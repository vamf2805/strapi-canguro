'use strict';
const slugify = require('slugify');
const normalizeString = require('../../../utils/normalizeString');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
          if (data.nombre) {
            data.slug = slugify(normalizeString(data.nombre));
          }
        },
        beforeUpdate: async (params, data) => {
          if (data.nombre) {
            data.slug = slugify(normalizeString(data.nombre));
          }
        },
      }
};
