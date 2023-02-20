<template>
   <div class="main_wrapper" >
        <BaseSelect/>
        <div>
            <v-btn @click="overlay = !overlay" class="fixed_btn">Create new company</v-btn>
            <div v-for="item in data" class="item_wrapper container">
                <div class="inner_item">
                    <div class="info_wrapper">
                        <h2><span class="text">Company name: </span>{{ item.name }}</h2>
                        <p> Price of deal: {{ item.price }}$</p>
                        <div class="info_wrapperrrr">
                            <span>
                                <span class="text">created by:</span>
                                {{ item.deal_creater.name }}
                            </span> 
                            <img :src="item.deal_creater.img" alt="">
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
                    label="Name Deal"
                    :rules="rules"
                    hide-details="auto"
                    v-model="formData.title"
                    ></v-text-field>
                    <v-text-field 
                    v-model="formData.speech"
                    label="Price of Deal ..$"></v-text-field>
                    <v-text-field 
                    v-model="formData.name"
                    label="Created by:"></v-text-field>
                    <v-text-field 
                    v-model="formData.prependAvatar"
                    label="Link to image"></v-text-field>
                    <v-btn @click="sendData" :loading="loading1">Create</v-btn>
                   </div>
                </v-overlay>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
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
            formData:{
                title: '',
                prependAvatar: '',
                name:'',
                speech:'',
            },
        }
    },
    methods: {
        async getData(){
            const url = 'http://localhost:3000/deals'
            const res = await fetch(url)
            this.data = await res.json()
        },
        async sendData(){
            this.loading1 = true
            if (this.formData.name && this.formData.prependAvatar && this.formData.title) {
                axios.post(`http://localhost:3000/deals`,{
                    deal_creater: {
                    img: this.formData.prependAvatar ,
                    name: this.formData.name
                    },
                    name: this.formData.title,
                    price: this.formData.speech
                })
                .then(res => {
                    this.getData()
                })
                .catch(e => {
                    this.errors.push(e)
                })        
            }
            this.loading1 = false

        }
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
.v-list.lists{
    border-radius: 10px;
}
.v-btn.fixed_btn{
    position: fixed;
    right: 0;
    bottom: 0 ;
    margin: 0 0 100px 0;
}
.modal-wrapper{
    width: 60%;
}
.modal-inner{
    display: flex;
    flex-direction: column;
    width: 500px;
    background: black;
    border-radius: 5px;
    height: 400px;
}
.info_wrapperrrr{

    display: flex;
    img{
        width: 50px;
    }
}
</style>