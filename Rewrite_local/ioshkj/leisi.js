/*
微信公众号：ios黑科技
官方网站：ivapp.cn

QX:

#蕾丝解锁VIP会员无限看
^http:\/\/kfjdmjg\.com\/api\/v2\/user url script-response-body leisi.js

蕾丝下载地址
http://www.lssp4.xyz

[mitm]
hostname = kfjdmjg.com
*/

let obj = JSON.parse($response.body);
obj = {"id":123456789,"name":"ios黑科技","email":null,"phone":null,"bio":null,"sex":0,"location":null,"invite_code":"33K8FS","avatar":null,"bg":null,"feed_topics_count":0,"extra":{"user_id":123456789,"likes_count":0,"comments_count":0,"followers_count":0,"followings_count":0,"updated_at":"2021-06-04T12:15:35Z","feeds_count":0,"checkin_count":0,"last_checkin_count":0,"be_reward_count":0},"verification":null,"currency":{"owner_id":123456789,"type":1,"sum":5},"wallet":{"owner_id":123456789,"balance":0,"total_income":0,"total_expenses":0},"has_follower":false,"has_following":false,"created_at":"2021-06-04T12:15:35Z","updated_at":"2021-06-04T12:15:35Z","commodities_count":0,"vip":{"level":"tall","end_time":"2099-09-09T12:15:35Z","name":"ios黑科技"}}
;

$done({body: JSON.stringify(obj)});
