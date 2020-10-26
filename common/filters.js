//资产类型
const bidTypeFilter = function(val){
	switch(val){
		case 1:
			return '店面';
			break;
		case 2:
			return '厂房';
			break;
		case 3:
			return '土地';
			break;
		case 4:
			return '写字楼';
			break;
		case 5:
			return '机械设备';
			break;
		case 6:
			return '其他';
			break;
		case 7:
			return '林场';
			break;
		default:
			return '未注明';
			break;
	}
}
//竞价结果
const bidResultFilter = function(val){
	if(val == 0){
		return '流标'
	}else if(val == 1){
		return '中标'
	}else{
		return ''
	}
}
//资格审核状态
const qualAuditFilter = function(val){
	if(val == 0){
		return '流标'
	}else if(val == 1){
		return '中标'
	}else{
		return ''
	}
}

//保证金审核状态
const siteAuditFilter = function(val){
	if(val == 0){
		return '未支付'
	}else if(val == 1){
		return '支付中'
	}else if(val == 2){
		return '待审核'
	}else if(val == 3){
		return '已通过'
	}else if(val == 4){
		return '不通过'
	}else if(val == 5){
		return '已退还'
	}else{
		return ''
	}
}
export default{
	bidTypeFilter,
	bidResultFilter,
	siteAuditFilter,
	qualAuditFilter
}