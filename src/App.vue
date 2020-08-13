<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
import FooterGuide from './components/FooterGuide/FooterGuide'
export default {
  data(){
    return{}
  },
  components:{
    FooterGuide
  },
  mounted(){
    // this.$store.dispatch('getAddress');
    this.getAddress();
  },
  methods:{
    ...mapActions(['getAddress'])
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>
