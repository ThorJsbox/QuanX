/*圈叉配置写法
rewrite_local
#无限试用
^http:\/\/ws\.60he\.com\/user* url script-response-body PythonAI.js

^http:\/\/ws\.60he\.com\/book* url script-response-body PythonAI.js


MITM
hostname:ws.60he.com
-----------------将军℡--------------------
*/
var obj = JSON.parse($response.body);
obj= {
  {
  "rules" : [
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "isFree\":1",
      "matchValue" : "isFree\":\\d",
      "destiontion" : "response",
      "isRegex" : true
    },
    {
      "action" : "body",
      "matchField" : "",
      "field" : "",
      "value" : "vip\":365",
      "matchValue" : "vip\":\\d",
      "destiontion" : "response",
      "isRegex" : true
    }
  ],
  "enabled" : true,
  "name" : "PythonAI 代码编辑器学Python 解锁会员",
  "description" : "PythonAI - 代码编辑器学Python 来自 goodclass https:\/\/apps.apple.com\/cn\/app\/pythonai-%E4%BB%A3%E7%A0%81%E7%BC%96%E8%BE%91%E5%99%A8%E5%AD%A6python\/id1471351733",
  "locations" : [
    {
      "method" : "",
      "scheme" : "http",
      "enabled" : true,
      "port" : 80,
      "query" : "",
      "host" : "ws.60he.com",
      "path" : "\/user*"
    },
    {
      "method" : "",
      "scheme" : "http",
      "enabled" : true,
      "port" : 80,
      "query" : "",
      "host" : "ws.60he.com",
      "path" : "\/book*"
    }
  ]
}
  }
$done({body: JSON.stringify(obj)}); 
