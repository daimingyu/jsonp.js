/**
 * set 设置cookie
 * get 获取cookie
 * dek 删除cookie
 */
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    global.Jsonp = factory()
} (this, function() {
    'use strict';

    var Jsonp = {
        //调用方法
        get: function (url, data, callback) {
            this.createJsonp(url, data,callback);
        },
        //动态添加<script> 标签并组建请求url callback为跨域请求成功后回调函数
        createJsonp: function(url, data, callback) {
            var radom = Math.random() * 100;
            var number = parseInt(radom); //随机数字
            var callBackRadom = "jsonpSuccess_" + number; //指定回调函数
            window[callBackRadom] = callback;
            var query = []; 
            for (var key in data) {
                query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
            }
            var param = (query.length ? '?' + query.join('&') : '');
            var script = document.createElement("script");
            script.type = "text/javascript";
            if (param != null && param.length > 0) {
                script.src = url + "" + param + "&callback=" + callBackRadom;
            }
            else {
                script.src = url + "?callback=" + callBackRadom;
            }
            script.id = callBackRadom; //指定id 是为了removeJsonp中动态去除<script>标签
            document.getElementsByTagName('head')[0].appendChild(script);
            this.removeJsonp(callBackRadom);
        },
        //成功后移除动态加载的<script>标签
        removeJsonp: function (id) {
            var head = document.getElementsByTagName('head')[0];
            var el = document.getElementById(id);
            if (head != null && el != null) {
                head.removeChild(el);
            }
        }
    }

    //返回对象
    return Jsonp;
}));
