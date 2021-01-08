import axios from "axios"

const state = {
  participants: [
    {
      id: "ZHuwL745TyaVmJ5PsiFsIQ",
      user_name: "Talha Karasu",
      user_number: 136,
      user_class: "9/A",
      join_time: "2021-01-06T15:37:18Z",
    },
    {
      id: "Bkjgasd7GVBDi7ajl8H6qI",
      user_name: "Faruk Olusan",
      user_number: 358,
      user_class: "9/B",
      join_time: "2021-01-06T15:38:18Z",
    },
    {
      id: "Nhasdjn8Oaso8AHShndO8Q",
      user_name: "Bora Cetkin",
      user_number: 756,
      user_class: "9/C",
      join_time: "2021-01-06T15:39:18Z",
    },
  ],
}

const getters = {
  getParticipants: (state) => state.participants,
}

const actions = {
  async fetchParticipants({ commit }) {
    let response = await axios.get(
      "https://zoom-polling.heroku.com/participants"
    )
    response.data.forEach((element) => {
      element.join_time = new Date(element.join_time).toLocaleString("tr-TR", {
        timeZone: "Turkey",
      })
    })
    commit("setParticipants", response.data)
  },
}

const mutations = {
  setParticipants: (state, participants) => (state.participants = participants),
}

export default {
  state,
  getters,
  actions,
  mutations,
}
