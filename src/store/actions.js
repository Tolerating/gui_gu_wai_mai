/* 通过mutation间接更新state的多个方法的对象 */
import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
} from "./mutation-types";
import { reqAddress, reqFoodCategorys, reqShops } from "../api";
import ajax from '../api/ajax'
export default {
    // 异步获取地址
    async getAddress({commit,state}){
        // 发送异步ajax请求
        const geohash = state.latitude + ',' + state.longitude;
        // const result = await reqAddress(geohash);
        const result = await ajax(`http://cangdu.org:8001/v2/pois/${geohash}`);
        // 提交一个mutation
        // console.log(result);
        commit(RECEIVE_ADDRESS,{address:result});
        // if(result.code === 0){
        //     const address = result.data;
        //     commit(RECEIVE_ADDRESS,{address});
        // }
    },
    // 异步获取食品分类列表
    async getCategorys({commit}){
        // 发送异步ajax请求
        const result = await reqFoodCategorys();
        console.log(result);
        // 提交一个mutation
        if(result.code === 0){
            const categorys = result.data;
            commit(RECEIVE_CATEGORYS,{categorys});
        }
    },
     // 异步获取商家列表
     async getShops({commit,state}){
        // 发送异步ajax请求
        const {longitude,latitude} = state;
        const result = await reqShops(longitude,latitude);
        // 提交一个mutation
        if(result.code === 0){
            const shops = result.data;
            commit(RECEIVE_SHOPS,{shops});
        }
    }
};
