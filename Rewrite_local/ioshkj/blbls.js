/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#50度灰解锁VIP无限看
^http:\/\/(.+)\.fiftymvapi\.(.+):8080\/api\.php\/api\/.+ url script-request-header https://6678888.xyz/quantumultX/50duh.js
^http:\/\/(.+)\.fiftymvapi\.(.+):8080\/api\.php\/api\/user\/userinfo url script-response-body https://6678888.xyz/quantumultX/50du.js
^https:\/\/m3u8\.91-tv\.me\/.+ url script-response-body https://6678888.xyz/quantumultX/50duh.js

[mitm]
hostname = *.fiftymvapi.*:8080

50度灰下载地址
http://club.i50dh.net/chan/h50269/G5yU

*/



var modifiedHeaders = $request.headers;


modifiedHeaders['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2MzE4MTk4MjEsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6MjM1ODk3Nn0.1peXn2QL6plgT20JLtDWU9txF8tQeTm7nDVI7GfspaE';

$done({headers : modifiedHeaders});
