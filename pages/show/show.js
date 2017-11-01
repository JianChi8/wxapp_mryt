Page({
  //https://wx.circuits.top/mryt/upload/
  data: {
    imgid: "9",
    showView: false,
    showAnswerButton: false,
    showAnswer: false
  },
  onChangeShowState:function () {
    var that = this;
    that.setData({
      showAnswer: true
    })
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      imgid: options.id,
      showView: (options.hasVioce == "1" ? true : false),
      showAnswerButton: (options.hasAnswer == "1" ? true : false)
    });
  }
})