Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 被点击首页导航的菜单索引
    currentIndexNav:0,
    // 首页导航数据
    navList:[
      // 防止请求数据失败 出此下策
      { text: '首页', id: 0 },
      { text: '动画', id: 1 },
      { text: '番剧', id: 2 },
      { text: '国创', id: 3 },
      { text: '音乐', id: 4 },
      { text: '舞蹈', id: 5 },
      { text: '科技', id: 6 },
      { text: '游戏', id: 7 },
      { text: '娱乐', id: 8 },
      { text: '鬼畜', id: 9 },
      { text: '电影', id: 10 },
      { text: '电视剧', id: 11 },
      { text: '纪录片', id: 12 },
      { text: '影视', id: 13 },
      { text: '时尚', id: 14 },
      { text: '生活', id: 15 },
      { text: '广告', id: 16 },
      { text: '直播', id: 17 },
      { text: '相簿', id: 18 }
    ],
    // 轮播图数据
    swiperList:[
      //防止请求数据失败，先写组默认值
      {"link":"","imgSrc":"https://i0.hdslb.com/bfs/archive/bf2aa1f18ccae9ecae4cb666417f75da951ee2f4.jpg@480w_300h.webp"},
      { "link": "", "imgSrc": "https://i0.hdslb.com/bfs/archive/8860d7a57a9b1992c112ee56a35444cfc445108b.jpg@480w_300h.webp" },
      { "link": "", "imgSrc": "https://i0.hdslb.com/bfs/archive/82232bca677f06d69734159653cf29db82ff5d9c.png@480w_300h.webp" },
      { "link": "", "imgSrc": "https://i0.hdslb.com/bfs/archive/28d93d03968baa475a2c3982640736a66b4405c3.jpg@480w_300h.webp" }
    ],
    // 视频列表数据
    videosList:[
      //防止请求数据失败，先写组默认值
      {
        "id": 0,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0563c3df12637178e8b08858e5fd11e4a6906acc.jpg@320w_200h.webp",
        "desc": "世界上广告最多的网站判定！真的有10000条广告！【暗物质#2】",
        "playCount": "24.9万",
        "commentCount": "1345",
        "videoSrc": "http://files.ak48.xyz/2018120195458.mp4"
      },
      {
        "id": 1,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/b08463bc1257b6294bad1e1646a3203f9f3a0c60.jpg@320w_200h.webp",
        "desc": "【圣地亚哥金曲】藏，超好听的中国风电音鬼畜！",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": "http://files.ak48.xyz/20181219211856.mp4"
      },
      {
        "id": 2,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/02cf0e3a1fd52f80763fd51ee7fae69e51cf173c.jpg@320w_200h.webp",
        "desc": "迈克尔杰克逊封神的12秒，无人能做到",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": "http://files.ak48.xyz/20181219211920.mp4"
      },
      {
        "id": 3,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/dc7147ffa4e11a2fffa84b295b2f2bdbbfe3e6d7.jpg@320w_200h.webp",
        "desc": "【2018】年度影视混剪 Ready Story 2018【混剪】",
        "playCount": "40.0万",
        "commentCount": "1066",
        "videoSrc": "http://files.ak48.xyz/20181219211910.mp4"
      },
      {
        "id": 4,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/2cc604557cab1f6fd79591981891467f7b825010.jpg@320w_200h.webp",
        "desc": "当你觉得扛不住的时候来看看这段视频",
        "playCount": "82.7万",
        "commentCount": "719",
        "videoSrc": ""
      },
      {
        "id": 5,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/0fc171eaa7bf6b81cf5427fc57db104a4ef719d7.jpg@320w_200h.webp",
        "desc": "【1080/漫威/衔接踩点向】前方高能！带你体验完美流畅的衔接踩点视觉盛宴！",
        "playCount": "28.9万",
        "commentCount": "817",
        "videoSrc": ""
      },
      {
        "id": 6,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/0bf251d3f3b2cb589532aa24eaea140b312f7765.jpg@320w_200h.webp",
        "desc": "【木鱼微剧场】诺兰作品《星际穿越》，严谨的科学精神与深刻人文关怀（Re:C）",
        "playCount": "44.6万",
        "commentCount": "7149",
        "videoSrc": ""
      },
      {
        "id": 7,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/4a4155cf25b38da958e64b531709bca37927c82b.jpg@320w_200h.webp",
        "desc": "【嘻咦啊看】其实很多人一辈子都不懂得怎样道歉",
        "playCount": "63.8万",
        "commentCount": "7825",
        "videoSrc": ""
      },
      {
        "id": 8,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/54cd74a9bfd187fb795724c7bb51272e7c07a2e5.jpg@320w_200h.webp",
        "desc": "【改革春风吹满地】【漫威/香港电影/赵本山】和斧头帮一起吹满地吧~",
        "playCount": "30.4万",
        "commentCount": "373",
        "videoSrc": ""
      },
      {
        "id": 9,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/9046c3db8d6cddf56287fa1ead4e406baf4747f3.jpg@320w_200h.webp",
        "desc": "一家永远没有回头客的店《自杀专卖店》",
        "playCount": "40.0万",
        "commentCount": "1066",
        "videoSrc": ""
      },
      {
        "id": 10,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/67e474f4fa31d5a2a8a6241a28cdf67be898eed4.png@320w_200h.webp",
        "desc": "【演技】吃饭同样是吃空气，为什么演技差距如此之大！",
        "playCount": "65.7万",
        "commentCount": "3083",
        "videoSrc": ""
      },
      {
        "id": 11,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/67be0fadbe5eec5b967132c38fba65913cac7f43.jpg@320w_200h.webp",
        "desc": "【盘点火影真人版】我叫王大锤，是个忍者！这次参加了一个高成本火影忍者大电影！！",
        "playCount": "46.1万",
        "commentCount": "2090",
        "videoSrc": ""
      },
      {
        "id": 12,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/332b9cf87e30331277c84dcc47b1d53c2cb3fdfb.jpg@320w_200h.webp",
        "desc": "女部落奇怪规定，女人怀孕后必须吃男人补身体，还好这只是电影",
        "playCount": "56.6万",
        "commentCount": "663",
        "videoSrc": ""
      },
      {
        "id": 13,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/2e30177ef42ea0a420cd9926870d1463ed0be11c.jpg@320w_200h.webp",
        "desc": "《爱情公寓》令人窒息的骚操作！让人笑出猪叫声的神操作盘点！ 第十九弹",
        "playCount": "53.9万",
        "commentCount": "543",
        "videoSrc": ""
      },
      {
        "id": 14,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/cab6d4254e4b97a0edf4d2393f5e8aed4a90201c.jpg@320w_200h.webp",
        "desc": "【全程高能】一个角色的三观到底能够正到什么地步【世间清流】",
        "playCount": "32.6万",
        "commentCount": "2425",
        "videoSrc": ""
      },
      {
        "id": 15,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/396dfc33b8c3f426606760f9614759d7cf29c28d.png@320w_200h.webp",
        "desc": "明星20年后再次演绎自己的经典角色，谁变化最小",
        "playCount": "46.6万",
        "commentCount": "2770",
        "videoSrc": ""
      },
      {
        "id": 16,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/f03f82e14ee380f8e44c0b62924438f0ccc93750.jpg@320w_200h.webp",
        "desc": "一部拷问社会和人性的电影，极度真实，中国版的《东京物语》！",
        "playCount": "37.9万",
        "commentCount": "1658",
        "videoSrc": ""
      },
      {
        "id": 17,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/7ea04d86d345d109df15fd8fae5a1a12eca14b88.jpg@320w_200h.webp",
        "desc": "【公开处刑】演技炸裂与演技尴尬到底是什么样子：我是谢晓飞，我走路拽起来都是演技？",
        "playCount": "42.4万",
        "commentCount": "5165",
        "videoSrc": ""
      },
      {
        "id": 18,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/39a366506c68e612bf07443deff25a6bfe55e08b.jpg@320w_200h.webp",
        "desc": "爆笑沙雕剧《我是大哥大》 全集，不看你后悔，沙雕青年快乐多，万恶之源，笑出腹肌",
        "playCount": "26.6万",
        "commentCount": "2027",
        "videoSrc": ""
      },
      {
        "id": 19,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/45eeee2d1eb67237e255652f5ed682edf70d137a.jpg@320w_200h.webp",
        "desc": "恶婆婆故意用蜂蜜试探品如 结果自己的孙子却被送去了医院!",
        "playCount": "41.0万",
        "commentCount": "652",
        "videoSrc": ""
      },
      {
        "id": 20,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/3e7a75efe33f7391bb73ef3dcbc762f3d7d15136.png@320w_200h.webp",
        "desc": "【极度舒适系列】那些惊艳至极的服化道！视觉盛宴！【第8期】",
        "playCount": "16.6万",
        "commentCount": "613",
        "videoSrc": ""
      },
      {
        "id": 21,
        "link": "",
        "imgSrc": "https://i0.hdslb.com/bfs/archive/1f0159497cac9ebfe7ac2a96aae2c5df32273d27.jpg@320w_200h.webp",
        "desc": "姐姐们为了阻止唯一的弟弟谈恋爱，真是花样百出",
        "playCount": "29.6万",
        "commentCount": "822",
        "videoSrc": ""
      },
      {
        "id": 22,
        "link": "",
        "imgSrc": "https://i1.hdslb.com/bfs/archive/2d0e5ece82827a666f38e7e12fc06eefe70ddbe7.jpg@320w_200h.webp",
        "desc": "500名副导演联合封杀胖嫂，本人回应：“我不演了，你们不用封杀我”",
        "playCount": "32.3万",
        "commentCount": "190",
        "videoSrc": ""
      },
      {
        "id": 23,
        "link": "",
        "imgSrc": "https://i2.hdslb.com/bfs/archive/6b4f86491290565e8d41b04a1a649051c6419d06.jpg@320w_200h.webp",
        "desc": "《2019上半年即将上映的科幻大片》九部即将上映的科幻巨制，总有一部是你期待的！",
        "playCount": "20.1万",
        "commentCount": "1216",
        "videoSrc": ""
      }
    ],
  },
  // 点击首页导航
  activeNav(e){
    // console.log(123)
    this.setData({
      currentIndexNav:e.target.dataset.index
    })
  },
  /**
   * 获取首页导航数据
   */
  getNavList(){
    let that = this;
    // 利用小程序内置发送请求的方法
    wx.request({
      url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/navList",
      success(res){
        // console.log(res);
        if (res.data.code===0){
          that.setData({
            navList:res.data.data.navList
          })
        }
      }
    })
  },
  /**
   * 获取轮播图数据
   */
  getSwiperList(){
    let that = this;
    wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/swiperList",
        success:res=>{
            // console.log(res);
          if (res.data.code===0) {
            that.setData({
              swiperList:res.data.data.swiperList
            })
          }
        }
    })
  },
  /**
   * 获取视频列表
   */
  getVideosList(){
    let that = this;
    wx.request({
        url:"https://easy-mock.com/mock/5c1dfd98e8bfa547414a5278/bili/videosList",
        success:res=>{
            // console.log(res);
          if (res.data.code===0){
            that.setData({
              videosList:res.data.data.videosList
            })
          }
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1 获取首页导航数据
    this.getNavList();
    // 2 调用获取轮播图数据的函数
    this.getSwiperList();
    // 3 调用获取视频列表函数
    this.getVideosList();
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