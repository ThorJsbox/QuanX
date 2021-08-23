/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#JAV解锁VIP会员
^https:\/\/yugedu\.com\/api\/v1\/movies\/(.+)\/play url script-request-header javdba.js

^https:\/\/yugedu\.com\/api\/v1\/movies\/.+ url response-body "success":\d+ response-body "success":1

^https:\/\/yugedu\.com\/api\/v1\/users url script-response-body javdbs.js

[mitm]
hostname = yugedu.com

JAV下载地址：（注册填写邀请码：s8rvea）
https://jcapnred.com/?source=s8rvea

*/


let obj = JSON.parse($response.body);
obj = {
  "success" : 1,
  "message" : null,
  "data" : {
    "user" : {
      "id" : 888888,
      "promotion_days" : 99999,
      "checkin_days" : 0,
      "want_watch_count" : 0,
      "promotion_code" : "s8rvea",
      "vip_expired_at" : "2099-09-09T22:16:31.000+08:00",
      "username" : "ios黑科技",
      "share_url" : "https://jcapnred.com/?source=s8rvea",
      "last_checkin_at" : null,
      "promote_users_count" : 5201314,
      "email" : "ioshkj@163.com",
      "is_vip" : true,
      "watched_count" : 0
    },
    "banner_type" : "payment"
  },
  "action" : null
}
;

$done({body: JSON.stringify(obj)});

