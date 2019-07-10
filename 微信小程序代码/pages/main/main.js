// pages/main/main.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topleft:'top-left2',
    topright:'top-right',
    dibu: 'dibu',
    dibu2: '',
    yemaif:true,
    yemaif2:false,
    imglist1: [],
    imglist2: [],
    dongtaiimag:[],
    nowplace:'',
    list: ['四川','北京'],
    index:'0',
    jjview: [],
    oldheight:100,
    scen: [
      { url: "https://www.jiebanfit.com/data/upload/editer/image/2019/05/06/5cd019657d083.jpg", texth: "走进“枫叶之国”加拿大", setup: 1 },
      { url: "https://www.jiebanfit.com/data/upload/editer/image/2019/05/15/5cdaeb600e67e.jpg", texth: "潜游深海，探索潜水界的世外桃源！", setup: 2 },
      { url: "https://www.jiebanfit.com/data/upload/editer/image/2019/05/20/5ce291d380d8c.jpg", texth: "在这陌生又熟悉的世间，放逐自我的流浪！", setup: 3 },
      { url: "https://www.jiebanfit.com/data/upload/editer/image/2019/04/29/5cc703d9385e1.jpg", texth: "西班牙自驾：一生不可错过的圣地", setup: 4 },
    ]
  
  },
  diyiye:function(){
    this.setData({
      topleft: 'top-left2',
      topright: 'top-right',
      dibu: 'dibu',
      dibu2: '',
      yemaif: true,
      yemaif2: false
    })
  },
  setup1: function () {
    var myDate = new Date();
    wx.navigateTo({
      url: '/pages/s/scenery1/scenery1',
    })
  },
  setup2: function () {
    var myDate = new Date();
    wx.navigateTo({
      url: '/pages/s/scenery2/scenery2',
    })
  },
  setup3: function () {
    var myDate = new Date();
    wx.navigateTo({
      url: '/pages/s/scenery3/scenery3',
    })
  },
  setup4: function () {
    var myDate = new Date();
    wx.navigateTo({
      url: '/pages/s/scenery4/scenery4',
    })
  },
  dierye:function(){
    this.setData({
      topleft: 'top-left',
      topright: 'top-right2',
      dibu: '',
      dibu2: 'dibu',
      yemaif: false,
      yemaif2: true
    })
  },
  getbind:function(){
    wx.navigateTo({
      url: '/pages/select/select',
    })
  },
  lostbind:function(){
  },
  quxaio:function(){
  },
  pickerquxiao:function(){
    console.log('点击取消');
  },
  pikechange:function(e){
    this.setData({
      index: e.detail.value,
    })
    if (e.detail.value == 0){
      wx.redirectTo({
        url: '/pages/main/main?nowplace=四川&index=0',
      }) 
    }else if(e.detail.value == 1){
      wx.redirectTo({
        url: '/pages/main/main?nowplace=北京&index=1',
      })
    }
    // console.log(e.detail.value);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
      wx.setNavigationBarColor({
        frontColor: '#ffffff',
        backgroundColor: '#a6a6a6',
      })
      wx.request({
        url: 'http://127.0.0.1:3000/zhuye/?nowplace=' +options.nowplace,
        success:function(res){
          var param = {}
          var param1 = {}
          var param2 = {}
          var param3 = {}
          wx: for(var i=0;i<res.data.data.length;i++){
            param[i] = { src: res.data.data[i].pictrue, place: res.data.data[i].place, loca: res.data.data[i].loca}
          }
          wx: for (var i = 0; i < res.data.data1.length; i++) {
            param1[i] = { src: res.data.data1[i].url, loca: res.data.data1[i].smallplace}
          }
          wx: for (var i = 0; i < res.data.data2.length; i++) {
            param2[i] = { src: res.data.data2[i].url, loca: res.data.data2[i].smallplace}
          }
          wx:for(var i = 0;i<res.data.data3.length;i++){
            param3[i] = {jjplace:res.data.data3[i].xxname,xxjieshao:res.data.data3[i].xxjieshao}
          }
          that.setData({
            dongtaiimag:param,
            nowplace:options.nowplace,
            index:options.index,
            imglist1: param1,
            imglist2: param2,
            jjview:param3
          })
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