<template>
  <v-toolbar class="elevation-0 grey lighten-3">
    <v-toolbar-title>
      <h2><v-icon>mdi-music</v-icon> MusiCo</h2>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn x-large text to="/concerts">Concerts</v-btn>
    <v-spacer></v-spacer>
    <v-btn x-large text to="/artists">Artists</v-btn>
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