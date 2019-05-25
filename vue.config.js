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
            .set('store', resolve('src/store'))
            .set('common', resolve('src/components/common'))
            .set('detail', resolve('src/components/detail'))
            .set('comment', resolve('src/components/comment'))
    },

    pluginOptions: {
    //全局导入less
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [resolve('src/assets/styles/variable.less')]
      }
    }
}
