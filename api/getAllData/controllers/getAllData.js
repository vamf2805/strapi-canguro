'use strict';

const getHomeData = async (ctx) => {

    try {
        let empresa = await strapi.query('empresa').find({})
        let banners = await strapi.query('banners').find({})
        let brands = await strapi.query('nuestras-marcas').find({}) 
        let allies = await strapi.query('aliados').find({})
        let identities = await strapi.query('identidades').find({})
        let app = await strapi.query('app').find({})
        let canguroInTheWorld = await strapi.query('canguro-en-el-mundo').find({})
        let blogs = await strapi.query('blog').find({_limit:2})
        let states = await strapi.query('estados').find({})

        empresa = deteleCreatedBy(empresa)
        banners = deteleCreatedBy(banners)
        brands = deteleCreatedBy(brands)
        allies = deteleCreatedBy(allies)
        app = deteleCreatedBy(app)
        canguroInTheWorld = deteleCreatedBy(canguroInTheWorld)
        blogs = deteleCreatedBy(blogs)
        states = deteleCreatedBy(states)
        


        return {
            empresa: empresa[0],
            banners,
            brands,
            allies,
            app: app[0],
            canguroInTheWorld,
            blogs,
            states
        }
    } catch (error) {
        throw error

    }

}

const deteleCreatedBy = (objs) => {
    return objs.map(obj => {
        obj.created_by = undefined
        obj.updated_by = undefined
        return obj
    })
}

module.exports = {
    home: getHomeData
};
