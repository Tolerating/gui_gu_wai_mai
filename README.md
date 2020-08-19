<<<<<<< HEAD
> 哔哩哔哩视频看到https://www.bilibili.com/video/BV1Uz411i7y7?p=49
=======
> 哔哩哔哩视频看到https://www.bilibili.com/video/BV1Uz411i7y7?p=45
>>>>>>> adcda38a240dd8655c97ee5f336b3c6997ab795d

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
