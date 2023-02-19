<template>
    <div class="main_wrapper">
        <BaseSelect/>
        <div class="inner">
            <h1 class="hhhh">Welcome, Please choose the variante below</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
.main_wrapper{
    background: #191919;
    height: 100vh ;
    color: white;
    .inner{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        .hhhh{
            text-align: center;
            margin-top: 200px;
        }
    }
}
</style>