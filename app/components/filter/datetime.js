
var Vue = require("component_modules/vue.js");

Vue.filter('datetime', function (date) {
    var now = +new Date;
    var text='';
    var distance = now - date;
    if(distance <= 86400*1000 ){
        text = "大约" + Math.round((now - date)/3600000)+ "小时以前";
    }else if(distance < 86400000*24){
        text = Math.round((now - date)/3600000/24)+ "天以前";
    }else if(distance < 86400000*24*12){
        text = Math.round((now - date)/3600000/24/12)+ "个月以前";
    }else{
        text = "一年以前";
    }
    return text;
})