/** 
 * 对象是否为空
 *  */
const isEmptyObj = (obj) => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

/** 
 * 判断是否是数组
 *  */
const isArray = (arr) => {
    return Object.prototype.toString.call(arr) === '[object Array]'
}

/*
* 判断是否微信端浏览器
*
*/
const isWeiXin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    // mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}

/*检查身份证号码*/
const checkIdcard = (code) => {
    if (code.length != 18) {
        return false
    };
    //校验位
    let smallx = ['1', '0', 'x', '9', '8', '7', '6', '5', '4', '3', '2'];
    let bigX = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
    let parity;
    if (code[17] === 'x') {
        parity = smallx;
    } else {
        parity = bigX;
    };
    let city = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙古",
        21: "辽宁",
        22: "吉林",
        23: "黑龙江 ",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北 ",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏 ",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        91: "国外 "
    };
    let tip = "";
    let pass = true;
    let regs = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
    if (!code || !regs.test(code)) {
        tip = "身份证号格式错误";
        pass = false;
    } else if (!city[code.substr(0, 2)]) {
        tip = "地址编码错误";
        pass = false;
    } else {
        //18位身份证需要验证最后一位校验位
        if (code.length == 18) {
            code = code.split('');
            //∑(ai×Wi)(mod 11)
            //加权因子
            let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            let sum = 0;
            let ai = 0;
            let wi = 0;
            for (let i = 0; i < 17; i++) {
                ai = code[i];
                wi = factor[i];
                sum += ai * wi;
            }
            let last = parity[sum % 11];
            if (last != code[17]) {
                tip = "校验位错误";
                pass = false;
            }
        }
    };
    return pass;
}
// 数组转树 data:数据  parentId id 做好对应
const arrayToTree = (data,parentId,id)=>{
    data.sort((a,b)=>{
        return a[parentId]-b[parentId]
    })
    // 存储对象
    let midObj = {}
    // 从后向前遍历
    for(let i = data.length-1; i>=0; i--){
        let item = data[i]
        // 当前的父id
        let nowPid = item[parentId]
        // 当前id
        let nowId = item[id]
  
        // 建立当前节点的父节点的children数组
        // 如果父节点已经存在就往原数组中添加
        if(midObj[nowPid]){
            midObj[nowPid].push(item)
        }else {
            midObj[nowPid] = []
            midObj[nowPid].push(item)
        }
  
        // 将children放入合适的位置
        if(midObj[nowId]){
            item.children = midObj[nowId]
            delete midObj[nowId]
        }
    }
    data.filter((list)=>{
        return list[parentId] == 0
    })
    return data
  }

export default {
    isEmptyObj,
    checkIdcard,
    isWeiXin,
    isArray,
    arrayToTree
}
