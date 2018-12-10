# Jsonp.js

## 使用方法
```
//安装dmy-jsonp
npm install dmy-jsonp

//引入主对象
import Jsonp from 'dmy-jsonp';

//使用jsonp
Jsonp.get(url, data, callBackName, callback);
```

## 参数说明
+ url: 基本的url
+ data: 传递的参数
+ callBackName: 回掉函数姓名的key,通常与后端约定
+ callback: 回调函数

## 使用实例
```
var url = ';
Jsonp.get('//www.xxx.com/api/test/',{
	slot: 'app_aggregation_rec',
	page: 1,
	platform: 2,
	infoid: 33485422897091,
	dispcateid: 9224
},'jsonpCallback',function(data){
	console.log(data);
});
```