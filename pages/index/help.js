// pages/index/help.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		share_img: '',
		share_txt: '',
	},

	openApp: function () {
		wx.navigateToMiniProgram({
			appId: 'wx0ebe09d70fd97178',
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		getApp().getSettings(data => {
			const settings = data.settings;
			// 转发
			if (settings['share_img']) {
				this.setData({
					share_img: data.attachurl + settings['share_img']
				})
			}

			if (settings['share_txt']) {
				this.setData({
					share_txt: settings['share_txt']
				})
			}

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
		var title = '智能AI技术无关的一键文章生成器！';
		if (this.data.share_txt) {
			title = this.data.share_txt;
		}

		let imageUrl = 'https://qsy.xiaoshenma.cn/attachment/images/2/2019/11/M4hJ83RmPCZzm3p844M88u184M7Ze8.jpg';
		if (this.data.share_img) {
			imageUrl = this.data.share_img;
		}
		return {
			title,
			path: '/pages/index/index',
			imageUrl
		}
	}
})