<template>
    <div>
        <v-header/>
    <main>
        <slot/>
    </main>
    <v-footer/>
    </div>
</template>


<script>
import VHeader from '../components/Header.vue'
import VFooter from '../components/Footer.vue'

export default{
    components: {
        VHeader,
        VFooter
    }
}
</script>