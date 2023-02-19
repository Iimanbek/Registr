<template>
   <div class="main_wrapper" >
        <BaseSelect/>
        <div>
            <v-btn @click="overlay = !overlay" class="fixed_btn">Create new company</v-btn>
            <div v-for="item in data" class="item_wrapper container">
                <div class="inner_item">
                    <img :src="item.img" alt="image of company">
                    <div class="info_wrapper">
                        <h2><span class="text">Company name:</span>{{ item.name }}</h2>
                        <p> <span class="text">Company information:</span> {{ item.about }}</p>
                        <div>
                            <span> <span class="text">created by:</span>  {{ item.created_by }}</span> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-wrapper">
                <v-overlay
                v-model="overlay"
                contained
                class="align-center justify-center">
                   <div class="modal-inner">
                    <v-text-field
                    label="Name of Company"
                    :rules="rules"
                    hide-details="auto"
                    v-model="formData.nameOfCC"
                    ></v-text-field>
                    <v-text-field 
                    v-model="formData.Option"
                    label="Options of company"></v-text-field>
                    <v-text-field 
                    v-model="formData.creater"
                    label="Created by:"></v-text-field>
                    <v-text-field 
                    v-model="formData.links"
                    label="Link to image"></v-text-field>
                    <v-btn @click="sendData" :loading="loading1">Create</v-btn>
                   </div>
                </v-overlay>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data() {
        return {
            data:null,
            overlay: false,
            rules: [
                value => !!value || 'Required.',
                value => (value && value.length >= 3) || 'Min 3 characters',
            ],
            loading1: false, 
        }
    },
    methods: {
        async getData(){
            const url = 'http://localhost:3000/deals'
            const res = await fetch(url)
            this.data = await res.json()
        },

    },
    mounted() {
        this.getData()
    },
}

</script>
<style lang="scss" scoped>
.main_wrapper{
    background: #191919;
    height: 100vh ;
    color: white;
}
</style>