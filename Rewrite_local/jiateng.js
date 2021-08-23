/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#加藤视频VIP付费无限看
^https:\/\/api\..+\.cc\/shorter\/(user\/getUser|user\/homePage|user\/homePageExt|video\/hot\/list|home\/list|resource\/getWindowNotice) url script-response-body jiateng1.js

加藤下载地址
https://www.sanminnongye.com/?invitationCode=UG3P2H



MITM = api.*.cc
*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

body=body.replace(/userVip":\d/g,'userVip":1').replace(/expiredTime":\d+/g,'expiredTime":4092647115000').replace(/isVip":\d/g,'isVip":0').replace(/nickname":.+?,/g,'vip_end_date":"ios黑科技",').replace(/isCharge":\d/g,'isCharge":0').replace(/content":.+?,/g,'content":"关注微信公众号：ios黑科技<br>官方网站：s7aa.cn",');


$done({body});
