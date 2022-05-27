module.exports = {
    images: {
        domains: [
           'picsum.photos'
        ]
    },
    trailingSlash: true,
    async headers(){
        return [{
            source:'/:path*',
            headers:[{
                key:'X-Frame-Options',
                value:'SAMEORIGIN',
            },{
                key:'x-robots-tag',
                value:'*',
            }]
        }]
    }
}