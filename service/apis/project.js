//项目相关接口

import lsxmRequest from '../config.js'
export default{
	/*
	**  首页-获取项目列表
	*/
	GetPlatformLetData(data){
		return lsxmRequest.post('HomePage/GetPlatformLetData', data)
	},
	
	/*
	**  标的详情-浏览次数增+1
	*/
	AddBrowseTime(data){
		return lsxmRequest.get('HomePage/AddBrowseTime', data)
	},
	
	/*
	**  标的详情-获取标的详细数据
	*/
	GetPlatformLetDetailData(data){
		return lsxmRequest.get('HomePage/GetPlatformLetDetailData', data)
	},
	
	/*
	**  标的详情-获取标的详细数据
	*/
	DownLoadFileByApi(data){
		return lsxmRequest.get('BasicData/Attachment/DownLoadFileByApi', data)
	},
	
	/*
	**  获取竞价报名列表
	*/
	GetBidAppData(data){
		return lsxmRequest.post('BidApp/GetBidAppData', data)
	},
	/*
	**  获取报名进度列表
	*/
	GetAppProgressData(data){
		return lsxmRequest.post('BidApp/GetAppProgressData', data)
	}
}