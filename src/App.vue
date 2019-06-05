<template>
  <div id='list'>
        <router-view/>
    <ul id='xxx'>
      <li id='hhh' v-for='(item,index) in list' :key='index' @click="tiao(item.path)" :class="{active:item.path===current}">
        <img :src='item.path===current?item.imgxxx:item.imgUrl' alt>
        <span>{{item.msg}}</span>
      </li>
    </ul>
  </div>
</template>

<style lang='scss'>
*{
  padding: 0;
  margin: 0;
}
li.active{
  color: red;
}
#list {
  width: 100%;
  bottom: 0;
  position: absolute;
  text-align: center;
  #xxx {
    display: flex;
    justify-content: space-between;
    #hhh {
      display: inline-block;
      list-style: none;
      text-align: center;
      img {
        width: 30px;
        display: block;
      }
      span {
        display: block;
        bottom: 0px;
      }
    }
  }
}
</style>
<script>
export default {
  data () {
    return {
      list: [
        {
          path: '/home',
          msg: '首页',
          imgUrl: require('./assets/imgs/home.svg'),
          imgxxx: require('./assets/imgs/home1.svg')
        },
        {
          path: '/car',
          msg: '购物车',
          imgUrl: require('./assets/imgs/car.svg'),
          imgxxx: require('./assets/imgs/car1.svg')
        },
        {
          path: '/user',
          msg: '用户',
          imgUrl: require('./assets/imgs/user1.svg'),
          imgxxx: require('./assets/imgs/user.svg')
        }
      ],
      current: ''
    }
  },
  methods: {
    tiao (xxx) {
      this.$router.push(xxx)
      this.current = xxx
    }
  }
}
</script>
