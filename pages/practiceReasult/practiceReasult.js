// pages/practiceReasult/practiceReasult.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    anwser: [],
    done: [],
    formula: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.load()
  },
// 退出练习函数
continue: function(){
  wx.navigateTo({
    url: '../../pages/index/index',
  })
},
  load: function() {
    let that = this;
    wx.getStorage({
      key: 'doneList',
      success(res) {
        that.setData({
          anwser: res.data
        })
      }
    });
    wx.getStorage({
      key: 'reasultList',
      success(res) {
        that.setData({
          done: res.data
        })
      }
    });
    wx.getStorage({
      key: 'formulaList',
      success(res) {
        that.setData({
          formula: res.data
        })
      }
    });
  }
})