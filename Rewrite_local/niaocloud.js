/*
小鸟云签到
注册地址： https://niaoyun.fun//auth/register?code=JhLb
更新时间：2021-09-29
脚本兼容: QuantumultX, Surge,Loon, JSBox, Node.js
cookie 格式 uid=xx; email=xx; key=xx; ip=xx; expire_in=xx
#小鸟云
方式一
#export NIAO_CLOUD_COOKIES="cookie"
方式二
export NIAO_CLOUD_EMAIL="email"
export NIAO_CLOUD_PWD="pwd"

两种方式可以同时使用
=================================Quantumultx=========================
[task_local]
#小鸟云签到
9 10 * * * niaocloud.js, tag=小鸟云签到, img-url=https://z3.ax1x.com/2021/09/09/hOGgc8.png, enabled=true
=================================Loon===================================
[Script]
cron "9 10 * * *" script-path=niaocloud.js,tag=小鸟云签到
===================================Surge================================
小鸟云签到 = type=cron,cronexp="9 10 * * *",wake-system=1,timeout=3600,script-path=niaocloud.js
====================================小火箭=============================
小鸟云签到 = type=cron,script-path=niaocloud.js, cronexpr="9 10 * * *", timeout=3600, enable=true
 */
const $ = new Env('小鸟云签到');
let NIAO_CLOUD_API = 'https://niaoyun.fun'
let cookieList=[];
let ny_cookie="";
let ny_email="thorjsbox@163.com";
let ny_pwd="zaq1xsw2";
let ny_login=false;
if ($.isNode()) {
    if (process.env.NIAO_CLOUD_COOKIES) {
        console.log(process.env.NIAO_CLOUD_COOKIES)
        if (process.env.NIAO_CLOUD_COOKIES.indexOf('&') > -1) {
            console.log(`您的COOKIE 选择的是用&隔开\n`)
            cookieList = process.env.NIAO_CLOUD_COOKIES.split('&');
        } else if (process.env.NIAO_CLOUD_COOKIES.indexOf('\n') > -1) {
            console.log(`您的COOKIE 选择的是用换行隔开\n`)
            cookieList = process.env.NIAO_CLOUD_COOKIES.split('\n');
        } else {
            cookieList = process.env.NIAO_CLOUD_COOKIES.split();
        }
    }
    if (process.env.NIAO_CLOUD_EMAIL && process.env.NIAO_CLOUD_PWD) {
        ny_login = true;
        ny_email = process.env.NIAO_CLOUD_EMAIL;
        ny_pwd = process.env.NIAO_CLOUD_PWD;
    }
}
!(async () => {
    if (ny_login){
        console.log(`账号[`+ny_email+`]执行登录\n`)
        await login();
    }


    if (!cookieList) {
        $.msg($.name, '【提示】请先获取小鸟云cookie\n直接使用niaoyun.fun签到获取', 'http://niaoyun.fun/user/checkin', {"open-url": "http://niaoyun.fun"});
        return;
    }

    for (let i = 0; i < cookieList.length; i++) {
        if (cookieList[i]) {
            ny_cookie = cookieList[i];
            await checkin();
        }
    }
})().catch((e) => {$.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')}).finally(() => {$.done();});




async function checkin(){
    let myRequest = getPostRequest(`${NIAO_CLOUD_API}/user/checkin`,"");
    return new Promise(async resolve => {
        $.post(myRequest, (err, resp, data) => {
            try {
                let resultData = JSON.parse(data);
                if (resultData.ret === 1){
                    console.log(resultData.msg)
                    console.log("总流量数："+resultData.traffic)
                }else {
                    console.log(resultData.msg)
                }
            } catch (e) {
                console.log(data);
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}

async function login(){
    let body = `email=${ny_email}&passwd=${ny_pwd}&code=&remember_me=week`;
    let myRequest = getPostRequest(`${NIAO_CLOUD_API}/auth/login`,body);
    return new Promise(async resolve => {
        $.post(myRequest, (err, resp, data) => {
            try {
                let resultData = JSON.parse(data);
                if (resultData.ret === 1){
                    console.log(resultData.msg)
                    let ckA = resp.headers["set-cookie"];
                    let cookieArr = [];
                    //#小鸟云
                    // cookie 格式  "uid=321; email=jiulancj%40qq.com; key=2103d4badfe2355f9b3e4a85c48784433d5c863463693; ip=3e341fdb0e1dff83017f72e3450feeb4; expire_in=1634259120"
                    for(var i=0;i<ckA.length;i++){
                        let subArr = ckA[i].split(";");
                        cookieArr.push(subArr[0]);
                    }
                    let ck = "";
                    for (let cookieArrElement of cookieArr) {
                        ck = ck+";"+cookieArrElement
                    }
                    console.log('获取到COOKIE: '+ck)
                    cookieList.push(ck)
                }else {
                    console.log(resultData.msg)
                }
            } catch (e) {
                console.log(data);
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}


function getPostRequest(url,body) {
    let headers =  {
        'Host': 'niaoyun.fun',
        'Accept': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Referer': 'http://niaoyun.fun/user',
        'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.159 Safari/537.36',
        'content-type': 'application/json',
        'Cookie': ny_cookie,
    }
    return  {url: url, method: `POST`, headers: headers, body: body};
}


function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
