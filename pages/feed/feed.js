// pages/feed/feed.js
var now = new Date();
const dateFormat = { year: 'numeric', month: '2-digit', day: '2-digit'};
const timeFormat = {
  hour: '2-digit', minute: '2-digit', second: '2-digit',
  hour12: false
}

Page({

  /**
   * Page initial data
   */
  data: {
    now: now,
    date: now.toLocaleDateString("zh-Hans-CN"),
    time: now.toTimeString(),
    active: 0,
    startBtnDisabled: false,
    finishBtnDisabled: true,
    startTime: "",
    finishTime: "",
    radioBreast: "breastLeft",
    radioBottle: "milk"
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {
    let that = this;
    this.interval = setInterval(function () {
      var current = new Date();
      that.setData({
        now: current,
        date: current.toLocaleDateString("zh-CN"),
        time: current.toTimeString()
      });
    }, 1000);
  },
  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
    
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  /**
   * Switch the feed tabs
   */
  onChange(event) {
    // wx.showToast({
    //   title: `切换到 ${event.detail.index + 1}`,
    //   icon: 'none'
    // });
  },

  onFeedStart(event) {
    this.setData({
      startBtnDisabled: true, 
      finishBtnDisabled: false,
      startTime: this.data.time
      });
    console.log("start date:" + this.data.date);
    console.log("start time:" + this.data.time);
  },

  onFeedFinish(event){
    this.setData({ 
      startBtnDisabled: false, 
      finishBtnDisabled: true,
      
      finishTime: this.data.time
    });
  },

  onRadioBreastChange(event) {
    this.setData({
      radioBreast: event.detail
    })
  },
  onRadioBottleChange(event) {
    this.setData({
      radioBottle: event.detail
    })
  }
})