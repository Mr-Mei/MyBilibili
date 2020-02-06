// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   // 视频数据，防止后台接口异常,给个默认值，（正常情况设置为null）
    videoInfo:{
  author:"牧草君1",
    commentCount:1345,
    date:"12-15",
    id:1,
    playCount:"24.9万",
    // videoSrc:"http://files.ak48.xyz/2018120195458.mp4",
    videoSrc:"http://47.90.213.237/youtube/JU3AL8S3zyE.mp4",
    videoTitle:"世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】"
  },
    // 推荐列表，防止服务器出错，给一组默认值
    othersList:[
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/cb93f69df4a4b9216d5149dc58d9a2ce9436b697.jpg@320w_200h.webp",
        "duration": "00:06:28",
        "title": "世界上最小的网站！小到只有0.4KB，你信么？【暗物质#1】",
        "playMsg": "20.6",
        "commentCount": " 445"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/412d5a027a2d4adcd61816e8ce676911c92e7974.jpg@320w_200h.webp",
        "duration": "00:02:11",
        "title": "改革春风吹满地",
        "playMsg": "52.1",
        "commentCount": " 564"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/945293f72fdec1eb6228afe9a3f1b9c433544ae5.jpg@320w_200h.webp",
        "duration": "00:01:39",
        "title": "呲哩呲哩？是不是我大破站太火了！！！",
        "playMsg": "27.0",
        "commentCount": " 1179"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/2f1c5bd88f39c2a489ce1a7b2f715a102c2edf15.jpg@320w_200h.webp",
        "duration": "00:01:03",
        "title": "当B站被腾讯收购！会发生什么？",
        "playMsg": "117.8",
        "commentCount": " 4348"
      },
      {
        "imgSrc": "https://i2.hdslb.com/bfs/archive/873c62e7ab58f5f9f4f890fc66eef1efb62e2fb3.jpg@320w_200h.webp",
        "duration": "00:01:01",
        "title": "雷锋的故事里就这配音就tm值一个亿",
        "playMsg": "163.2",
        "commentCount": " 4668"
      },
      {
        "imgSrc": "https://i2.hdslb.com/bfs/archive/a4b08a069be32e489a48094ff62f413571d59d4d.jpg@320w_200h.webp",
        "duration": "00:00:16",
        "title": "往鲍鱼抹上芥末会发生什么",
        "playMsg": "116.5",
        "commentCount": " 1135"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/e1acedadb5f51a49f1d74f4540162693010b2e2d.jpg@320w_200h.webp",
        "duration": "00:01:42",
        "title": "猜猜黑板上画的是什么？绝对不是你们看的那样《学校霸王》",
        "playMsg": "99.6",
        "commentCount": " 1770"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/f05855bdfc400cd910a4f8e0fee652444bb6ef00.jpg@320w_200h.webp",
        "duration": "00:03:53",
        "title": "肯德基内部员工才知道，用这几句“暗语”点餐，能让你吃到撑！",
        "playMsg": "27.7",
        "commentCount": " 436"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0d3b1e699a2e84260ef5a8a71f102d4982f7a596.jpg@320w_200h.webp",
        "duration": "00:00:41",
        "title": "bilibili播放量最多的视频？！！",
        "playMsg": "35.6",
        "commentCount": " 246"
      },
      {
        "imgSrc": "https://i2.hdslb.com/bfs/archive/9a6e89134d6cbead10765950f0ec12fee482a15a.jpg@320w_200h.webp",
        "duration": "00:08:58",
        "title": "淘宝上最侮辱智商的商品！真是花钱买了个教训",
        "playMsg": "4.7",
        "commentCount": " 363"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/5052636563f803ef1a5a4c397dce8fd274621c3f.jpg@320w_200h.webp",
        "duration": "00:03:48",
        "title": "男子醉驾被查扬言“我爷爷是搞原子弹的” 交警一查还真是",
        "playMsg": "75.8",
        "commentCount": " 931"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/c2c60b08d4ecb10736f54f514c83767aaec1e880.jpg@320w_200h.webp",
        "duration": "00:02:53",
        "title": "万恶之源:我信你个鬼，你个糟老头子坏的很",
        "playMsg": "223.7",
        "commentCount": " 3439"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/fe317a18cba364c62becf478f04d835c1b4708f3.jpg@320w_200h.webp",
        "duration": "00:02:43",
        "title": "打劫遇上一车特警，笨贼视频在youtube上，世界网友都笑死了！",
        "playMsg": "209.7",
        "commentCount": " 2431"
      },
      {
        "imgSrc": "https://i2.hdslb.com/bfs/archive/f0252c692931a8605d33aa8b4f0471100b24c7c5.jpg@320w_200h.webp",
        "duration": "00:01:59",
        "title": "B站恐怖事件！明明声音已经关掉却还能听到声音？？？",
        "playMsg": "57.8",
        "commentCount": " 1099"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/98714070087b590dfb0d0150013c4a0c8da8b8e3.jpg@320w_200h.webp",
        "duration": "00:15:31",
        "title": "不小心受伤怎么办？教你23个生活的必备技巧@油兔不二字幕组",
        "playMsg": "118.8",
        "commentCount": " 3425"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/9a4e9d3682e8f930d5ece87c24203105bc09fa1f.jpg@320w_200h.webp",
        "duration": "00:01:44",
        "title": "女朋友逛完漫展在酒店累趴了，该怎么办呢",
        "playMsg": "62.4",
        "commentCount": " 966"
      },
      {
        "imgSrc": "https://i0.hdslb.com/bfs/archive/d8bcdd8555027ad27896186da479d21a53218f8b.png@320w_200h.webp",
        "duration": "00:01:32",
        "title": "能让鲍鱼跳舞！遇到醋就饥忍难耐了吗？还是本能反应？",
        "playMsg": "5.7",
        "commentCount": " 77"
      },
      {
        "imgSrc": "https://i2.hdslb.com/bfs/archive/0970d603df54320610156a06d2ce8a5a4097b0c6.jpg@320w_200h.webp",
        "duration": "00:02:12",
        "title": "拘留所里出人才 惊呆了！",
        "playMsg": "20.2",
        "commentCount": " 363"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/aa27ae344fc81d1f1be2ac4c691a27b43334e553.jpg@320w_200h.webp",
        "duration": "00:01:20",
        "title": "本以为小情侣在车库约会，8秒后，荒唐画面发生了",
        "playMsg": "33.6",
        "commentCount": " 326"
      },
      {
        "imgSrc": "https://i1.hdslb.com/bfs/archive/45a3a1258f7e473cc45ab0823729ac0b5618eee6.png@320w_200h.webp",
        "duration": "00:02:46",
        "title": "朱广权：自信=手拿30米长刀，先让你跑29米。",
        "playMsg": "48.2",
        "commentCount": " 852"
      }
    ],
    // 评论数据，防止后台接口异常,给个默认值
    "commentData": {
      "commentTotalCount": "454",
      "commentList": [
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/fe81d93c5beb92557474f48551d3b4966eadeeef.jpg@60w_60h.webp",
          "username": "峰岛达裕",
          "commentInfo": "什么？居然不是某些网站的澳门皇家赌场？",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i2.hdslb.com/bfs/face/3e1997d2d018b7c973eb7203c574e448e6d9c491.jpg@60w_60h.webp",
          "username": "黑狌白鸾",
          "commentInfo": "鲁迅说过，如果你有一个苹果，我有一个苹果，我们交换，一人还是一个苹果，如果你有一个网站，我有一个网站，我们交换那我们双方就有两个网站",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i1.hdslb.com/bfs/face/d2fa6637d952d176a13c706f5efd179f52a12367.jpg@60w_60h.webp",
          "username": "马猴烧酒柊筱娅",
          "commentInfo": "等等，那这样的话，牧草君岂不是一个视频打了1w多个广告[小电视_吃惊]",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i1.hdslb.com/bfs/face/c605ce1a2f47b049ab7f271aa228bb8e96a43bf0.jpg@60w_60h.webp",
          "username": "NAN某",
          "commentInfo": "我经常逛的那些网站也有很多广告(｀・ω・´)",
          "commentDate": "12-15"
        },
        {
          "userIconSrc": "https://i0.hdslb.com/bfs/face/54923922eea6532c2dff95e45743b6a1203c0230.jpg@60w_60h.webp",
          "username": "牧草君",
          "commentInfo": "你们赶快去这个王网站了里面找找好玩的，我已经找到好几个(✪▽✪)好康的网站了[小电视_赞]",
          "commentDate": "12-15"
        }
      ]
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)
    let videoId = options.id;
    this.getCurrentVideo(videoId);
    this.getOthersList(videoId);
    this.getCommentList(videoId);
  },

  /**
   * 根据视频的id获取视频详情
   */
  getCurrentVideo(videoId){
    let that = this;
    wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videoDetail?id="+videoId,
        success:res=>{
            // console.log(res)
          if (res.data.code===0){
            that.setData({
              videoInfo:res.data.data.videoInfo
            })
          }
        }
    })
  },
  /**
   * 获取推荐视频
   */
  getOthersList(videoId){
    let that = this;
    wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/othersList?id"+videoId,
        success:res=>{
            // console.log(res);
          if (res.data.code===0){
            that.setData({
              othersList:res.data.data.othersList
            })
          }
        }
    })
  },
  /**
   * 获取评论数据
   */
  getCommentList(videoId){
    let that = this;
    wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/commentsList?id="+videoId,
        success:res=>{
            // console.log(res)
          if (res.data.code===0){
            that.setData({
              commentData:res.data.data.commentData
            })
          }
        }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})