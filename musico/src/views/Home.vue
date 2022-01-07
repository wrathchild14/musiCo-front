<template>
  <v-main>
    <NavBar/>
    <v-card class="mx-auto my-5 elevation-0" width="90%">
      <v-container>
        <v-row class="my-10">
          <v-col cols="6">
            <v-card class="pa-5 elevation-0 mx-auto" height="700px"> 
              <v-img  src="./logo.png" width="500px" height="350px" ></v-img>
              <h1 class="blue-grey--text text--darken-4">Discover your favorite concerts and artists</h1>
              <h2 class="font-italic blue-grey--text text--darken-4">Be the first to know about concerts, tour announcements and news based on the music you love</h2>
              <v-btn x-large center class="my-10" color="red darken-1 white--text" to="/events">Find concerts <v-icon right>mdi-chevron-right</v-icon> </v-btn>
            </v-card>
          </v-col>
          <v-col cols="6">
            <v-card class="pa-5 elevation-0" height="700px">
              <v-img class="mx-auto"   src="https://st3.depositphotos.com/1001599/18936/v/450/depositphotos_189361000-stock-illustration-dj-mixing-music-on-turntables.jpg" width="600px"  ></v-img>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-main>
</template>

<script>
import NavBar from '@/components/NavBar';

export default {
  name: "Home",

  components: { NavBar },
};
</script>
