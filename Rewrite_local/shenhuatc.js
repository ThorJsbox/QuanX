/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:
[rewrite_local]
#神话解锁
^https:\/\/shapi\.ysqhds\.com\/api\/video\/user\/data url script-response-body shenhua.js

[mitm]
hostname = shapi.ysqhds.com

神话：（任意手机号注册即可）
https://shzb.live

*/

let obj = JSON.parse($response.body);
obj = {
  "code": 200,
  "data": "A8iFBat3NQoV+39zwBsAiYE0EOFzE9MeyaVqWrkhcBTc+RSodswJUoKq1YSp6FXow62qm4SgKjPIABO5F6lQkiiJ+s87Gtzk/iMeWYFFT19//zXYwbbA86MQ8oAjGhLLhfYNf7Nx/oJvG4doLJxjo/fHH7wFNVL+fUSLTfSDX//HalJOYHYhkKSJ3uO+CYf/85RZh5jMhBuqt8+hqsrGNDQOdOxX+eh0jpZKHpjuNJZJZnNLe4mOB3yO2GBh1jNrGQOsh3kUG1mTVpZGG+BHSQXFzskEWIL4rF2Nmi+zHUko9vF2FGFe7I6jXIlCeyveJJ66YcXWIPN+yaV9KXHIr21U+8x/evm/e9RSQ2uL0aYrT0ajqZk4jSdHy+QiRJOwVWch5m6BU0l2bC3HtPqWCVLbZLGhexJqMFVPzC8WHsE=",
  "msg": "成功"
};

$done({body: JSON.stringify(obj)});
