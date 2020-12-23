// pages/practice/practice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    doneNum: 1,
    allNum: 10,
    formulaList: ["5+3", "4+9","3+1", "2+8", "1+8", "8+7", "9+5", "5+8", "9+6", "6+7"],
    doneList: [8, 13, 4, 10, 9, 15, 14, 13, 15, 13],
    formula: "",
    reasult: 0,
    reasultList: [],
    viewText: "下一题",
    content: "",
    focus: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      formula: this.data.formulaList[0]
    });
    wx.setStorage({
      data: this.data.doneList,
      key: 'doneList',
    });
    wx.setStorage({
      data: this.data.formulaList,
      key: 'formulaList',
    })
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
      // 将结果存入缓存
      wx.setStorage({
        data: that.data.reasultList,
        key: "reasultList",
      })
      wx.navigateTo({
        url: '../../pages/practiceReasult/practiceReasult',
      })
    }else if(this.data.doneNum === 9) {
      that.setData({
        viewText: "完成",
        doneNum: parseInt(that.data.doneNum) + 1,
        formula: this.data.formulaList[parseInt(that.data.doneNum)],
        reasultList: reasultList
      });
    } 
    else {
      this.setData({
        doneNum: parseInt(that.data.doneNum) + 1,
        formula: this.data.formulaList[parseInt(that.data.doneNum)],
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
  // input聚焦
  change: function(){
    this.setData({
      focus: true
    })
  }
})