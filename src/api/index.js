/*
 *@params4: api接口
 *@description:
 *@author: 刘凯
 *@date: 2020-08-12 20:51:09
*/
import ajax from './ajax'
const BASE_URL = '/api'
/* 根据经纬度获取位置详情 */
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position?${geohash}`);

/* 获取视频分类列表 */
export const reqFoodCategorys = () => ajax(`${BASE_URL}/index_category`);

/* 根据经纬度获取商铺列表 */
export const reqShops = (longitude,latitude) => ajax(`${BASE_URL}/shop`,{longitude,latitude});

/* 根据经纬度和关键字搜索商铺列表 */

/* 获取一次性验证码 */

/* 用户名密码登录 */

/* 手机号验证码登录 */

/* 根据会话获取用户信息 */

/* 用户登出 */