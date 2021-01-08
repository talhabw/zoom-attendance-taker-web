import axios from "axios"

const state = {
  reportPolling: [],
}

const getters = {
  getReportPolling: (state) => state.reportPolling,
}

const actions = {
  async fetchReportPolling({ commit }) {
    const response = await axios.get("https://zoom-polling.heroku.com/poll")
    commit("setReportPolling", response.data)
  },
}

const mutations = {
  setReportPolling: (state, reportPolling) =>
    (state.reportPolling = reportPolling),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
