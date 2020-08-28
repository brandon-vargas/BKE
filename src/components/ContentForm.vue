<template>
    <v-container>
        <v-btn
            color="error"
            @click="overlay = !overlay">
        Show Overlay
        </v-btn>
        <v-overlay :value="overlay" style="padding:20px;">
            <!-- <v-card>
                <v-form
                ref="form"
                v-model="valid"
                lazy-validation
                style="padding:20px;">
                    <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Title"
                        required
                        ></v-text-field>

                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                        ></v-text-field>

                    <v-btn
                        color="warning"
                        @click="resetValidation"
                        >
                        Reset Validation
                        </v-btn>
            </v-form>
            </v-card> -->
        </v-overlay>
    </v-container>
</template>
<script>
export default {
    name: 'ContentForm',
    data () {
        return {
            overlay: false,
        }
    }
}
</script>