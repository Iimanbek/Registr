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
            formData:{
                Option:'',
                creater:'',
                links:'',
                nameOfCC:'',
            },
            loading1: false, 
        }
    },
    methods: {
        async getData(){
            const url = 'http://localhost:3000/Company'
            const res = await fetch(url)
            this.data = await res.json()
        },
        async sendData(){
            this.loading1 = true
            let options = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify({
                    name: this.formData.nameOfCC,
                    about: this.formData.Option,
                    created_by: this.formData.creater,
                    img: this.formData.links,
                })
            }
            const URL = 'http://localhost:3000/Company' 
            const response = await fetch(URL, options)
            if (response.ok) {
                this.getData()
            }
            const newData = await response.json();

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
.inner_item{
    display: flex;
    gap: 30px;  
    border: 1px solid white;
    padding: 10px 20px;
    img{
        object-fit: cover;
        width: 200px;
    }
    .info_wrapper{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
}
.container{
    max-width: 1300px;
    margin: 0 auto;
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