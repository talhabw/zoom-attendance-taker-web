import axios from "axios"

const state = {
  reportMeeting: [
    {
      id: "ZHuwL745TyaVmJ5PsiFsIQ",
      user_name: "Talha Karasu",
      user_number: 136,
      user_class: "9/A",
      report_time: [
        {
          join_time: "a2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "b2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "c2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
      ],
    },
    {
      id: "Bkjgasd7GVBDi7ajl8H6qI",
      user_name: "Faruk Olusan",
      user_number: 358,
      user_class: "9/B",
      report_time: [
        {
          join_time: "d2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "e2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "f2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
      ],
    },
    {
      id: "Nhasdjn8Oaso8AHShndO8Q",
      user_name: "Bora Cetkin",
      user_number: 756,
      user_class: "9/C",
      report_time: [
        {
          join_time: "g2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "h2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
        {
          join_time: "j2021-01-06T15:37:18Z",
          leave_time: "2021-01-06T15:37:18Z",
        },
      ],
    },
  ],
}

const getters = {
  getReportMeeting: (state) => state.reportMeeting,
}

const actions = {
  async fetchReportMeeting({ commit }) {
    const response = await axios.get(
      "https://zoom-polling.heroku.com/reportMeeting"
    )
    commit("setReportMeeting", response.data)
  },
}

const mutations = {
  setReportMeeting: (state, reportMeeting) =>
    (state.reportMeeting = reportMeeting),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
