<template>
  <BaseLayout>
    <main>
    <v-main></v-main>
  </main>
  </BaseLayout>
<TheWelcome />
</template>

<script>
  import Main from '../components/Main.vue'

  export default {
    components:{
      'v-main':Main,
    }
  }
</script>
