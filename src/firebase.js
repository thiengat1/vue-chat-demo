/*
 * @Description: database
 * @Author: Lewis
 * @Date: 2021-04-22 21:56:14
 * @LastEditTime: 2021-04-24 11:18:17
 * @LastEditors: Lewis
 */
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

//import Filter from "bad-words";
import { ref, onUnmounted, computed } from "vue";

firebase.initializeApp({
  apiKey: "AIzaSyDl2mXMVc5NutEWanTqnE1q7M_k0Id8iPc",
  authDomain: "chat-app-a15cc.firebaseapp.com",
  projectId: "chat-app-a15cc",
  storageBucket: "chat-app-a15cc.appspot.com",
  messagingSenderId: "382995794770",
  appId: "1:382995794770:web:93bab708ce5830265b088b",
  measurementId: "G-QWYJY13NWN",
});
const auth = firebase.auth();

export function useAuth() {
  const user = ref(null);
  const unsubscribe = auth.onAuthStateChanged((_user) => (user.value = _user));
  onUnmounted(unsubscribe);
  const isLogin = computed(() => user.value !== null);

  const signIn = async () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    await auth.signInWithPopup(googleProvider);
  };
  const signOut = () => auth.signOut();

  return { user, isLogin, signIn, signOut };
}

const firestore = firebase.firestore();
const messageCollection = firestore.collection("messages");
const messagesQuery = messageCollection.orderBy("createdAt", "desc").limit(100);
//const filter = new Filter();

export function useChat() {
  const messages = ref([]);
  const unsubscribe = messagesQuery.onSnapshot((snapshot) => {
    messages.value = snapshot.docs
      .map((doc) => ({ id: doc.id, ...doc.data() }))
      .reverse();
  });
  onUnmounted(unsubscribe);
  const { user, isLogin } = useAuth();
  const sendMessage = (text) => {
     
    if (!isLogin.value) {
      return;
    }
 
    const { photoURL, uid, displayName } = user.value;

    messageCollection.add({
      username: displayName,
      userId: uid,
      userPhotoURL: photoURL,
      text: text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return { messages, sendMessage };
}

