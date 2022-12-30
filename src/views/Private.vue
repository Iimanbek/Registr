<template>
    <div>
        <div>
            <nav>
                <span>LOGO</span>
                <span>about</span>
                <span>Projects</span>
                <span>Home</span>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Private',
    data: () => ({
        hello: 'hello world'
    }),
}
</script>

<style lang="scss">
nav{
    display: flex;
    justify-content: space-between;
    max-width: 1280px ;
    width: 100%;
    margin: 0 auto;
    
}
</style>