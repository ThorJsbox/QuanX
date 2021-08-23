

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/vip/v2/user/vip';
const time = '/vip/spi/mservice';

if (url.indexOf(vip) != -1) {
	obj.data["isNewUser"] = "2";
	obj.data["vipLuxuryExpire"] = "4092647115000";
	obj.data["time"] = "4092647115000";
	obj.data["isYearUser"] = "2";
	obj.data["vipmExpire"] = "4092647115000";
	obj.data["vipOverSeasExpire"] = "4092647115000";
	obj.data["vipExpire"] = "4092647115000";
	obj.data["vip3Expire"] = "4092647115000";
	body = JSON.stringify(obj);
}

if (url.indexOf(time) != -1) {
	obj["isVIPMAutoPay"] = 2;
	obj["isVIPLuxAutoPay"] = 2;
	body = JSON.stringify(obj);
}

$done({body});