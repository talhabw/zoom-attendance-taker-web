<template>
  <v-row no-gutters>
    <v-col cols="12">
      Started at : {{ formatDate(meeting.start_time) }}
      <br />
      Ended at :
      {{ meeting.end_time ? formatDate(meeting.end_time) : "Still continuing" }}
      <br />
      Duration :
      {{
        meeting.duration
          ? meeting.duration
          : Math.floor(
              timeDiff(
                meeting.start_time,
                new Date(new Date().toLocaleString("en")).toISOString()
              )
            )
      }}
      <!--
      <br />
      <span v-if="getLoading == false">
        Participant Count :
        {{
          meeting.end_time
            ? getReportPolling.verified_members.length
            : getParticipants.length
        }}
      </span> 
      <br />
      -->
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "MeetingDetails",

  props: ["meeting"],
  data: () => ({}),
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleString("tr-TR", {
        timeZone: "Turkey",
      })
    },
    timeDiff(start, end) {
      start = new Date(start)
      end = new Date(end)
      let diff = Math.abs((end - start) / 36e5)

      return diff * 60
    },
  },
  created() {
    //console.log(this.meeting)
  },
}
</script>

<style></style>
