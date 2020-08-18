<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <template v-slot:left>
        <router-link class="header_search" to="/search">
          <i class="iconfont icon-sousuo"></i>
        </router-link>
      </template>
      <template v-slot:right>
        <router-link class="header_login" :to="userInfo._id?'/userinfo':'/login'">
          <span class="header_login_text" v-if="!userInfo._id">登录|注册</span>
          <span class="header_login_text" v-else>
            <i class="iconfont icon-person"></i>
          </span>
        </router-link>
      </template>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container" v-if="categorys.length">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in categoryArr"
            :key="index"
          >
            <a
              href="javascript:"
              class="link_to_food"
              v-for="(item1, index1) in item"
              :key="index1"
            >
              <div class="food_container">
                <img src="./images/nav/8.jpg" />
              </div>
              <span>{{ item1.title }}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
      <img src="./images/msite_back.svg" alt="" v-else>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList />
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import { mapState } from "vuex";
import Swiper from "swiper";
import "swiper/swiper.scss";
import ShopList from "../../components/ShopList/ShopList";
export default {
  components: {
    HeaderTop,
    ShopList,
  },
  watch: {
    categorys(value) {
      this.$nextTick(()=>{
        // 创建一个swiper实力对象，来实现轮播
        new Swiper(".swiper-container", {
          loop: true,
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
          },
        });
      });
    },
  },
  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    // 根据categorys一维数组生成一个二维数组（小数组中的元素个数最大是8）
    categoryArr() {
      const { categorys } = this;
      let arr = [];
      let minArr = [];
      categorys.forEach((element) => {
        // 如果当前小数组已经满了，创建一个新的数组
        if (minArr.length === 8) {
          minArr = [];
        }
        // 如果minArr是空的，将小数组保存到大数组中
        if (minArr.length === 0) {
          arr.push(minArr);
        }
        // 将当前分类保存到小数组中
        minArr.push(element);
      });
      return arr;
    },
  },
  mounted() {
    this.$store.dispatch("getCategorys");
    this.$store.dispatch("getShops");
  },
};
</script>

<style lang="scss">
@import "../../assets/mixins.scss";
.msite {
  width: 100%;
  .msite_nav {
    @include bottom-border-1px(#e4e4e4);
    margin-top: 45px;
    height: 200px;
    background: #fff;
    .swiper-container {
      width: 100%;
      height: 100%;
      .swiper-wrapper {
        width: 100%;
        height: 100%;
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          .link_to_food {
            width: 25%;
            .food_container {
              display: block;
              width: 100%;
              text-align: center;
              padding-bottom: 10px;
              font-size: 0;
              img {
                display: inline-block;
                width: 50px;
                height: 50px;
              }
            }
            span {
              display: block;
              width: 100%;
              text-align: center;
              font-size: 13px;
              color: #666;
            }
          }
        }
      }
      .swiper-pagination > span.swiper-pagination-bullet-active {
        background: #02a774;
      }
    }
  }
  .msite_shop_list {
    @include top-border-1px(#e4e4e4);
    margin-top: 10px;
    background: #fff;
    .shop_header {
      padding: 10px 10px 0;
      .shop_icon {
        margin-left: 5px;
        color: #999;
      }
      .shop_header_title {
        color: #999;
        font-size: 14px;
        line-height: 20px;
      }
    }
  }
}
</style>
