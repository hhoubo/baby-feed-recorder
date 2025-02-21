//logs.js
const util = require('../../utils/util.js')
const app = getApp(); 
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  tabbarOnChange: function (e) {
    app.tabbarOnChange(e);
  }
})
