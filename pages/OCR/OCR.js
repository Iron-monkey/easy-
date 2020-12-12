// pages/OCR/OCR.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  // 选择图片函数
  choosePhoto: function() {
    // 先进行相机的动画
    let ani = wx.createAnimation({
      delay: 0,
      duration: 450,
      timingFunction: "ease"
    });
    ani.scale(1.15).step().scale().step();
    this.setData({
      ani: ani.export()
    });

    setTimeout(function() {
      const that = this;
    wx.chooseImage({
      count: 1,
      success(res) {
        // 将获取到的数据全部放到微信本地存储
        wx.setStorage({
          data: res.tempFilePaths[0],
          key: 'photo_src',
        });
        // 获取到数据后，转换页面
        wx.navigateTo({
          url: '../resultShow/resultShow'
        })
      }
    });
    }, 500);
  },

  // 识别历史函数
  ldentifyHistory: function() {
    wx.navigateTo({
      url: '../history/history',
    })
  }
})