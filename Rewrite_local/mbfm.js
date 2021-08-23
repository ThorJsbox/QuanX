/*
微信公众号： ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#面包FM解锁会员
^http:\/\/wx\.voxpie\.com\/(api/fmapp_user|api/fmapp_bookinfo) url script-response-body mbfm.js

[mitm]
hostname = wx.voxpie.com

下载地址
https://apps.apple.com/cn/app/id1406687423

*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/is_vip":\d/g,'is_vip":1').replace(/vip_start_date":.+?,/g,'vip_start_date":"至尊会员",').replace(/vip_end_date":.+?,/g,'vip_end_date":"永久畅听",').replace(/nickname":.+?,/g,'nickname":"ios黑科技",').replace(/profile":.+?,/g,'profile":"关注微信公众号:ios黑科技",').replace(/pay_status":"\w+/g,'pay_status":"free');


$done({body});