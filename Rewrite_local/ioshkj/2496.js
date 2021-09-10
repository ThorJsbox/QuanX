/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

#2496解锁会员
^http:\/\/api_2496\.kuwo\.cn\/front\/user\/vipstatus url script-response-body 2496.js

2496商店搜索下载

[mitm]
hostname = api_2496.kuwo.cn
*/

var obj = JSON.parse($response.body);
obj.data.expiration_time = "2099-09-09";
obj.data.vipstatus = 1;


$done({body: JSON.stringify(obj)}); 
