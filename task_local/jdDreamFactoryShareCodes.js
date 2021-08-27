/*
京喜工厂互助码
此文件为Node.js专用。其他用户请忽略
支持京东N个账号
 */
//云服务器腾讯云函数等NOde.js用户在此处填写东东萌宠的好友码。
// 同一个京东账号的好友互助码用@符号隔开,不同京东账号之间用&符号或者换行隔开,下面给一个示例
// 如: 京东账号1的shareCode1@京东账号1的shareCode2&京东账号2的shareCode1@京东账号2的shareCode2
let shareCodes = [

'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA==',
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='
'Cd7kEmIgvugqVoXT8ecMLg==@kesCPLYhHzq5u2gXDIwuCw==@F02jnX83mUI2p0wSe0CECQ==@O25VFB10GYvNbF3PwRD2PA=='

]

for (let i = 0; i < shareCodes.length; i++) {
  const index = (i + 1 === 1) ? '' : (i + 1);
  exports['shareCodes' + index] = shareCodes[i];
}
