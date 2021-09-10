/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#TIT解锁VIP无限看
^https:\/\/api\.ojbk123\.com\/major-api\/.+ url script-request-header https://6678888.xyz/quantumultX/tit.js


[mitm]
hostname = api.ojbk123.com

tit下载地址
http://lad.pegqur.space/codeshare/original-initial-100/akr1ql?channel=original-initial-100&invite=akr1ql&img=https://imc.xwnvz.com/znm6ckiam03ih/v1/xswl/bbyy-pro/2980faee44e4000/2980faee44e40000.jpg

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['jwt-token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxODY5MDczNTMxODA5NzUxMDQiLCJwYXlBY2NvdW50SWQiOjE4NjkwNzM1MzM0NDM3NjgzMiwiYWRtaW5Vc2VyTmFtZSI6IiIsImRyaXZlciI6ImlvcyIsInYiOiIiLCJleHAiOjE2MjY3MDY0NzYsImRldmljZS1pZCI6IjJmNmVmNzBkM2Y5ODRmZjQ4MDk5ZWQ1MWQ2YjkxOGEzIiwiaWF0IjoxNjI2MTAxNjc2fQ.NJfKo7j1k-I_GuJ7x4Dw2TpVJJCja-4gLN2lcB8k4Zs';
modifiedHeaders['device-id'] = '2f6ef70d3f984ff48099ed51d6b918a3';

$done({headers : modifiedHeaders});
