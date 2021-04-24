<!--
 * @Description: chat-app
 * @Author: Lewis
 * @Date: 2021-04-22 00:51:47
 * @LastEditTime: 2021-04-24 11:49:16
 * @LastEditors: Lewis
-->
<template>
  <div class="chat-app">
    <Nav />
    <Chat />
  </div>
</template>

<script>
import Nav from "./components/Nav";
import Chat from "./components/Chat";
export default {
  name: "ChatApp",
  components: {
    Nav,
    Chat,
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;
}
</style>
