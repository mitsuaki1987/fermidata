<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Search from './components/Search.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',

  components: {
    Search,
    Result,
  },

  data: () => ({
    //
  }),
}
</script>
