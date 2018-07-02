var chart = require("../../utils/chart.js");

Page({
  data: {

  },
  get_results_1: function (link) {
    var that = this
    var l = link
    console.log(l)
    wx.request({
      method:"GET",
      url: l, //仅为示例，并非真实的接口地址
      success: function (res) {
        console.log(res.data)
        that.setData({ msg1: res.data})
      },
        fail: function (err) {
        console.log(err)
        }
    })
  },
  get_results_2: function (link) {
    var that = this
    var l = link
    console.log(l)
    wx.request({
      method: "GET",
      url: l, //仅为示例，并非真实的接口地址
      success: function (res) {
        console.log(res.data)
        that.setData({ msg2: res.data })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },

  onLoad: function (options) {
    var ip = getApp().globalData.server_ip
    this.setData({
      ip: ip
    })
    console.log('result on load')
    var _this = this
    var data = getApp().globalData.APIresult
    var names = data['topk_labels']
    var probs = data['topk_probs']
    var heatmap_adress = this.data.ip+"/heatmap/get/"+data['heatmap_adress']
    var describ1 = this.data.ip+"/description/get/"+names[0]
    var describ2 = this.data.ip+"/description/get/" + names[1]
    
    _this.get_results_1(describ1)
    _this.get_results_2(describ2)

    _this.setData(
      {
      heatmap_adress : heatmap_adress,
      names : names,
      probs : probs
      }
    )
    console.log(_this.data)


  },

  onReady: function () {
  },

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
    console.log('下拉操作')
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

  },
  onSaveClick: function () {
    chart.saveCanvans(function () {

    });
  }

  
})