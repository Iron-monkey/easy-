Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 预览图片的地址
    img_src: "",
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
  // 图片选择
  callPhoto: function() {
    let that = this;
    wx.chooseImage({
      count: 1,
      success(result) {
        const tempFilePath = result.tempFilePaths;
        that.setData({
          img_src: tempFilePath
        })
      }
    })
  }
})