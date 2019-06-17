<template>
  <div class="home">
    <img alt="Lock logo" src="../assets/lock.jpeg">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <footer><a href="https://github.com/byu-cs-260-spring-2019/lab-5-photo-bomb-kamrilarsen">GitHub Repository</a></footer>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
