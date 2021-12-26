<template>
  <v-app id="inspire">
    <v-main>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar v-if="!this.success" dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>

              <v-toolbar v-if="this.success" dark color="green">
                <v-toolbar-title>Logged in</v-toolbar-title>
              </v-toolbar>

              <v-card-text>
                <v-form>
                  <!-- Username -->
                  <v-text-field
                    v-model="username"
                    name="login"
                    label="Login"
                    type="text"
                  ></v-text-field>
                  <!-- Password -->
                  <v-text-field
                    v-model="password"
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey" to="/">Home</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { getAPI } from "../axios-api.js";

export default {
  name: "Login",
  props: {
    source: String,
  },
  data: () => ({
    username: "",
    password: "",
    success: false,
  }),
  methods: {
    login: async function () {
      this.success = false;

      getAPI
        .post("/user/login/", {
          username: this.username,
          password: this.password,
        })
        .then((response) => {
          const message = response.data.data.message; // ? Because the response's json is already called data
          const token = response.data.token;
          this.success = true;
          console.log("Message: " + message, "\nTOKEN: " + token);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style></style>
