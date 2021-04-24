<!--
 * @Description: messages
 * @Author: Lewis
 * @Date: 2021-04-23 00:43:20
 * @LastEditTime: 2021-04-24 11:22:11
 * @LastEditors: Lewis
-->
<template>
  <div class="message">
    <span v-if="!sender" class="name">{{user.userName}}</span>
    <div class="message-content" :class="sender?'message-content-send':'message-content-receive'">
      <Avatar class="msg-avatar" :src="user.userPhotoURL"/>
      <div class="message-text" :class="sender?'send':'receive'">
          <slot/>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "Messages",
  components: {
    Avatar,
  },
  props: {
    user: {
      type: Object,
      defaul: () => null,
    },
     sender: {
      type: Boolean,
      defaul: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.message{   
  margin-top: 10px;
  width: 100%;
    &-content{
        display: flex;
        .message-text{
            display: block;
            max-width: 20vw;
            //min-width: 200px;
            background: #81c4f9;
            color: #fff;
            padding: 5px 10px;
            border-radius: 5px;
        }
    }
    &-content-send{
      float:right;
      
      .msg-avatar{
        order: 1;
         
      }
       .message-text{
            display: block;
            background: #5fb878;
            //text-align: right;
             margin-right: 5px;
             
        }
    }
    &-content-receive{
       .message-text{
           margin-left: 5px;
        }
    }
    .name{
      padding-left: 45px;
      color: #8567eb;
    }
}
</style>
