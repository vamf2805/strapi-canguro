'use strict';
const slugify = require('slugify');

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.nombre) {
        data.slug = slugify(data.nombre.toLowerCase());
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.nombre) {
        data.slug = slugify(data.nombre.toLowerCase());
      }
    },
  }
};

