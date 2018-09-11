var util = require('../../utils/util.js')

Page({
  data: {
    current: 1,
    description: null,
    spinShow:false,
  },

  structureDescription: function(desc) {

    var raw_descr = desc
    return raw_descr
  },
  handleChange({detail}) {
    const type = detail.type;
    this.setData({
      spinShow: true
    })


    if (type === 'next') {

      var [_msg, name,proba] = this.update_message(this.data.current)

      this.setData({
        current: this.data.current + 1,
        msg: _msg,
        name: name,
        prob:proba,
      });

    } else if (type === 'prev') {

      var [_msg, name,proba] = this.update_message(this.data.current - 2)
      this.setData({
        current: this.data.current - 1,
        msg: _msg,
        name: name,
        prob:proba,
      });
    };
    // setTimeout(function(){
    //   this.setData(
    //     {spinShow:false}
    //   );

    // },1000),

    this.setData({
      spinShow:false
    })

  },


  update_message: function(n_toshow) {
    var description = getApp().globalData.description
    var name = getApp().globalData.names[n_toshow]
    var msg = this.structureDescription(description[name])
    var proba = getApp().globalData.probs[n_toshow]
    return [msg, name, proba]

  },

  onLoad: function(options) {
    var ip = getApp().globalData.server_ip
    this.setData({
      ip: ip
    })
    var _this = this
    var data = getApp().globalData.APIresult
    var names = data['topk_labels']
    var probs = data['topk_probs']
    var heatmap_adress = this.data.ip + "/heatmap/get/" + data['heatmap_adress']
    var description = data['description']
    getApp().globalData.description = description
    getApp().globalData.names = names
    getApp().globalData.probs = probs


    _this.structureDescription(description[names[0]])
    var msg = _this.structureDescription(description[names[0]])
    _this.setData({
      photo_taken: getApp().globalData.tempfilepath,
      heatmap_adress: heatmap_adress,
      name: names[0],
      prob: probs[0],
      msg: msg,
    })



  },

  onReady: function() {
    this.setData({
      name: names[0],
      prob: probs[0],
    })

  },

  onShow: function() {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    console.log('下拉操作')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onSaveClick: function() {
    chart.saveCanvans(function() {

    });
  }


})