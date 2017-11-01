var url = "https://wx.circuits.top/mryt/json.php";

var GetList = function (that) {
  wx.request({
    url: url,
    success: function (res) {
      //console.info(that.data.list);
      var list = that.data.list;
      for (var i = 0; i < res.data.list.length; i++) {
        list.push(res.data.list[i]);
      }
      that.setData({
        list: list
      });
    }
  });
}
Page({
  data: {
    list: [],
    scrollTop: 0,
    scrollHeight: 0
  },
  onLoad: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.info(res.windowHeight);
        that.setData({
          scrollHeight: res.windowHeight
        });

        GetList(that);
      }
    });
  }
})
