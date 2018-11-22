
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


/**
 * 兼容微信设置页面的title
*/
const setDocumentTitle = (title) => {
    document.title = title
    let ua = navigator.userAgent
    if (/\bMicroMessenger\/([\d.]+)/.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
        var i = document.createElement('iframe')
        i.src = '/favicon.ico'
        i.style.display = 'none'
        i.onload = function () {
            setTimeout(function () {
                i.remove()
            }, 10)
        }
        document.body.appendChild(i)
    }
}


/**
 * 数组随机
 */
const randomArray = (array, num) => {
    let _arr = array
    let _temp = []
    let _result = []
    let _len = _arr.length
    let n = num < _len ? num : _len
    while (n-- > 0) {
        let _index = Math.random() * _len | 0
        _result[n] = _temp[_index] || _arr[_index]
        --_len
        _temp[_index] = _temp[_len] || _arr[_len]
    }
    return _result
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy(obj, cache = []) {
    // just return if obj is immutable value
    if (obj === null || typeof obj !== 'object') {
        return obj
    }

    // if obj is hit, it is in circular structure
    const hit = find(cache, c => c.original === obj)
    if (hit) {
        return hit.copy
    }

    const copy = Array.isArray(obj) ? [] : {}
    // put the copy into cache at first
    // because we want to refer it in recursive deepCopy
    cache.push({
        original: obj,
        copy
    })

    Object.keys(obj).forEach(key => {
        copy[key] = deepCopy(obj[key], cache)
    })

    return copy
}
/*
* 判断是否微信端浏览器
*
*/
const isWeiXin = () => {
    var ua = window.navigator.userAgent.toLowerCase();
    //console.log(ua);
    // mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}



/**
 * js将http的资源换成https的
 */
const imgHttpsSrc = function (imgUrl) {
    if (!imgUrl || typeof (imgUrl) != 'string' || imgUrl == '' || imgUrl.replace(/^\s+|\s+$/g, '') == '') {
        return ''
    }
    const httpsMap = {
        '//idux3ew.qiniudns.com': '//cdn.suibianyuming.com.cn',
        '//iduxm45.qiniudns.com': '//cdn.suibianyuming.com.cn',
        '//iduxf21.qiniudns.com': '//p1.suibianyuming.com.cn',
        '//7xo3u7.com1.z0.glb.clouddn.com': '//p3.suibianyuming.com.cn',
        '//7xo3u7.v1.com.z0.glb.qiniudns.com': '//p3.suibianyuming.com.cn',
        '//iduvlp1.qiniudns.com': '//p4.suibianyuming.com.cn',
        '//iduvlp2.qiniudns.com': '//p5.suibianyuming.com.cn',
        '//iduwq5z.qiniudns.com': '//p7.suibianyuming.com.cn',
        '//iduwky2.qiniudns.com': '//p1.suibianyuming.com.cn',
        '//7xp28h.com1.z0.glb.clouddn.com': '//p1.suibianyuming.com.cn',
        '//7xog32.com1.z0.glb.clouddn.com': '//p4.suibianyuming.com.cn',
        '//7xp9pg.com1.z0.glb.clouddn.com': '//p5.suibianyuming.com.cn',
        '//7xt1hu.com1.z0.glb.clouddn.com': '//p7.suibianyuming.com.cn',
        '//7xt1hu.com2.z0.glb.clouddn.com': '//p7.suibianyuming.com.cn',
        '//7xt1hu.com2.z0.glb.qiniucdn.com': '//p7.suibianyuming.com.cn',
        '//7xp5tt.com1.z0.glb.clouddn.com': '//p8.suibianyuming.com.cn',
        '//o9o8tynkc.bkt.clouddn.com': '//p10.suibianyuming.com.cn',
        '//7xuy7v.com1.z0.glb.clouddn.com': '//cdn.suibianyuming.com.cn',
        '//7xuy7v.com2.z0.glb.clouddn.com': '//cdn.suibianyuming.com.cn',
        '//7xuy7v.com2.z0.glb.qiniucdn.com': '//cdn.suibianyuming.com.cn',
        // '//p.0gow.com': '//p.0gow.com',
        '//p1.0gow.com': '//p1.suibianyuming.com.cn',
        // '//p2.0gow.com': '//p2.0gow.com',
        '//p3.0gow.com': '//p3.suibianyuming.com.cn',
        '//p4.0gow.com': '//p4.suibianyuming.com.cn',
        '//p5.0gow.com': '//p5.suibianyuming.com.cn',
        '//p5.0gowang.com': '//p5.suibianyuming.com.cn',
        // '//p6.0gow.com': '//p6.0gow.com',
        '//p7.0gow.com': '//p7.suibianyuming.com.cn',
        '//p8.0gow.com': '//p1.suibianyuming.com.cn',
        // 新增域名替换部分
        '//ojn8uqheg.qnssl.com': '//cdn.suibianyuming.com.cn',
        '//ojn89n2tq.qnssl.com': '//p1.suibianyuming.com.cn',
        '//ojn98tluc.qnssl.com': '//p3.suibianyuming.com.cn',
        '//ojn81nujc.qnssl.com': '//p4.suibianyuming.com.cn',
        '//ojn9dd5la.qnssl.com': '//p5.suibianyuming.com.cn',
        '//ojn8rdkav.qnssl.com': '//p7.suibianyuming.com.cn',
        '//oj1k43q6b.qnssl.com': '//p8.suibianyuming.com.cn',
        '//oj1k5v8zt.qnssl.com': '//p10.suibianyuming.com.cn',
    }
    const HTTP_HEAD = /http(s)?:+/gi
    imgUrl = imgUrl.replace(HTTP_HEAD, '')
    // 遍历数组比较
    // 这个比下面的执行效率快一些
    for (var k in httpsMap) {
        if (imgUrl.indexOf(k) !== -1) {
            var val = httpsMap[k];
            var regExp = new RegExp(k, 'gim')
            imgUrl = imgUrl.replace(regExp, val)
        }
    }
    // 获取域名
    // const hostname = imgUrl.match(/\/\/[^\/\?#:]+/)[0]
    // if (httpsMap[hostname]) {
    //   var val = httpsMap[hostname];
    //   var regExp = new RegExp(hostname, 'gim')
    //   imgUrl = imgUrl.replace(regExp, val)
    // }

    // 七牛优化
    const isCDN = /qnssl.com/gi
    const isSupportWebp = supportWebp()
    if (imgUrl.indexOf('?imageMogr2/thumbnail/') !== -1 || imgUrl.indexOf('?imageMogr2/') !== -1) {
        const QINIU_PARAM = /\/quality\/\d\d\/format\/(jp(e)?g|png|gif|webp)/gi
        if (isSupportWebp) {
            // 此处添加webp格式替换
            // \?imageMogr2\/thumbnail\/\d{2,4}\/strip\/quality\/\d{1,3}\/format\/(png|jp(e)?g|gif)
            const QINIU_WEBP = /\/quality\/\d{1,3}\/format\/(jp(e)?g|png|gif)/gi
            imgUrl = imgUrl.replace(QINIU_WEBP, function (word1, word2) {
                return word1.replace(word2, 'webp')
            })
            // webp测试（暂）瘦身参数是否添加没有区别，部分添加反而变大
        } else {
            imgUrl = imgUrl.replace(QINIU_PARAM, '$&|imageslim')
        }
    } else if (isCDN.test(imgUrl)) {
        const QINIU_PARAM = /.(jp(e)?g|png|gif|webp)/gi
        // webp处理
        if (isSupportWebp) {
            imgUrl = imgUrl.replace(QINIU_PARAM, '$&?imageMogr2/format/webp')
        } else {
            imgUrl = imgUrl.replace(QINIU_PARAM, '$&?imageslim')
        }
        // imgUrl += '?imageslim'
    }
    return imgUrl
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

// 获取滚动高度
const getScrollTop = () => {
    var  scrollTop  =  document.documentElement.scrollTop || document.body.scrollTop;
    return  scrollTop;
}

// 设置滚动高度
const setScrollTop = (scroll_top) => {
    document.documentElement.scrollTop  =  scroll_top;
    document.body.scrollTop  =  scroll_top;
    console.log(document.body.scrollTop)
}

export default {
    isEmptyObj,
    getScrollTop,
    setScrollTop,
    checkIdcard,
    imgHttpsSrc,
    isWeiXin,
    deepCopy,
    randomArray,
    setDocumentTitle,
    isArray
}
