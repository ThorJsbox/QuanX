/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#宠儿解锁VIP无限看
^http[s]?:\/\/(.+)\.(zcg170|esz-wine)\.(cn|com)\/apix\/.+ url script-request-header cer.js

[mitm]
hostname = cr02.esz-wine.com,*.zcg170.cn

宠儿下载地址
http://8c25.xyz/code/T2ETM1

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['user_id'] = '3271685';
modifiedHeaders['token'] = 'C6w1ZPiXUHvPgzFSqS7TItcIDdRevOST';
modifiedHeaders['device_id'] = 'fc57b75d8e176dbb4e4a38d003954acfaf90e2aa';

$done({headers : modifiedHeaders});
