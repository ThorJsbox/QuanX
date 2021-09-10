/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#涩里番VIP视频无限看
^http:\/\/api-01\.apiselifan11\.com\/cxapi\/.+ url script-request-header https://6678888.xyz/quantumultX/slfan.js

[mitm]
hostname = api-01.apiselifan11.com

涩里番下载地址
https://slf506.com?_s=SCPGEF 

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['uid'] = '3092806';
modifiedHeaders['token'] = '90d44e34f308d1cb9a538fd4c3d0ca0e';

$done({headers : modifiedHeaders});
