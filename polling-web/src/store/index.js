import Vue from "vue"
import Vuex from "vuex"
import meetingReport from "./modules/meetingReport"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    meetingReport,
  },
})
