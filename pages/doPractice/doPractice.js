// pages/doPractice/doPractice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [
      {
      iconSrc: "../../icon/QQ图片20201223084353.jpg",
      text: "1-10的加法"
      },
      {
        iconSrc: "../../icon/QQ图片20201223084353.jpg",
        text: "1-10的减法"
      },
      {
        iconSrc: "../../icon/QQ图片20201223084353.jpg",
        text: "1-100的加法"
      },
      {
        iconSrc: "../../icon/QQ图片20201223084353.jpg",
        text: "1-100的减法"
      },
      {
        iconSrc: "../../icon/QQ图片20201223084353.jpg",
        text: "表内乘法"
      },
      {
        iconSrc: "../../icon/QQ图片20201223084353.jpg",
        text: "表内除法"
      }
  ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  choosePractice: function(e) {
    const index = e.currentTarget.dataset.index;
    wx.navigateTo({
      url: '../../pages/practice/practice',
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