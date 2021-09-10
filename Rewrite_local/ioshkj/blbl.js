/*
微信公众号：ios黑科技
官方网站：s7aa.cn

QX:

#哔哩哔哩解锁会员
^https:\/\/biliapi\.hnyoufan\.com\/api\/app\/user\/info url script-response-body blbl.js

2496商店搜索下载

[mitm]
hostname = biliapi.*.com
*/

var obj = JSON.parse($response.body);
obj.data = "rrUTnzX/gah1tKMaxPV7kjgQpbDuJ+zdSDeE4nd8re2HI3D+MK1t8WeGxQba6hvM0kAHn5eyGIFeoOkthRF2796p2mtp9dB5IoCh081xKAwIYnED2T7/JCXWWYO5HE6Y1jyT3nsfe5l42obNdxElivSTc5opcA4M33xVe1zJ7cyMOX0H3UWWV7CsXduCLAQ0/XO7m5s/rxKpTpG6nY0dOzYBCVB/6EW9uOA50BQUTDP/Jza+TvOXtXoMiobLooWgzA+fIn6o4JolfQSH28UmLKf3fBsaHbq5KjH6IzoqmTTEuIh+/4FMqTfwndBq7RKYTV9gudF/Ll5JvR1mL34c+2xBqC1bw2MyEQYod+PZ22S1DbHPrGo4eaCGLPq9GCO/wOeeo7K/kWggsi4g1h3TFzHi1EN+zfum+oxhOu0aWLnWqz5aRhxm3zk+1efq7t8hb4jfqUqZLi10z2hckSkv/i9uCMWRkln9PsEU5VfywdLkzKbm4rQ/XHitaDzHUO/5X1ZaoRk5sziNLCcRMRIpHM+tcbMmPdWQ+mTdg01cvFGeWkIuu/FOd7p2lLOXjRigK479ZEDchhGf/ZoKH0REapyg0FaeZyLrU+5rk8wiNbbV86mC+wLrmh99zMDQ3lv7VfxxWOD7pUt4E7U2fleAwYehAvBoWicbk/A8xiBlzEoGBxRmO5Wxei8PEDaxj3yz1i/VyYW4p1F4MLRqav+Mh16mM5GUruP6YhGUMPy8nWix7d/5JHO+GmFf/VL3XVslyVxcLuFF5BFrNApUdVc9Zjs6JLFZymYcmCl+N4kEOPZX7Pqb8ua1FFFF8hYcQ3IGEbcKt6oMrpMlxGYeHJcFPy5n2HvmHOIwzA6/VvfbcOuwHxjjGxkS65seThG3enNST4lX8AnBuHzwePsZUMqaC1ap9po6jYW2ChfwRG9oobd+A9tzLXCrSYzLi/zvFDnh35FzxqcOhMxXzZXK";
obj.hash = true;


$done({body: JSON.stringify(obj)}); 
