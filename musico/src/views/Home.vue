<template>
  <v-main>
    <NavBar/>

    <v-container>
      <v-row class="my-10">
        <v-col cols="6">
          <v-card class="pa-5 elevation-0" height="700px"> 
            <v-img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQrdiwW-8REPZ37xf7Q53AWMJop2NDglOI9Dsnx9QU2TLNtIDHHHtSa3oG92h_7LzNPY&usqp=CAU" width="600px" ></v-img>
            <h1 class="blue-grey--text text--darken-4">Discover your favorite concerts and artists</h1>
            <h2 class="font-italic blue-grey--text text--darken-4">Be the first to know about concerts, tour announcements and news based on the music you love</h2>
            <v-btn x-large center class="my-10" color="red darken-1 white--text">Find concerts <v-icon right>mdi-chevron-right</v-icon> </v-btn>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card class="pa-5 elevation-0" height="700px">
            <v-img class="align-end"  src="https://st3.depositphotos.com/1001599/18936/v/450/depositphotos_189361000-stock-illustration-dj-mixing-music-on-turntables.jpg" width="600px"  ></v-img>
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
