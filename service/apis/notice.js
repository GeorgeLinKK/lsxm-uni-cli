//通知、公告、消息相关接口

import lsxmRequest from '../config.js'
export default{
	/*
	**  首页-获取平台通知列表
	*/
	GetPlatformInfomation(data){
		return lsxmRequest.post('HomePage/PlatformInfomation', data)
	},
	/*
	**  首页-获取平台通知详情
	*/
	GetPlatformInfomationDetail(data){
		return lsxmRequest.get('HomePage/GetPlatformInfomationDetailData', data)
	},
	/*
	**  获取公告列表
	*/
	GetPlatformBulletin(data){
		return lsxmRequest.post('HomePage/PlatformBulletin', data)
	},
	/*
	**  获取公告详情
	*/
	GetPlatformBulletinDetailData(data){
		return lsxmRequest.get('HomePage/GetPlatformBulletinDetailData', data)
	},
	/*
	**  获取系统消息列表
	*/
	GetNoticeCenterData(data){
		return lsxmRequest.post('Client/GetNoticeCenterData', data)
	},
	/*
	**  获取回收站列表
	*/
	GetNoticeRecycleBinData(data){
		return lsxmRequest.post('Client/GetNoticeRecycleBinData', data)
	}
}