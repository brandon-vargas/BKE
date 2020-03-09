<template>
  <v-app>      
    <AppBar/>
    <v-container class="home-page">
    <router-view :to="{ name: '/'}"></router-view>
    </v-container>
  </v-app>
</template>

<script>
import AppBar from './components/AppBar'

export default {
  name: 'App',

  components: {
    AppBar,
  },

  data: () => ({
  //
  }),
};
</script>

<style>
  .nav-bar{
    width: 50% !important
  }
  .home-page{
    height: 100%;
  }
</style>