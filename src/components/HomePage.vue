<template>
  <v-container>
        <div>asdfasdfasdf</div>
        <v-btn dark fab color="red" @click="routeToContentForm"> <v-icon dark>mdi-plus</v-icon> </v-btn>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {
    },
    data: () => ({}),
    methods: {
        routeToContentForm () {
            this.$router.push({ name: 'content-form'});
        },
    },
    }
</script>
<style>
</style>