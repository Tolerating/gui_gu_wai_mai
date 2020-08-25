import Mock from "mockjs";
import ajax from "../api/ajax";
import data from './data.json'

/* 根据经纬度获取位置详情 */
Mock.mock(/\/api\/position\?[\w,]+/, "get", async function(option) {
  console.warn("访问的接口：根据经纬度获取位置详情", option);
  const { url } = option;
  const geohash = url.split("?")[1];
  let result = await ajax(`http://cangdu.org:8001/v2/pois/${geohash}`);
  return new Promise(function(resolve, reject) {
    if (result) {
      resolve({
        code: 0,
        data: result,
      });
    }
  });
});

/* 获取食品分类列表 */
Mock.mock(/[\w]+\/index_category$/i, "get", function(option) {
  console.warn("访问的接口：获取食品分类列表", option);
  return Mock.mock({
    code: 0,
    "data|19": [
      {
        "id|+1": 1,
        is_in_serving: true,
        description: "@ctitle()",
        title: "@cword(4)",
        link: "",
        image_url: "./images/nav/8.jpg",
        icon_url: "",
        title_color: "",
        __v: 0,
      },
    ],
  });
});

/* 根据经纬度获取商铺列表 */
Mock.mock(/[\w]+\/shop\?/i, "get", function(option) {
  console.warn("访问的接口：根据经纬度获取商铺列表", option);
  return Mock.mock({
    code: 0,
    "data|5": [
      {
        name: "@cword(3,8)",
        address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
        "id|+1": 1,
        latitude: 31.38098,
        longitude: 121.50146,
        location: [121.50146, 31.38098],
        phone: /^1(5|3|7|8)[0-9]{9}$/,
        category: "快餐便当/简餐",
        supports: [
          {
            description: "已加入“外卖保”计划，食品安全有保障",
            icon_color: "999999",
            icon_name: "保",
            id: 7,
            name: "外卖保",
            _id: "591bec73c2bbc84a6328a1e5",
          },
        ],
        status: 0,
        "recent_order_num|100-1000": 150,
        rating_count: 389,
        "rating|3-5": 4.6,
        promotion_info: "他依然有人有人有人有人有人",
        piecewise_agent_fee: {
          tips: "配送费约¥5",
        },
        opening_hours: ["8:30/20:30"],
        license: {
          catering_service_license_image: "",
          business_license_image: "",
        },
        is_new: true,
        is_premium: true,
        image_path: "/img/shop/15c1513a00615.jpg",
        identification: {
          registered_number: "",
          registered_address: "",
          operation_period: "",
          licenses_scope: "",
          licenses_number: "",
          licenses_date: "",
          legal_person: "",
          identificate_date: null,
          identificate_agency: "",
          company_name: "",
        },
        float_minimum_order_amount: 20,
        "float_delivery_fee|5-10": 5,
        distance: "19.5公里",
        order_lead_time: "40分钟",
        description: "好吃的",
        delivery_mode: {
          color: "57A9FF",
          id: 1,
          is_solid: true,
          text: "蜂鸟专送",
        },
        activities: [
          {
            icon_name: "减",
            name: "满减优惠",
            description: "满30减5，满60减8",
            icon_color: "f07373",
            id: 1,
            _id: "591bec73c2bbc84a6328a1e7",
          },
        ],
      },
    ],
  });
});


/* 根据经纬度搜索商铺列表 */
Mock.mock(/[\w]+\/search_shops\?/i, "get", function(option) {
  console.warn("根据经纬度搜索商铺列表", option);
  return Mock.mock({
    code: 0,
    "data|5": [
      {
        name: "@cword(3,8)",
        address: "上海市宝山区淞宝路155弄18号星月国际商务广场1层",
        "id|+1": 1,
        latitude: 31.38098,
        longitude: 121.50146,
        location: [121.50146, 31.38098],
        phone: /^1(5|3|7|8)[0-9]{9}$/,
        category: "快餐便当/简餐",
        supports: [
          {
            description: "已加入“外卖保”计划，食品安全有保障",
            icon_color: "999999",
            icon_name: "保",
            id: 7,
            name: "外卖保",
            _id: "591bec73c2bbc84a6328a1e5",
          },
        ],
        status: 0,
        "recent_order_num|100-1000": 150,
        rating_count: 389,
        "rating|3-5": 4.6,
        promotion_info: "他依然有人有人有人有人有人",
        piecewise_agent_fee: {
          tips: "配送费约¥5",
        },
        opening_hours: ["8:30/20:30"],
        license: {
          catering_service_license_image: "",
          business_license_image: "",
        },
        is_new: true,
        is_premium: true,
        image_path: "/img/shop/15c1513a00615.jpg",
        identification: {
          registered_number: "",
          registered_address: "",
          operation_period: "",
          licenses_scope: "",
          licenses_number: "",
          licenses_date: "",
          legal_person: "",
          identificate_date: null,
          identificate_agency: "",
          company_name: "",
        },
        float_minimum_order_amount: 20,
        "float_delivery_fee|5-10": 5,
        distance: "19.5公里",
        order_lead_time: "40分钟",
        description: "好吃的",
        delivery_mode: {
          color: "57A9FF",
          id: 1,
          is_solid: true,
          text: "蜂鸟专送",
        },
        activities: [
          {
            icon_name: "减",
            name: "满减优惠",
            description: "满30减5，满60减8",
            icon_color: "f07373",
            id: 1,
            _id: "591bec73c2bbc84a6328a1e7",
          },
        ],
      },
    ],
  });
});

/* 发送短信验证码 */
Mock.mock(/[\w]+\/sendcode$/i, "get", function(option) {
  console.warn("访问的接口：发送短信验证码", option);
  return {
    code: 0,
  };
});

/* 手机号验证码登陆 */
Mock.mock(/[\w]+\/login_sms$/i, "post", function(option) {
  console.warn("访问的接口：手机号验证码登陆", option);
  return {
    code: 0,
    data: {
      _id: "5a9cd9c6ad5b2d34d42b385d",
      phone: "13716962779",
    },
  };
});

/* 账号密码登陆 */
Mock.mock(/[\w]+\/login_pwd$/i, "post", function(option) {
  console.warn("访问的接口：账号密码登陆", option);
  return {
    code: 0,
    data: {
      _id: "5a9cd9c6ad5b2d34d42b385d",
      name: "aaa",
    },
  };
});

/* 获取用户信息 */
Mock.mock(/[\w]+\/userinfo$/i, "get", function(option) {
  console.warn("访问的接口：获取用户信息", option);
  return {
    code: 0,
    data: {
      "_id": "5a9cd9c6ad5b2d34d42b385d",
      "phone": "13716962779"
    },
  };
});

/* 退出登录 */
Mock.mock(/[\w]+\/logout$/i, "get", function(option) {
  console.warn("访问的接口：退出登录", option);
  return {
    code: 0
  };
});

/* 商家信息 */
Mock.mock(/[\w]+\/shop_goods$/i, "get", function(option) {
  console.warn("访问的接口：商家信息", option);
  return {
    code: 0,
    data:data.goods
  };
});

/* 商品信息 */
Mock.mock(/[\w]+\/shop_info$/i, "get", function(option) {
  console.warn("访问的接口：商品信息", option);
  return {
    code: 0,
    data:data.info
  };
});

/* 评论 */
Mock.mock(/[\w]+\/shop_ratings$/i, "get", function(option) {
  console.warn("访问的接口：评论", option);
  return {
    code: 0,
    data:data.ratings
  };
});


