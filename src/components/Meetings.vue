<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-expansion-panels>
            <v-expansion-panel
              v-for="meeting in getMeetings"
              :key="meeting.id"
              @click="meetingChanged(!meeting.end_time, meeting.id)"
            >
              <Meeting :meeting="meeting" />
              <v-expansion-panel-content>
                <MeetingDetails :meeting="meeting" />
                <v-divider class="my-10" />
                <ParticipantDetails :meeting="meeting" />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import Meeting from "./Meeting"
import MeetingDetails from "./MeetingDetails"
import ParticipantDetails from "./ParticipantDetails"
import { mapActions, mapGetters } from "vuex"

export default {
  name: "Meetings",

  data: () => ({}),
  components: {
    Meeting,
    MeetingDetails,
    ParticipantDetails,
  },
  methods: {
    ...mapActions(["fetchMeetings", "fetchParticipants", "fetchReportPolling"]),
    meetingChanged(live, meetingId) {
      if (live) this.fetchParticipants()
      else this.fetchReportPolling(meetingId)
    },
  },
  computed: {
    ...mapGetters(["getMeetings"]),
  },
  created() {
    this.fetchMeetings()
  },
}
</script>
