import Vue from "vue"
import Vuex from "vuex"
import participants from "./modules/participants"
import reportPerParticipant from "./modules/reportPerParticipant"
import reportMeeting from "./modules/reportMeeting"
import reportPolling from "./modules/reportPolling"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    participants,
    reportPerParticipant,
    reportMeeting,
    reportPolling,
  },
})
