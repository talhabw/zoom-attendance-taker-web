<template>
  <v-app>
    <v-app-bar app color="primary" dark height="75">
      <div class="d-flex align-center ">
        <v-img
          alt="EALRobotik Logo"
          class="shrink"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="130"
        />
      </div>

      <v-spacer />

      <v-btn
        class="mr-3"
        href="https://github.com/TalhaK15/ealrobotik-yoklama-api"
        target="_blank"
        text
        outlined
      >
        <span class="mr-2">API</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        href="https://github.com/TalhaK15/ealrobotik-yoklama-web"
        target="_blank"
        text
        outlined
      >
        <span class="mr-2">WEB</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
    </v-app-bar>

    <Meetings />
  </v-app>
</template>

<script>
import Meetings from "./components/Meetings"

export default {
  name: "App",

  components: {
    Meetings,
  },

  data: () => ({
    //
  }),
}
</script>
