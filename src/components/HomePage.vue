<template>
  <v-container>
        <h2>Welcome Amigos!</h2>
        <h3>Feel free to share that beautiful brain of yours!</h3>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on" dark fab color="red" bottom fixed right>
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Enlighten Us!</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field label="Title" required></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-textarea
                      label="Description"
                      auto-grow
                      rows="1"
                      row-height="15"
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
              <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
  </v-container>
<!-- <v-btn dark fab color="red" @click="routeToContentForm" bottom fixed right> <v-icon dark>mdi-plus</v-icon> </v-btn> -->
<!-- above is how to navigate to a diff page -->
</template>

<script>
  export default {
    name: 'HelloWorld',
    components: {
    },
    data: () => ({
        dialog: false,
    }),
    methods: {
        routeToContentForm () {
            this.$router.push({ name: 'content-form'});
        },
    },
    }
</script>
<style>
</style>