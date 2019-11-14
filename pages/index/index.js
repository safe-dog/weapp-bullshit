// pages/index/index.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		input: '',
		result: '',
		share_img: '',
		share_txt: '',
		ad01: '',
		logo: 'https://qsy.xiaoshenma.cn/attachment/images/2/2019/11/Y7ldDOQv61sL75sGyyv7OgIiIqlgdO.jpg'
	},

	copyHandler: function () {
		wx.setClipboardData({
			data: this.data.result,
			success: () => {
				wx.showModal({
					title: '复制成功！',
					content: '别忘了转发给朋友一起分享哦！',
				})
			}
		});
	},

	startInput: function (e) {
		this.setData({
			input: e.detail.value
		});
	},

	startGen: function () {
		if (!this.data.input) return;
		const data = getApp().Core.GenText(this.data.input);
		this.setData({
			result: data.join("\n")
		});
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		getApp().getSettings(data => {
			const settings = data.settings;
			if (settings['logo']) {
				this.setData({
					logo: data.attachurl + settings['logo']
				})
			}
			if (settings['title']) {
				wx.setNavigationBarTitle({
					title: settings['title'],
				})
			}
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

			// 关键字
			if (settings['keywords']) {
				const ks = settings['keywords'].split(',');
				if (ks.length === 0) return;

				var k = ks[parseInt(Math.random() * 2)];
				if (!k) k = ks[0];

				this.setData({
					input: k
				});

				this.startGen();
			}
		});

		// 获取广告
		getApp().getAds(data => {
			console.log('data=', data);
			if (!data) return;
			if ((data['enabled'] === 0) || (data['enabled'] === '0')) return;
			this.setData({
				ad01: data.ad01
			});
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
		if (this.data.result) {
			title = '一秒写了个关于' + this.data.input+'的文章，厉害吧！';
		}

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