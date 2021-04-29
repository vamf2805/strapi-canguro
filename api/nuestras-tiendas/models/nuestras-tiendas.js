"use strict";
const slugify = require('slugify');
const normalizeString = require('../../../utils/normalizeString');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
          if (data.tienda) {
            data.slug = slugify(normalizeString(data.tienda));
          }
        },
        beforeUpdate: async (params, data) => {
          if (data.tienda) {
            data.slug = slugify(normalizeString(data.tienda));
          }
        },
      }
};
 