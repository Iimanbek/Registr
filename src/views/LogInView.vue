<template>
      <div class="main-wrapper">
        <div class="form-wrap">
            <div class="nammm">
                <h2>LOG IN</h2>
            </div>
            <div class="inp-wrap">
                <label for="inp3">E-mail</label>
                <input id="inp3" placeholder="" type="text" v-model="FormData.email" >
                <label for="inp4">Password</label>
                <input id="inp4" placeholder="" v-model="FormData.password" :type="show1 ? 'text' : 'password'">
                <!-- <button @click="show1 = !show1">show</button>
                 -->
                 <div class="show">
                     <input @change="show1 = !show1" class="chinp" type="checkbox" >
                    <label>Show password</label>
                 </div>
                
            </div>
            <div class="btn-wrap">
                <!-- <button class="btn1" @click="login" :disabled="email.length<=3 || password.length <= 5"> LOG IN </button> -->
                <v-btn class="btn1" @click="login" :loading="loading1" :disabled="FormData.email.length<= 3 || FormData.password.length <= 5 || loading1"> LOG IN </v-btn>
                <a class="llink" href="#">Forget password ?</a>
                <div class="exx">
                    <button class="btn2" > <img src="../assets/google-icon.svg" alt="logo of google "> Continue with google</button>
                </div>
            </div>
            <div class="rout">
                <router-link  class="okk" to="/registration">REGISTRATION</router-link>
            </div>
        </div>

    </div>
</template>

<script>

export default{
    data(){
        return {
            loading1: false, 
            show1 : false ,
            FormData:{
                email: '',
                password:'',
                returnSecureToken: true
            },
            errors:{
                email: '',
                password:'',
            },
        }
    },
    methods:{
        async login() {
            this.loading1 = true
            if (this.FormData.email.length && this.FormData.password.length) {  
                let options = {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(this.FormData)
                }
                const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${import.meta.env.VITE_FIREBASE_API_KEY}`, options)    
                const res = await response.json()
                console.log(res);
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify(res))
                    this.$router.push({path: '/private'})
                }else{
                    this.$notify({
                        title: res.error.message,
                        type: 'error'
                    });
                }
            }
            this.loading1 = false
            
        },
    },
}
</script>


<style scoped>
.chinp{
    position: relative;
    bottom: -5px ;
}
.show{
    display: flex;
    align-items: center;
    gap: 5px ;
}
.llink{
    text-decoration: none;
    width: 100%;
    color: black ;
    margin: 10px ;
    text-align: center;
    border-top: 1px solid black ;
    padding-top: 10px ;
}
.okk {
  position: relative;
}

.okk::before {
  content: '';
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #985ACE;
  transform-origin: bottom right;
  transform: scaleX(0);
  transition: transform 0.5s ease;
}

.okk:hover::before {
  transform-origin: bottom left;
  transform: scaleX(1);
}
.rout a {
    text-decoration: none;
    color: black ;
    text-transform: uppercase;
    font-family:"Gill Sans", sans-serif ;
}
.rout{
    padding-top: 10px ;
}
.exx{
    width: 100%;
}
.btn-wrap{
    width: 70%;
    border-bottom: 1px solid black ;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.btn2{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px ;
    background: none;
    border: 1px solid #985ACE;
}
.btn1{
    background: #985ACE;
    color: white ;
    text-transform: uppercase;
    font-family: "Gill Sans", sans-serif;
    font-weight: 350;
    border-bottom: 1px solid black;
    border: 1px solid #985ACE;
}

.btn2 img {
    width: 20px ;
}
.btn1 , .btn2 {
    /* border: none ; */
    width: 100%;
    padding: 10px 0 ;
    margin-bottom: 10px ;
    border-radius: 4px ;
} 
.inp-wrap input {
    height: 32px ;
    padding: 0 10px ;
    border: none ;
    background: #F8F1FF;
    margin-bottom: 10px ;
    border-radius: 6px  ;
}
.inp-wrap{
    display: flex ;
    flex-direction: column ;
    width: 70%;
}
.main-wrapper{
    background: #985ACE;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
.form-wrap{
    background: white;
    height: 60%; 
    width: 30%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 20px ;
    -webkit-box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
    box-shadow: 29px -31px 87px 0px rgba(34, 60, 80, 0.2);
}
label{
    color: rgba(0, 0, 0, 0.567);
}
.nammm{
    padding: 30px 0 25px 0   ;
}
.nammm h2{
    text-transform: uppercase;
    font-family: "Gill Sans", sans-serif;
    font-weight: 600;

}
</style>