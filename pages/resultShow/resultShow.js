// pages/resultShow/resultShow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_preview_src: "",
    // 批改显示内容的数据
    formula: "",
    result: ""
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
  },
  // 批改作业按钮
  getIt: function () {
    const that = this;
    //将图片上传到服务器
    wx.uploadFile({
      filePath: that.data.img_preview_src,
      name: 'imgSrc',
      url: 'http://127.0.0.1:8000/upload',
      success: function(res) {
        console.log("图片上传成功" + res);
      },
      fail: function(res) {
        console.log("图片上传失败" + res);
      }
    });
    // 重新请求获取数据
    wx.request({
      url: 'http://127.0.0.1:8000/',
      success(result) {
        const info = result.data;
        that.setData({
          formula: info,
          result: info
        });
      },
      fail: function(fal) {
        console.log(fal);
      }
    })
  }
})