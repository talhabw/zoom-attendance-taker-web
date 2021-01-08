<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card
          style="line-height: 33px; background-color: pink;"
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
              <v-col cols="4">
                TOPIC
              </v-col>
              <v-col cols="2">
                HOST
              </v-col>
              <v-spacer />
            </v-row>
            <hr class="my-3" color="purple" />
            <v-row>
              <v-col cols="1" class="red--text text-h5 font-weight-bold">
                LIVE
              </v-col>
              <v-col cols="3" class="green--text text--darken-2">
                for 27 Minute and 35 Seconds
              </v-col>
              <v-col>
                Bora Cetkin's meeting
              </v-col>
              <v-col cols="2">
                Bora Cetkin
              </v-col>
              <v-col cols="2">
                <v-btn>
                  details
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
          <v-card-title style="background-color: pink;">
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Search"
              single-line
              hide-details
            ></v-text-field>
          </v-card-title>
          <v-data-table
            style="background-color: pink;"
            :headers="createHeaders(allParticipants[0])"
            :items="allParticipants"
            :search="search"
          ></v-data-table>
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
  }),
  methods: {
    createHeaders(obj) {
      obj = Object.keys(obj)
      obj.shift()
      return [
        {
          text: "Name",
          align: "start",
          filterable: false,
          value: obj[0],
        },
        { text: "Class", value: obj[1] },
        { text: "Number", value: obj[2] },
        { text: "Join Time", value: obj[3] },
      ]
    },
  },
  computed: {
    ...mapGetters(["allParticipants"]),
  },
}
</script>
