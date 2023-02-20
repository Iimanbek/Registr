<template>
    <div class="main_wrapper" >
        <BaseSelect/>
        <div>
            <v-btn @click="overlay = !overlay" class="fixed_btn">Create new company</v-btn>
            <div v-if="this.data" class="item_wrapper container">
                <div class="inner_item">
                    <v-list
                        class="lists"
                        :items="this.data"
                        item-props
                        lines="three"
                        >
                        <template v-slot:subtitle="{ subtitle }">
                        <div class="html_inner" v-html="subtitle">
                        </div>
                        </template>
                    </v-list>
                </div>
            </div>
            <div class="modal-wrapper">
                <v-overlay
                v-model="overlay"
                contained
                class="align-center justify-center">
                   <div class="modal-inner">
                    <v-text-field
                    label="Theme"
                    :rules="rules"
                    hide-details="auto"
                    v-model="formData.title"
                    ></v-text-field>
                    <v-text-field 
                    v-model="formData.name"
                    label="Name"></v-text-field>
                    <v-text-field 
                    v-model="formData.prependAvatar"
                    label="Photo of contact"></v-text-field>
                    <v-text-field 
                    v-model="formData.speech"
                    label="Description of person"></v-text-field>
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
            errors:[]
        }
    },
    methods: {
        async getData(){
            const url = 'http://localhost:3000/Contacts'
            const res = await fetch(url)
            this.data = await res.json()
        },
        async sendData(){
            this.loading1 = true
            // let options = {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type' : 'application/json'
            //     },
            //     body:JSON.stringify({
            //         prependAvatar: this.formData?.prependAvatar,
            //         title: this.formData?.title,
            //         subtitle: `<span>${this.formData?.name}</span> - ${this.formData?.speech}`,
            //     })
            // }
            // const URL = 'http://localhost:3000/Contacts' 
            // const response = await fetch(URL, options)
            // if (response?.ok) {
            //     this.getData()
            //     console.log('works');
            // }else{
            //     console.log('something wrong with request');
            // }
            // const newData = await response.json();
            //---------------belo version works but i keep doing with axios---------------//
            // --------------GETTING 500 ERROR-----------------//
            if (this.formData.name && this.formData.title && this.formData.prependAvatar) {
                axios.post(`http://localhost:3000/Contacts`,{
                prependAvatar: this.formData?.prependAvatar,
                title: this.formData?.title,
                subtitle: `<span>${this.formData?.name}</span> - ${this.formData?.speech}`,
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
</style>
