<template>
  <div>
    <RouterView />
    <notifications position="top center" classes="my-custom-class"></notifications>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import firebase from 'firebase/compat/app'
 
export default {

  setup() {
    const router = useRouter();
    const route = useRoute();
    // onBeforeMount(() => {
    //   firebase.auth().onAuthStateChanged((user) => {
    //     if (!user) {
    //       router.replace('/')
    //     }else if (route.path == '/login' || route.path == '/registration'){
    //       router.replace('/private')
    //     }
    //   })
    // })
  }
} 
</script>


<style>
</style>