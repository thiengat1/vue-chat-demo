<!--
 * @Description: avatar
 * @Author: Lewis
 * @Date: 2021-04-22 14:55:44
 * @LastEditTime: 2021-04-23 00:24:18
 * @LastEditors: Lewis
-->
<template>
  <div class="avatar">
    <img :src="src" alt="avatar"/>
  </div>
</template>

<script>
export default {
  name: "Avatar",
  props:{
      src:{
          type:String,
          defaul:'@/assets/logo.png'
      }
  }
};
</script>

<style lang="scss" scoped>
.avatar{
    width: 40px;
    height: 40px;
    
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
}
</style>
