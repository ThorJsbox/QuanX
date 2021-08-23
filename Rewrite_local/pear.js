/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#Pear雪梨解锁会员
^https:\/\/(cn.youku-ca.com|bkcd\.b-cdn.net|souhu.mett.me|m.pearkin.com|www.baidu.com2.club)\/(api\/movie\/WatchMovieNew|api\/account\/IsVip|api\/account\/IndexDetail) url script-response-body https://6678888.xyz/quantumultX/pear.js

[mitm]
hostname = bkcd.b-cdn.net,cn.youku-ca.com,souhu.mett.me,m.pearkin.com,www.baidu.com2.club
pear下载地址
https://www.pears.live?ivcode=DUJ7&t=20210504

*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const bf = '/api/movie/WatchMovieNew';

const vip = '/api/account/IsVip';

const user = '/api/account/IndexDetail';

if (url.indexOf(bf) != -1) {
	obj["canWath"] = "true";
	body = JSON.stringify(obj);
 }

if (url.indexOf(vip) != -1) {
	obj["data"] = "1";
   obj["value"] = "true";
	body = JSON.stringify(obj);
 }
if (url.indexOf(user) != -1) {
	obj["nickName"] = "ios黑科技";
   obj["vipLevel"] = "99";
   obj["vipEndTime"] = "2099-09-09";
   obj["cartoonVip"] = "true";
	body = JSON.stringify(obj);
 }
$done({body});
