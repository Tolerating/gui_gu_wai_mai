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
export const reqSearchShop = (geohash,keyword) => ajax(`${BASE_URL}/search_shops`,{geohash,keyword});

/* 用户名密码登录 */
export const reqPwdLogin = (name,pwd,captcha) => ajax(`${BASE_URL}/login_pwd`,{name,pwd,captcha},'POST');

/* 发送短信验证码 */
export const reqSendCode = (phone) => ajax(`${BASE_URL}/sendcode`,{phone});

/* 手机号验证码登录 */
export const reqSmsLogin = (phone,code) => ajax(`${BASE_URL}/login_sms`,{phone,code},'POST');

/* 根据会话获取用户信息 */
export const reqUserInfo = () => ajax(`${BASE_URL}/userinfo`);
<<<<<<< HEAD

/* 用户登出 */
export const reqLogout = () => ajax(`${BASE_URL}/logout`);

/* 获取商家信息 */
export const reqShopInfo = () => ajax(`${BASE_URL}/shop_info`);

/* 获取商家评论数组 */
export const reqShopRatings = () => ajax(`${BASE_URL}/shop_ratings`);

/* 获取商品数组 */
export const reqShopGoods = () => ajax(`${BASE_URL}/shop_goods`);

=======

/* 用户登出 */
export const reqLogout = () => ajax(`${BASE_URL}/logout`);
>>>>>>> adcda38a240dd8655c97ee5f336b3c6997ab795d
