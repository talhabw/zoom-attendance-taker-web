<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        <v-row class="text-center">
          <v-col>
            Participant Details
          </v-col>
        </v-row>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row no-gutters>
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
              <v-skeleton-loader
                color="grey darken-2"
                type="table-tbody"
                v-if="getLoading == true"
              ></v-skeleton-loader>
              <v-data-table
                v-else
                :headers="
                  !meeting.end_time
                    ? createLiveHeaders(getParticipants)
                    : createEndedHeaders(getReportPolling.members)
                "
                :items="
                  !meeting.end_time ? getParticipants : getReportPolling.members
                "
                :search="search"
                :single-expand="singleExpand"
                :expanded.sync="expanded"
                item-key="user_number"
                show-expand
              >
                <template v-slot:expanded-item="{ headers, item }">
                  <td :colspan="headers.length">
                    <span
                      class="my-10 d-block"
                      outlined
                      v-for="(report, index) in item.report_time"
                      :key="index"
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
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "ParticipantDetails",

  props: ["meeting"],
  data: () => ({
    search: "",
    singleExpand: true,
    expanded: [],
  }),
  methods: {
    ...mapActions(["fetchParticipants", "fetchReportPolling"]),
    createLiveHeaders(obj) {
      obj = Object.keys(obj[0])
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
      obj = Object.keys(obj[0])
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
      let participant = this.getReportPolling.members.find(
        (participant) => participant.id == p.id
      )
      return participant.report_time
    },
  },
  computed: mapGetters(["getLoading", "getParticipants", "getReportPolling"]),
  created() {
    //console.log(this.meeting)
  },
}
</script>

<style></style>
