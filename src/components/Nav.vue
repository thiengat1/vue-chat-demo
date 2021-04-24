<!--
 * @Description: header
 * @Author: Lewis
 * @Date: 2021-04-22 00:57:27
 * @LastEditTime: 2021-04-23 21:36:10
 * @LastEditors: Lewis
-->
<template>
  <div class="nav">
    <div class="nav-left">
      <span>Chat-App</span>
    </div>
    <div class="nav-right">
      <div v-if="isLogin" class="nav-right-logout">
        <Avatar :src="user.photoURL"/>
        <span class="btn-logout" @click="signOut">
          Sign Out
        </span>
      </div>

      <button v-else class="btn-login" @click="signIn">
        Sign In
      </button>
    </div>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import { useAuth } from "@/firebase";
export default {
  name: "Nav",
  components: {
    Avatar,
  },
  setup() {
    const { user, isLogin, signOut, signIn } = useAuth();
    return { user, isLogin, signOut, signIn };
  },
};
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #111827;
  align-items: center;
  box-shadow: 3px 3px 6px black;
  position: fixed;
  top:0;
  width:100%;
  span {
    color: #fff;
    text-transform: uppercase;
  }
  &-left {
    padding-left: 20px;
    font-weight: 600;
    font-size: 18px;
  }
  &-right {
    padding-right: 20px;
    display: flex;
    &-logout {
      display: flex;
      align-items: center;
      .btn-logout {
        margin-left: 20px;
        color: #fff;
        cursor: pointer;
        &:hover{
            color: green;
        }
      }
    }
    .btn-login {
      background-color: #8b8878;
      text-transform: uppercase;
      color: #fff;
      height: 30px;
      width:80px;
      &:hover {
        background-color: #b4eeb4;
      }
    }
  }
}
</style>
