Page({
  data: {
    loginview: 'loginview2',
    zhuceview: 'zhuceview1',
    logintf: true,
    zhucetf: false,
    isloginpassworld: 'password',
    imagesrc: '../../image/002.png',
    loginname: null,
    loginpassworld: null,
    zhucename: null,
    zhucepassworld: null,
    zhucepassworld2: null,
  },
  loginview: function () {
    this.setData({
      loginview: 'loginview2',
      zhuceview: 'zhuceview1',
      logintf: true,
      zhucetf: false
    })
  },
  zhuceview: function () {
    this.setData({
      loginview: 'loginview1',
      zhuceview: 'zhuceview2',
      logintf: false,
      zhucetf: true
    })
  },
  showpassworlds: function () {
    if (this.data.isloginpassworld == 'password') {
      this.setData({
        isloginpassworld: 'text',
        imagesrc: '../../image/001.png'
      })
    } else {
      this.setData({
        isloginpassworld: 'password',
        imagesrc: '../../image/002.png'
      })
    }
  },
  getloginname: function (e) {
    var newloginname = e.detail.value
    this.setData({
      loginname: newloginname
    })
  },
  getloginpassworld: function (e) {
    var newloginpassworld = e.detail.value
    this.setData({
      loginpassworld: newloginpassworld
    })
  },
  login: function () {
    if (this.data.loginname == null) {
      wx.showModal({
        title: '提示',
        content: '账号不能为空',
        success: function (res) {
        }
      })
    } else if (this.data.loginpassworld == null) {
      wx.showModal({
        title: '提示',
        content: '密码不能为空',
        success: function (res) {
        }
      })
    } else {
      var that = this
      wx.request({
        url: 'http://127.0.0.1:3000/login/?name=' + that.data.loginname + '&password=' + that.data.loginpassworld,
        success: function (res) {
          if (res.data.err_code == 0) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            }),
              wx.navigateTo({
              url: '/pages/main/main?nowplace=四川',
              })
          } else if (res.data.err_code == 1) {
            wx.showToast({
              title: '账号或密码错误',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  },

  getzhucename: function (e) {
    var newzhucename = e.detail.value
    this.setData({
      zhucename: newzhucename
    })
  },
  getzhucepassworld: function (e) {
    var newzhucepassworld = e.detail.value
    this.setData({
      zhucepassworld: newzhucepassworld
    })
  },
  getzhucpassworld2: function (e) {
    var newzhucepassworld2 = e.detail.value
    this.setData({
      zhucepassworld2: newzhucepassworld2
    })
  },
  zhucebutton: function () {
    if (this.data.zhucename == null) {
      wx.showModal({
        title: '提示',
        content: '账号不能为空',
        success: function (res) {
        }
      })
    } else if (this.data.zhucepassworld == null) {
      wx.showModal({
        title: '提示',
        content: '密码不能为空',
        success: function (res) {
        }
      })
    } else if (this.data.zhucepassworld2 == null) {
      wx.showModal({
        title: '提示',
        content: '密码不能为空',
        success: function (res) {
        }
      })
    } else if (this.data.zhucepassworld != this.data.zhucepassworld2) {
      wx.showModal({
        title: '提示',
        content: '两次密码不一致',
        success: function (res) {
        }
      })
    } else {
      var that = this
      wx.request({
        url: 'http://127.0.0.1:3000/zhuce/?name=' + that.data.zhucename + '&password=' + that.data.zhucepassworld,
        success: function (res) {
          if (res.data.err_code == 1) {
            wx.showToast({
              title: '注册成功',
              icon: 'success',
              duration: 2000
            })
          } else {
            wx.showToast({
              title: '注册失败！账号已存在！',
              icon: 'none',
              duration: 2000
            })
          }
        }
      })
    }
  },
  wangjimima: function () {
    wx.showToast({
      title: '哈哈！',
      icon: 'none',
      duration: 2000
    })
  },

})