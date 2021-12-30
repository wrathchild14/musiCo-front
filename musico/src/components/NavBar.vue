<template>
  <v-toolbar class="elevation-0 blue-grey darken-1">
    <v-toolbar-title style="cursor: pointer" @click="$router.push('/')">
      <v-btn x-large text to="/"> <v-icon>mdi-music</v-icon> MusiCo </v-btn>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn x-large text to="/concerts" class="white--text">Concerts</v-btn>
    <v-spacer></v-spacer>
    <v-btn x-large text to="/artists" class="white--text">Artists</v-btn>
    <v-spacer></v-spacer>
    <!-- Sign in button is in here as well -->
    <Login />
    
    
  </v-toolbar>
</template>


<script>
export default {
  components: {
    Login: () => import("@/components/Login"),
  },
};
</script>