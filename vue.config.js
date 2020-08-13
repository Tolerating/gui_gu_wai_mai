module.exports = {
    devServer:{
        proxy:{
            '/api':{
                target:'http://localhost:8080',
                changeOrigin:true,
                pathRewrite:{
                    '^/api':""
                }
            },
            // '/address_info':{
            //     target:'http://cangdu.org:8001/v2/pois',
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '^/address_info':''
            //     }
            // }
        }
    }
}