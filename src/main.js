import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyAmDISXpb4cSd2wyXyRj5RfPi5ONnHmxH8",
  authDomain: "cslarsen3.firebaseapp.com",
  databaseURL: "https://cslarsen3.firebaseio.com",
  projectId: "cslarsen3",
  storageBucket: "cslarsen3.appspot.com",
  messagingSenderId: "142224578341",
  appId: "1:142224578341:web:9735f2e6ef8d698a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
