// pages/practice/practice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doneNum: 1,
    allNum: 10,
    formula: "5+3",
    reasult: 0,
    reasultList: [],
    viewText: "下一题",
    content: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 当input失去焦点时保存结果
  saveReasult: function (e) {
    const value = e.detail.value;
    this.setData({
      reasult: value
    })
  },
  // 下一题函数
  nextFormula: function (e) {
    let that = this;
    const reasultList = this.data.reasultList;
    reasultList.push(parseInt(this.data.reasult));
    console.log(reasultList);
    if (this.data.doneNum === 10) {
      wx.navigateTo({
        url: '../../pages/practiceReasult/practiceReasult',
      })
    }else if(this.data.doneNum === 9) {
      that.setData({
        viewText: "完成",
        doneNum: parseInt(that.data.doneNum) + 1,
        reasultList: reasultList
      });
    } 
    else {
      this.setData({
        doneNum: parseInt(that.data.doneNum) + 1,
        reasultList: reasultList
      })
    }
    that.clear();

  },
  // 清空input组件内内容
  clear: function() {
    this.setData({
      content: ""
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