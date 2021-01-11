<template>
  <v-expansion-panel-header>
    <v-row style="line-height: 35px;" class="text-center">
      <v-col
        v-if="!meeting.end_time"
        cols="1"
        class="green--text text--darken-2 text-h6 font-weight-bold"
      >
        {{ "LIVE" }}
      </v-col>
      <v-col v-else cols="1" class="red--text text-h6 font-weight-bold">
        {{ "END" }}
      </v-col>
      <v-col cols="3" class="font-weight-medium">
        {{ meeting.start_time }}
      </v-col>
      <v-col>
        {{ meeting.topic }}
      </v-col>
    </v-row>
  </v-expansion-panel-header>
</template>

<script>
export default {
  name: "Meeting",

  props: ["meeting"],
  data: () => ({}),
  created() {
    //console.log(this.meeting)
  },
}
</script>
