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
        var tempFilePaths = res.tempFilePaths
        util.showBusy('正在上传')
        const uploadTask = wx.uploadFile
          ({
            url: 'http://34.232.80.4:100/v_2/predict',

            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res_update) {

              console.log(res_update)
              var data = JSON.parse(res_update.data)
              getApp().globalData.APIresult = data
              getApp().globalData.filename = tempFilePaths[0]

              wx.navigateTo({
                url: '../../pages/results2/results2',
              })
            },
            fail: function (err_update) {
              console.log(err_update)
            }
          })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
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
        var tempFilePaths = res.tempFilePaths
        util.showBusy('正在上传')
        const uploadTask = wx.uploadFile
          ({
            url: 'http://34.232.80.4:100/v_2/predict',

            filePath: tempFilePaths[0],
            name: 'file',
            formData: {
              'user': 'test'
            },
            success: function (res_update) {

              console.log(res_update)
              var data = JSON.parse(res_update.data)
              getApp().globalData.APIresult = data
              getApp().globalData.filename = tempFilePaths[0]

              wx.navigateTo({
                url: '../../pages/results2/results2',
              })
            },
            fail: function (err_update) {
              console.log(err_update)
            }
          })
        uploadTask.onProgressUpdate((res) => {
          console.log('上传进度', res.progress)
          console.log('已经上传的数据长度', res.totalBytesSent)
          console.log('预期需要上传的数据总长度', res.totalBytesExpectedToSend)
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