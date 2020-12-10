Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 判断是算式识别还是手写体识别
    isFormula: false,
    cancel: false,
    // 图片的src
    image_src_list: [
      "../images/0.png",
      "../images/1.png",
      "../images/2.png",
      "../images/3.png",
      "../images/4.png",
      "../images/5.png",
      "../images/6.png",
      "../images/7.png",
      "../images/8.png",
      "../images/9.png",
      "../images/+.png",
      "../images/-.png",
      "../images/x.png",
      "../images/=.png"
    ],
    // 后端返回的算式识别结果
    input : "3+2+1=6"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 根据传过来的字符串显示正确的算式

  },
  // 拍照函数
  callCamera: function() {
    wx.navigateTo({
      url: '../camera/camera',
    })
  },
  // 调用相册函数
  callPhoto: function() {
    wx.chooseImage({
      count: 0,
    })
  },
  callMenu: function() {
    this.setData({
      isFormula: true
    })
  },
  cancel: function() {
    this.setData({
      isFormula: false
    })
  }
})