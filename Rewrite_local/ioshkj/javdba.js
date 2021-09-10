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


var modifiedHeaders = $request.headers;

modifiedHeaders['authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJpZCI6OTgwNDk5LCJ1c2VybmFtZSI6Imlvc2hrajEifQ.0lMg96NyeqTl6hJBcRAGlFynaW_GxUaV4iozIPpaJSI';

$done({headers : modifiedHeaders});
