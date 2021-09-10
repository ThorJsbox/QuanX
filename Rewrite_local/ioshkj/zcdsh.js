/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

#总裁读书会解锁会员
^http:\/\/www\.winnerbook\.com\.cn\/zcdshmobile\/.+ url script-response-body zcdsh.js

总裁读书会下载
http://www.winnerbook.com.cn/mobile/index.php?m=share&a=newshare&u=72814&book_id=0&ceo_id=0&type=1&chapter_id=0

[mitm]
hostname = www.winnerbook.com.cn
*/

var obj = JSON.parse($response.body);
obj.data.is_read = 1;
obj.data.is_exchange = 1;

$done({body: JSON.stringify(obj)}); 
