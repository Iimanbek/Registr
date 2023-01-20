<template>
    <div>
        <div class="nav-wrapper">
            <nav>
                <router-link to="/private">LOGO</router-link>
                <span>about</span>
                <span>Projects</span>
                <span>Home</span>
            </nav>
        </div>
        <main>
            <div class="inner-main">
                <h2>Hello world</h2>
                <div class="p-wrap">
                    <p v-for="n of 144">hello world</p>
                </div>
            </div>
        </main>
    </div>
    <footer>
        <div class="footer-inner-wrap">
            <div class="colfooter" v-for="n of 3">
                <h3>Obj</h3>
                <span>Lorem, ipsum.</span>
                <span>Lorem, ipsum.</span>
                <span>Lorem, ipsum.</span>
            </div>
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Private',
    
}
</script>

<style scoped lang="scss">
.inner-main{
    padding-top: 100px ;
}
.footer-inner-wrap{
    display: flex;
    justify-content: space-around ;
    background: #000;
}
.colfooter{
    display: flex;
    flex-direction: column;
    gap: 10px ;
    color: white ;
    padding: 20px ;
}
main{
    height: 80vh ;
    max-width: 1300px ;
    width: 100% ;
    margin: auto ;
    div{
        h2{
            text-align: center;
        }
    }
}
.nav-wrapper{
    background: #000;
    color: white;
    position: fixed;
    width: 100%;    

}
nav{
    display: flex;
    justify-content: space-between;
    max-width: 1280px;
    font-weight: 600;
    padding: 20px 0;
    width: 100%;
    margin: 0 auto;
}
.text-wrapper{
    max-width: 1300px;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    margin: auto;
    padding-top: 100px ;
}

a{
    text-decoration: none ;
    color: white  ;
}
.p-wrap{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>