# BiliBili小程序学习（待完善）
## 项目预览图

![image](https://github.com/Mr-Mei/MyBilibili/blob/master/project.jpg)

## 小程序？
小程序是一个可以实现之前只能是原生态APP可以实现的效果和功能。
小程序具有如下特点：1.便捷性：小程序是不需要下载安装的，即用即走，非常方便用户的使用。并且不占用手机的内存，很便捷。
2.唯一性：小程序的名称是具有唯一性的，谁先注册就是谁的，当别人已经注册成功了，你是没有办法在注册的。

## 轻量化且易上手？
小程序作为一颗冉冉升起的新星，因为他轻量化，脱去了app的繁重外壳，并且很容易上手，所以很受到人们的喜欢，特别是开发者。

## 我们能做什么？
作为一名前端开发人员，不上手几个小程序是有点落伍的，因此，特地选了个很受年轻人喜欢的BiliBili入手，顺便提高开发技术。

## 项目工具及文档
1. **微信web开发者工具：**[微信小程序官网](https://mp.weixin.qq.com/debug/wxadoc/dev/) 微信开发的小程序编辑软件，下载安装即可使用；
2. **开发文档：**[微信小程序宝典秘籍](https://www.w3cschool.cn/weixinapp/9wou1q8j.html) 这里面详细的介绍了小程序的各种信息，包括组件、框架、API等等，有很多值得我们去阅读的信息；
3. **图标库：** [Iconfont-阿里巴巴矢量图标库](http://www.iconfont.cn/) 这个是网站简直是神器，什么图标都能找到，很厉害。
4. **图标库：**[fontawesome图标库](http://www.fontawesome.com.cn/faicons/)(https://github.com/SakuraDon99/fontawesome-wxss)
ps：先到第二个网址下载fontawesome-wxss，再到第一个fontawesome图标库官网查找图标名称，然后按照官网教程或者百度教程使用。

## 目录结构

    │  app.js                           // 整个小程序的生命周期(逻辑)，全局数据
    │  app.json                         // 小程序公共设置(全局的配置)
    │  app.wxss                         // 小程序公共样式表
    │  components.wxss                  // 组件的全局（公共）样式
    │  project.config.json              // 项目配置文件
    │  sitemap.json                     // 用来配置小程序及其页面是否允许被微信索引
    │  
    ├─.idea                             // JetBrains系列的软件IDE，项目的所有项目特定设置都存储在该.idea文件夹下的一组xml文件
    │  │  bilibili.iml
    │  │  misc.xml
    │  │  modules.xml
    │  │  workspace.xml
    │  │  
    │  ├─dictionaries
    │  │      Administrator.xml
    │  │      
    │  ├─inspectionProfiles
    │  │      Project_Default.xml
    │  │      
    │  └─libraries
    │          wx_d_ts.xml
    │          
    ├─components                        // 组件
    │  └─MyTitle                        // 页面（头部）公共组件
    │          MyTitle.js
    │          MyTitle.json
    │          MyTitle.wxml
    │          MyTitle.wxss
    │          
    ├─images                            // 存放项目中引用的外部图标图片
    │      back.png
    │      collect.png
    │      danmu_32.png
    │      download.png
    │      fanju.png
    │      gengduo.png
    │      lishi.png
    │      logo.png
    │      more.png
    │      paihang.png
    │      play.png
    │      search.png
    │      share.png
    │      tuijian1.png
    │      user.png
    │      zhibo.png
    │      
    ├─pages                             // 存放所有页面
    │  ├─detail                         // bilibili首页的视频详情页
    │  │      detail.js                 // 详情页的逻辑
    │  │      detail.json               // 详情页的配置
    │  │      detail.wxml               // 详情页的结构
    │  │      detail.wxss               // 详情页的样式
    │  │      
    │  └─index                          // bilibili首页
    │          index.js                 // 首页的页面逻辑
    │          index.json               // 首页的页面配置
    │          index.wxml               // 首页的页面结构
    │          index.wxss               // 首页的页面样式
    │          
    ├─styles
    │      fontawesome.wxss             // fontawesome图标样式
    │      
    └─utils                             // 存放全局的一些.js文件,公共事件代码，常用的工具函数
            util.js
     
          
 ## 项目功能
 #### 已实现功能：
  * 广告轮播图
  * 视频加载
  * 视频播放
  * 视频详情
 
 #### 未实现功能：
 还有很多功能没实现，只是模仿搭建小程序，以后会完善的。
 
 
 #### 项目地址
https://github.com/Mr-Mei/MyBilibili
 
 #### 最后要说的话
 现在我技术还是有些不太成熟，接触小程序不久，还有很多需要学习的地方，不能很好的重现哔哩哔哩的功能，我还有很长的学习之路要走。
