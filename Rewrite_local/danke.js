/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#蛋壳解锁VIP无限看
^https:\/\/ipa\.angtrend\.com\/.+ url script-request-header danke.js


[mitm]
hostname = api.fiftymvapi.com:8080,m3u8.91-tv.me

蛋壳下载地址
https://dks.shantianwuyu.com/1/3378149.html


*/


var modifiedHeaders = $request.headers;

modifiedHeaders['User-Agent'] = 'dan ke/1.0 (iPhone; iOS 14.4.2; Scale/2.00)';

modifiedHeaders['uid'] = '3378149';

modifiedHeaders['Cookie'] = 'sec_tc=AQAAAIsdUiDJAggAda8XPbYRm3OO1Oa4';

modifiedHeaders['token'] = '7706a2958b2238afa26c8c3f7a299ada';


$done({headers : modifiedHeaders});
