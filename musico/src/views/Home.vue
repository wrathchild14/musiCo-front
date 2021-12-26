<template>
  <h1>HELLO</h1>
</template>

<script>
import { getAPI } from "../axios-api.js";

export default {
  name: "Home",

  components: {},

  created() {
    // Axios for already created user with a token
    const access_token = 'ae8466b307125e94db84ca3e1394da9ca671a29c';

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
};
</script>
