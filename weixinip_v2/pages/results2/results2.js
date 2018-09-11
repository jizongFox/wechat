var chart = require("../../utils/chart.js");

Page({
  data: {

  },
 

  onLoad: function (options) {
    console.log('result on load')
    var _this = this
    var data = getApp().globalData.APIresult
    // console.log(data['names'])
    var names = data['topk_labels']
    var probs = data['topk_probs']

    chart.draw(this, 'canvas1', {
      title: {
        text: "深度皮肤病医生诊断结果",
        color: "#333333"
      },
      xAxis: {
        data: [names[0], names[1]]
      },
      series: [
        {
          name: "",
          category: "bar",
          data: [Math.floor(parseFloat(probs[0])), Math.floor(parseFloat(probs[1]))]
        },
        // {
        //   name: "",
        //   category: "line",
        //   // data: [20, 35, 38, 59, 48, 27, 43, 35]
        //   data: [Math.floor(parseFloat(probs[0])), Math.floor(parseFloat(probs[1])), Math.floor(parseFloat(probs[2])), Math.floor(parseFloat(probs[3]))]
        // },
        // {
        //   name: [names[0], names[1], names[2], names[3]],
        //   category: "pie",
        //   data: [parseFloat(probs[0]), parseFloat(probs[1]), parseFloat(probs[2]), parseFloat(probs[3])]
        // }
      ]
    })


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