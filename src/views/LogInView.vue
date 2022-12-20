<template>
      <div class="main-wrapper">
        <div class="form-wrap">
            <div class="nammm">
                <h2>LOG IN</h2>
            </div>
            <div class="inp-wrap">
                <label for="inp3">E-mail</label>
                <input id="inp3" placeholder="" type="text">
                <label for="inp4">Password"</label>
                <input id="inp4" placeholder="" type="password">
            </div>
            <div class="btn-wrap">
                <button class="btn1"> LOG IN </button>
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

}
</script>


<style scoped>
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
    height: 50%; 
    width: 30%;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    border-radius: 20px ;
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