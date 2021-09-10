/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#神话解锁
^https:\/\/shapi\.ysqhds\.com\/api\/video\/user\/data url script-response-body shenhua.js

[mitm]
hostname = shapi.ysqhds.com

神话：（任意手机号注册即可）
https://shzb.live

*/

let obj = JSON.parse($response.body);
obj = {
  "code": 200,"msg": "成功"
};

$done({body: JSON.stringify(obj)});
