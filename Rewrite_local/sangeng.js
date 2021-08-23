/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#三更解锁VIP无限看
^http[s]?:\/\/api.(.+).(buzz|com)\/api\/user\/voucher url reject-200
^http[s]?:\/\/api.(.+).(buzz|com)\/api\/.+  url script-request-header https://6678888.xyz/quantumultX/sangeng.js

[mitm]
hostname = api.txt2021.buzz,api.kaqcn.com

三更下载地址
https://blwtgwe.cn/5858489?tmp=dy&dir=0

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['seq'] = 'B08EA77B-D13C-4977-B420-A613A1149783';

modifiedHeaders['User-Agent'] = 'FourInOne/3.3.3 (iPhone; iOS 13.5; Scale/2.00)';

modifiedHeaders['token'] = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyXzU4NTg0ODkiLCJleHAiOjE5MzI4MDU4NzN9._OMLgq-wKEpXwI9t1WJBX_-Pn9aIskrxjoVZo6zXAGY5xbklc6RUd7skCdadyhAMzsKZCmtLm2FxFgHrXoZg7w';

$done({headers : modifiedHeaders});
