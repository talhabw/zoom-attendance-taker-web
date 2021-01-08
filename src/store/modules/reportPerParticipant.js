import axios from "axios"

const state = {
  reportPerParticipant: [],
}

const getters = {
  getReportsPerParticipant: (state) => state.reportPerParticipant,
}

const actions = {
  async fetchReportPerParticipant({ commit }) {
    const response = await axios.get(
      "https://zoom-polling.heroku.com/reportPerParticipant"
    )
    commit("setReportPerParticipant", response.data)
  },
}

const mutations = {
  setReportPerParticipant: (state, reportPerParticipant) =>
    (state.reportPerParticipant = reportPerParticipant),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
