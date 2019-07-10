// pages/select/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allheight:0,
    selceview:[],
    nowplace:'',

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          allheight:res.screenHeight
        })
      },
    })
  },
  placename:function(e){
    var nowplace = e.detail.value
    this.setData({
      nowplace: nowplace
    })
  },
  selcetbutton:function(){
    var that = this
    wx.request({
      url: 'http://127.0.0.1:3000/select?placename='+that.data.nowplace,
      success: function (res) {
        var param = {}
        wx: for (var i = 0; i < res.data.data.length; i++) {
          param[i] = { place: res.data.data[i].xxname, view: res.data.data[i].xxjieshao }
        }
        that.setData({
          selceview: param
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