<template>
  <v-main>
    <NavBar/>

    <v-container>
      <v-row class="my-10">
        <v-col cols="6">
          <v-card class="pa-5 elevation-0" > 
            <v-img lazy-src="https://creativedesign.rs/cd_app/public/images/products/3313002426527403.jpg" src="https://creativedesign.rs/cd_app/public/images/products/3313002426527403.jpg"></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-5 elevation-0">
            <v-btn x-large center class="purple accent-2">Find concerts</v-btn>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
// import { getAPI } from "../axios-api.js";
import NavBar from '@/components/NavBar';

export default {
  name: "Home",

  components: { NavBar },
  /*
  created() {
    // Axios for already created user with a token
    const access_token = "ae8466b307125e94db84ca3e1394da9ca671a29c";

    getAPI
      .get("/user/", {
        headers: {
          Authorization: `Token ${access_token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log("ERROR");
        console.log(err);
      });
  },
  */
};
</script>
