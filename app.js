const Core = require('./utils/core.js');
const util = require('./we7/resource/js/util.js');

App({
	Core,
	siteInfo: require('siteinfo.js'),
	util,

	settings: null,
	getSettings: function (callback) {
		if (this.settings && typeof this.settings === "object") {
			return callback(this.settings);
		}

		util.request({
			url: 'entry/wxapp/getsettings',
			data: {
				m: 'weapp_goupibutong'
			},
			success: res => {
				var d = res.data.data;
				this.settings = d;
				callback(d);
			}
		})
	},
	ads: null,
	getAds: function (callback) {
		if (this.ads && typeof this.ads === "object") {
			return callback(this.ads);
		}

		util.request({
			url: 'entry/wxapp/getads',
			data: {
				m: 'weapp_goupibutong'
			},
			success: res => {
				var d = res.data.data;
				this.ads = d;
				callback(d);
			}
		})
	},
	/**
	 * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
	 */
	onLaunch: function () {
		
	},

	/**
	 * 当小程序启动，或从后台进入前台显示，会触发 onShow
	 */
	onShow: function (options) {
		
	},

	/**
	 * 当小程序从前台进入后台，会触发 onHide
	 */
	onHide: function () {
		
	},

	/**
	 * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
	 */
	onError: function (msg) {
		
	}
})
