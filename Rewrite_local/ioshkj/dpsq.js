/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X
[rewrite_local]
#独品社区解锁会员
^http:\/\/lfwmkj\.com\/(api\/user\/personal|api\/community\/edit) url script-response-body https://6678888.xyz/quantumultX/dpsq.js

[mitm]
hostname= lfwmkj.com

独品社区下载地址：（任意号注册不限制，不收验证码）
邀请码：K4GPHE
https://pan.lanzou.com/s/seyou01
https://pan.lanzou.com/s/seyou02

*/



var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);


const p1 = '/api/community/edit';
const p2 = '/api/user/personal';


if (url.indexOf(p1) != -1) {
    obj = {
  "code": 200,
},
    body = JSON.stringify(obj);
} 
if (url.indexOf(p2) != -1) {
    obj.data.vip = 1,
    obj.data.vip_time = "2099-09-09 09:09:09",
    body = JSON.stringify(obj);
} 
$done({body});
