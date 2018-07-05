// pages/index/index.js
var util = require('../../utils/util.js')
Page({
  data:{
    ip: '',
    ipValue: '',
    location: '',
    height: '100%'
  },
  results: function (res) {
    this.setData({
      ip: res.detail.value
    })
  },
  
  chooseimage_camera: function () {
    var _this = this;
    wx.chooseImage({
      sourceType: ['camera'],
      success: function (res) {
        getApp().globalData.type_of_diagnosis = 26
        getApp().globalData.tempfilepath = res.tempFilePaths
        var tempFilePaths = res.tempFilePaths
        wx.navigateTo({
          url: '../../pages/crop/crop',
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  chooseimage_album: function () {
    var _this = this;
    wx.chooseImage({
      sourceType: ['album'],
      success: function (res) {
        getApp().globalData.type_of_diagnosis = 26
        getApp().globalData.tempfilepath = res.tempFilePaths
        var tempFilePaths = res.tempFilePaths
        wx.navigateTo({
          url: '../../pages/crop/crop',
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },  

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let that = this;
    var ip = getApp().globalData.server_ip
    that.setData({ip:ip})

    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.screenHeight
        })
      }
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})