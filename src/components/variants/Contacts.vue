<template>
    <div class="main_wrapper" >
        <BaseSelect/>
        <div>
            <v-btn @click="overlay = !overlay" class="fixed_btn">Create new company</v-btn>
            <div v-for="item in data" class="item_wrapper container">
                <div class="inner_item">
                    <v-list
                        class="lists"
                        :items="items"
                        item-props
                        lines="three"
                        >
                        <template v-slot:subtitle="{ subtitle }">
                        <div v-html="subtitle"></div>
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
        items: [
        { type: 'subheader', title: 'Today' },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ',
          subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        { type: 'divider', inset: true },
        {
          prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        ],
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
            const url = 'http://localhost:3000/Contacts'
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
.v-list.lists{
    border-radius: 10px;
}
.v-btn.fixed_btn{
    position: fixed;
    right: 0;
    bottom: 0 ;
    margin: 0 0 100px 0;
}
</style>