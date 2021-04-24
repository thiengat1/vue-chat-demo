<!--
 * @Description: chat
 * @Author: Lewis
 * @Date: 2021-04-23 00:43:42
 * @LastEditTime: 2021-04-24 11:50:05
 * @LastEditors: Lewis
-->
<template>
  <div class="chat-container">
    <div class="chat">
      <Messages
        v-for="item in messages"
        :key="item.id"
        :user="item"
        :sender="item.userId === user?.uid"
      >
        {{ item.text }}
      </Messages>
    </div>
    <div ref="bottom" />
    <div class="bottom">
      <div class="send-area" v-if="isLogin">
        <form>
          <input ref="input" @keyup.enter.prevent="send" v-model="message" required/>
          <button @click.prevent="send">
            Send
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Messages from "./Messages";
//import SendIcon from "./SendIcon";
import { ref, watch, nextTick } from "vue";
import { useAuth, useChat } from "@/firebase";
export default {
  name: "Chat",
  components: {
    Messages,
    //SendIcon,
  },
  setup() {
    const { user, isLogin } = useAuth();
    const { messages, sendMessage } = useChat();
    const bottom = ref(null);

    watch(
      messages,
      () => {
        nextTick(() => {
          bottom.value?.scrollIntoView({ behavior: "smooth" });
        });
      },
      { deep: true }
    );

    const message = ref('');
    const send = () => {
      sendMessage(message.value);
      message.value = "";
    };
    return { user, isLogin, messages, bottom, message, send };
  },
};
</script>

<style lang="scss" scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  background-color: #FCDAD5;
  justify-content: flex-end;
  align-items: center;
  min-height: 90vh;
  .chat {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;
    padding-top: 40px;
    width: 40vw;
  }

  .bottom {
    height: 60px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    .send-area {
      input {
        width: 35vw;
        margin-right: 10px;
        height: 30px;
      }
     button{
       height: 40px;
       width: 80px;
       background: blue;
       color: #fff;
       text-transform: uppercase;
       &:hover{
         background-color: burlywood;
       }
     }
    }
  }
}
</style>
