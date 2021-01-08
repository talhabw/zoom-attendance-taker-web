<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          style="line-height: 33px;"
          class="text-center py-3"
          elevation="24"
          shaped
        >
          <v-container>
            <v-row class="blue--text font-weight-bold">
              <v-col cols="1">
                STATUS
              </v-col>
              <v-col cols="3">
                DURATION
              </v-col>
              <v-col cols="6">
                TOPIC
              </v-col>
              <v-spacer />
            </v-row>
            <hr class="my-3" color="purple" />
            <v-row>
              <v-col cols="1" class="red--text text-h5 font-weight-bold">
                LIVE
              </v-col>
              <v-col cols="3" class="green--text text--darken-2">
                <span v-if="status == 'LIVE'">
                  {{ new Date().getTime() - getReportMeeting.join_time }}
                </span>
                <span v-if="status == 'ENDED'">
                  {{ getReportMeeting.duration }}
                </span>
              </v-col>
              <v-col>
                {{ getReportMeeting.topic }}
              </v-col>
              <v-col cols="2">
                <v-btn>
                  DETAILS
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            :headers="
              status == 'LIVE'
                ? createLiveHeaders(getParticipants[0])
                : createEndedHeaders(getReportPolling.members[0])
            "
            :items="getParticipants"
            :search="search"
            :single-expand="singleExpand"
            :expanded.sync="expanded"
            item-key="user_number"
            show-expand
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Participants</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-switch
                  v-model="singleExpand"
                  label="Single expand"
                  class="mt-2"
                ></v-switch>
              </v-toolbar>
            </template>
            <template v-slot:expanded-item="{ headers, item }">
              <td :colspan="headers.length">
                <span
                  class="my-10 d-block"
                  outlined
                  :v-for="
                    (report, index) in status == 'LIVE'
                      ? findParticipant(item).report_time
                      : item.report_time
                  "
                  :key="status == 'LIVE' ? index : item.id"
                >
                  Joined at : {{ report.join_time }}
                  <br />
                  Left at : {{ report.leave_time }}
                  <v-divider />
                </span>
              </td>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  name: "HelloWorld",

  data: () => ({
    search: "",
    singleExpand: true,
    expanded: [],
  }),
  methods: {
    createLiveHeaders(obj) {
      obj = Object.keys(obj)
      return [
        {
          text: "Name",
          align: "start",
          value: obj[1],
        },
        { text: "Number", value: obj[2] },
        { text: "Class", value: obj[3] },
        { text: "Join Time", value: obj[4] },
        { text: "Actions", value: "data-table-expand" },
      ]
    },
    createEndedHeaders(obj) {
      obj = Object.keys(obj)
      return [
        {
          text: "Name",
          align: "start",
          value: obj[1],
        },
        { text: "Number", value: obj[2] },
        { text: "Class", value: obj[3] },
        { text: "Duration", value: obj[5] },
        { text: "Here", value: obj[6] },
        { text: "Actions", value: "data-table-expand" },
      ]
    },
    findParticipant(p) {
      return this.getReportsPerParticipant.find(
        (participant) => participant.id == p.id
      )
    },
    log(d) {
      console.log(d)
    },
  },
  computed: {
    ...mapGetters([
      "getParticipants",
      "getReportMeeting",
      "getReportsPerParticipant",
      "getReportPolling",
    ]),
  },
}
</script>
