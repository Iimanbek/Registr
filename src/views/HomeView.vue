<template>
  <nav>
    <navigation></navigation>
  </nav>
  <main>
    <v-main></v-main>
  </main>
  <footer>
    <v-footer></v-footer>
  </footer>
<TheWelcome />
</template>

<script>
  import Header from '../components/Header.vue'
  import Main from '../components/Main.vue'
  import Footer from '../components/Footer.vue'

  export default {
    components:{
      navigation:Header,
      'v-main':Main,
      'v-footer':Footer
    }
  }
</script>
