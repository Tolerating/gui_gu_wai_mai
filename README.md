> 哔哩哔哩视频看到https://www.bilibili.com/video/BV1Uz411i7y7?p=71

## Mint-ui按需引入
```
//1. 下载
npm i babel-plugin-component -D

//2.修改babel.config.js配置
"plugins": [["component", 
    {
      "libraryName": "mint-ui",
      "style": true
    }
]]

// 3.全局引入/局部引入
//全局引入需用Vue.component(),如果使用Vue.use()不会引入样式
```
### better-scroll
移动端滚动插件

## vue-lazyload
图片懒加载

## 轻量级日期格式化库 - date-fns

## 打包文件分析 npmrunbuild--report
 vue 脚手架提供了一个用于可视化分析打包文件的包 webpack-bundle-analyzer 和配置