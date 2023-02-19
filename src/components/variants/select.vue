<template>
    <div>
        <div>
            <v-select
            v-model="selected"
            :hint="`${select.state}, ${select.abbr}`"
            :items="items"
            item-title="state"
            item-value="abbr"
            label="Select"
            persistent-hint
            return-object
            single-line
            ></v-select>
        </div>
    </div>
</template>

<script>   
export default {
    name: 'Private',
    data: () => ({
        selected:'',
        select: { state: 'Choose here', abbr: 'FL' },
        items: [
          { id:1, state: 'Contacts', abbr: 'FL' },
          { id:2, state: 'Deals', abbr: 'GA' },
          { id:3, state: 'Companies', abbr: 'NY' },
        ],
    }),
    methods: {
    },
    computed:{

    },
    updated() {
    },
    watch:{
        selected(){
            if (this.selected.state == 'Contacts') {
                this.$router.push({path: '/contacts'})
            }else if (this.selected.state == 'Deals'){
                this.$router.push({path: '/deals'})
            }else if (this.selected.state == 'Companies') {
                this.$router.push({path: '/comapnies'})
            }
        }
    }
}
</script>

<style scoped lang="scss">
</style>