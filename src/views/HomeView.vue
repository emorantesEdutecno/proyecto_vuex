<template>
  <div class="home">
    <NavBar></NavBar>
    <img alt="Vue logo" src="../assets/logo.png">
    <i class="icon fas fa-user"></i>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    NavBar,
  }
}
</script>
