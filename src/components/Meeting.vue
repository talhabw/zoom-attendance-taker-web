<template>
  <v-expansion-panel-header>
    <v-row style="line-height: 35px;" class="text-center">
      <v-col
        v-if="!meeting.end_time"
        sm="1"
        xs="12"
        class="green--text text--darken-2 text-h6 font-weight-bold"
      >
        {{ "LIVE" }}
      </v-col>
      <v-col v-else sm="1" xs="12" class="red--text text-h6 font-weight-bold">
        {{ "END" }}
      </v-col>
      <v-col sm="3" xs="12" class="font-weight-medium">
        {{ formatDate(meeting.start_time) }}
      </v-col>
      <v-col sm="8" xs="12">
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
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("tr-TR", {
        timeZone: "Turkey",
      })
    },
  },
  created() {
    //console.log(this.meeting)
  },
}
</script>
