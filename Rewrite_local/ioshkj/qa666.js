/*
微信公众号：ios黑科技
官方网站：s7aa.cn

圈X:

[rewrite_local]

#QA666解锁VIP无限看
^https:\/\/qa666\.xyz\/.+ url script-request-header https://6678888.xyz/quantumultX/qa666.js

[mitm]
hostname = qa666.xyz

QA666下载地址
https://qa666.xyz?tg=1959655

*/


var modifiedHeaders = $request.headers;

modifiedHeaders['Cookie'] = '__ty_cpvx_b_5328_cpv_plan_ids=%7C164%7C%7C176%7C; __ty_cpvx_b_5328_cpv_plan_uids=%7C3582%7C%7C7958%7C; __ty_cpvx_t_4968_cpv_plan_ids=%7C176%7C%7C151%7C%7C178%7C%7C135%7C; __ty_cpvx_t_4968_cpv_plan_uids=%7C7958%7C%7C298%7C%7C10089%7C%7C64%7C; user_id=1959655; __ty_cpvx_b_1743_cpv_plan_ids=%7C20%7C%7C6%7C%7C3%7C%7C15%7C%7C32%7C%7C30%7C; __ty_cpvx_b_1743_cpv_plan_uids=%7C11%7C%7C7%7C%7C6%7C%7C10%7C%7C2297%7C%7C1536%7C; __ty_cpvx_t_1702_cpv_plan_ids=%7C15%7C%7C6%7C%7C20%7C%7C32%7C%7C3%7C; __ty_cpvx_t_1702_cpv_plan_uids=%7C10%7C%7C7%7C%7C11%7C%7C2297%7C%7C6%7C; UBGLAI63GV=mftpa.1627671172';
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_4_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1';

$done({headers : modifiedHeaders});
