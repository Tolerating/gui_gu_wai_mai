import Vue from 'vue'
import format from 'date-fns/format'
/*
 *@description: 过滤器
 *@author: 刘凯
 *@date: 2020-08-25 22:17:29
*/

Vue.filter('date-format',function(value,fromatStr='yyyy-MM-dd HH:mm:ss') {
    return format(value,fromatStr);
});