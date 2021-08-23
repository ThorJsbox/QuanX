/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#麻豆解锁VIP无限看
^https:\/\/(api|2-api)\.(md-ddd1|md-ddd2|md-ddd3|md-ddd4|yousuilife)\.com\/api\/web\/.+ url script-request-header madou.js

[mitm]
hostname = api.md-ddd1.com,api.hbytfdj.com,2-api.yousuilife.com,api.md-ddd2.com,api.md-ddd3.com,api.md-ddd4.com,

麻豆下载地址
http://share.mfg8yxoxhw.club/api/open/video/share/default.html?a=47v38u&b=4&t=0exmu

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['X-Auth-Token'] = 'TIA:12446372:4b60bc76e21b36a31885fcd061b4af1c';
modifiedHeaders['Cookie'] = '__cfduid=dc73ae0a54d5f08f1842a2d93be0e7efc1618134505';

$done({headers : modifiedHeaders});
