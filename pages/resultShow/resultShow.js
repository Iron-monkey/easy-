// pages/resultShow/resultShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_preview_src: ""
  },

  onLoad: function () {
    this.getImg();
  },
  // 获取照片函数
  getImg: function () {
    let that = this;
    const src = wx.getStorage({
      key: 'photo_src',
      success(res) {
        console.log(res.data);
        that.setData({
          img_preview_src: res.data
        })
      }
    });
  },
  // 重新拍摄函数
  chooseImg: function () {
    let that = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        // 将获取到的数据全部放到微信本地存储
        wx.setStorage({
          data: res.tempFilePaths[0],
          key: 'photo_src',
        });
        that.getImg();
      }
    })
  }
})