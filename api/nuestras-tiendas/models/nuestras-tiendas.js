"use strict";
const slugify = require('slugify');

module.exports = {
    lifecycles: {
        beforeCreate: async (data) => {
          if (data.tienda) {
            data.slug = slugify(data.tienda.toLowerCase());
          }
        },
        beforeUpdate: async (params, data) => {
          if (data.tienda) {
            data.slug = slugify(data.tienda.toLowerCase());
          }
        },
      }
};
 