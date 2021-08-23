/*
微信公众号：ios黑科技
官方网站；s7aa.cn
此规则由 Aoyt 提供，谢谢

QX:
[rewrite_local]
#百丽宫解锁VIP
^http?:\/\/1\.blg\d{3}\.xyz\/api\/(video\/index\/details|user\/profile\/index|user\/Profile\/index) url script-response-body https://6678888.xyz/quantumultX/blg.js

[mitm]
hostname = 1.blg\d{3}.xyz

下载地址：（需自签或越狱）
https://hkj.lanzous.com/ie7zAnexo2b

网页版：（无证书可使用网页版）
http://1.blg579.xyz

*/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const p1 = '/api/video/index/details';
const p2 = '/api/user/profile/index';
const p3 = '/api/user/Profile/index'



if (url.indexOf(p1) != -1) {
	obj.d.category.access = "all";
     obj.d.watch_data.remaining_watch_time = 999;
     obj.d.video.advertisement_status = "N";
     obj.d.advertisement.top.target = "N";
	body = JSON.stringify(obj);
 }

if (url.indexOf(p2) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

if (url.indexOf(p3) != -1) {
	obj.d.user_is_member = "Y";
     obj.d.user_is_agency = "Y";
     obj.d.user_download_count = 9999;
     obj.d.user_tv_count = 9999;
     obj.d.user_member_expire_time = 16179476940;
	body = JSON.stringify(obj);
 }

$done({body});
