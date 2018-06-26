var touchDot = 0;//触摸时的原点  
var time = 0;// 时间记录，用于滑动时且时间小于1s则执行左右滑动  
var interval = "";// 记录/清理时间记录  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picture_number:1,
    next_pict : "p1 Intro 1.png"
        
  },
  // 触摸开始事件  
  touchStart: function (e) {
    console.log('用户触摸')
    touchDot = e.touches[0].pageX; // 获取触摸时的原点  
    // 使用js计时器记录时间    
    interval = setInterval(function () {
      time++;
    }, 100);
  },
  handletouchmove: function (event) {
    // console.log(event)
  },
  // 触摸移动事件  
  touchMove: function (e) {
    var touchMove = e.touches[0].pageX;
    // console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    // 向左滑动    
    if (touchMove - touchDot <= -100 && time < 10) {
      console.log('向左滑动');
      this.setData(
        { next_pict : 'p1 Intro 2.png'}
      ) 
    }
    // 向右滑动  
    if (touchMove - touchDot >= 100 && time < 10) {
      console.log('向右滑动');
      wx.switchTab({
        url: '../右滑页面/右滑页面'
      });
    }
  },
  // 触摸结束事件  
  touchEnd: function (e) {
    clearInterval(interval); // 清除setInterval  
    time = 0;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log('页面显示')
    this.setData(
      {
        next_pict: 'p1 Intro 1.png',
        picture_number:  1,
      }
    ) 
    
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
    console.log('用户下拉')
    wx.stopPullDownRefresh() 
    if (this.data.picture_number == 3) {
      wx.switchTab({
        url: '../index26/index26',
      })

    }
    if (this.data.picture_number == 2) {
      this.setData(
        {
          next_pict: 'p1 Intro 3.png',
          picture_number: this.data.picture_number + 1,
        }
      )
    }
    if (this.data.picture_number==1){
      this.setData(
        { next_pict: 'p1 Intro 2.png',
          picture_number: this.data.picture_number+1,}
      ) 
    }


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
 