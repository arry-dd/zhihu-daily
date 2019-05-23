const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 5000,
        proxy: {
            '/api': {
                target: 'https://news-at.zhihu.com',
                changeOrigin: true
            }
        }
    },
    chainWebpack: (config)=>{
        //修改文件引入自定义路径
        config.resolve.alias
            .set('home', resolve('src/components/home'))
            .set('src', resolve('src'))
            .set('styles', resolve('src/assets/styles'))
    }

}
