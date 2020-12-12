Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  doPractice: function() {
    wx.navigateTo({
      url: '../doPractice/doPractice',
    })
  },
  wrongSet: function() {
    wx.navigateTo({
      url: '../wrongSet/wrongSet',
    })
  }
})