/*
微信公众号： ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#69视频解锁会员无限看
^http:\/\/69shipin\.vip\/api\/user\/personal url script-response-body 69sp.js
^http:\/\/69shipin\.vip\/api\/community\/edit url response-body "code":\d+ response-body "code":200

[mitm]
hostname = 69shipin.vip

69视频下载地址：（有点卡，打开缓慢，无需注册）
http://app.exxanz.com/?code=TSU8RM
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const us = '/user/personal';


if (url.indexOf(us) != -1) {
    obj.data.vip = 1;
    obj.data.vip_time = "2099-09-09 09:09:09";
    obj.data.nickname = "ios黑科技";
    obj.data.vip_ymd = "2099-09-09";
    obj.data.huancun_count = 5201314;
    body = JSON.stringify(obj);
} 
$done({body});
