import axios from "axios"

const state = {
  reportMeeting: [],
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
