/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X：
[rewrite_local]
#万兴喵影解锁会员
^https:\/\/www\.shencut\.com\/api\/.+\/user\/profile url script-response-body wxmiaoy.js

[mitm]
hostname= = www.shencut.com

#下载地址：
https://apps.apple.com/cn/app/id1403729127
*/

var obj = JSON.parse($response.body);

obj.data.vip_type = 3;
obj.data.endtime = 4092647115;
obj.data.ecommerce_vip_type = 3;
obj.data.ecommerce_endtime = 4092647115;


$done({body: JSON.stringify(obj)}); 
