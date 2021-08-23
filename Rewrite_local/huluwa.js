/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#葫芦娃解锁VIP无限看
^https:\/\/api-hlw\.(/d+))\.com\/api\/web\/.+ url script-request-header huluwa.js

[mitm]
hostname = api-hlw.*.com

葫芦娃下载地址
http://share.5heocbzxjnui.space/api/open/video/share/default.html?a=uv6c9m&b=1&t=0hiyom

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['X-Auth-Token'] = 'TIA:15889796:5840ca52c64a647995acea397673d3c3';
modifiedHeaders['X-Ad-Version'] = 'eyIxMSI6MjI1NCwiMTIiOjIwOTUsIjE1IjoyMDgwLCIxNiI6NjIyLCIxIjoyNzA4LCIyIjozOTA3LCIzIjoyNDI1LCI0IjoyNTUyLCI1IjoyNDE3LCI2IjoyMjkyLCI3IjozNTk3LCI4IjoyNjM2LCI5IjoyNTE0LCIzMCI6NzIsIjEwIjoyMzAxLCIyMSI6MjIwMH0=';
modifiedHeaders['Cookie'] = '__cfduid=d1aa5518fa8088a9e0fe50dc5aff0fa4b1618990305';
modifiedHeaders['X-Client-Identity'] = 'APP/11;uv6c9m;huluwa.com;3.0.0;3.2.22 SYS/iOS13.5;iPhone8,1;ios FM/Apple;iPhone8%2C1 SDI/6f3ae6d0847a49a994b311154a9c20dc NE/WIFI LANG/zh_CN';

$done({headers : modifiedHeaders});
