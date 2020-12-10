// pages/animation/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  change: function() {
    let animation = wx.createAnimation({
      // 动画延迟时间
      delay: 0,
      // 动画持续时长
      duration: 2000,
      // 动画是线性的还是非线性
      timingFunction: 'ease',
    })

    // 实例化动画对象，给对象赋值，让他动起来
    animation.translate(-80).scale(0.3).step();
    this.setData({
      ani: animation.export()
    })
  }
})