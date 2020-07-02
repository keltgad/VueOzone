import dadataApi from "../../api/dadataApi"

const state = () => ({
  suggestions: []
})

const getters = {
    doneSuggestions: state => {
      console.log(state.suggestions)
      return state.suggestions.map(item => ({
        name: item.data.name.short_with_opf,
        inn: item.data.inn,
        ogrn: item.data.ogrn,
        kpp: item.data.kpp,
        fio: item.data.management ? item.data.management.name : "-"
      }))
    }
  }

const actions = {
  getSuggestions: ({commit}, query) => {
    dadataApi.getSuggestions(query).then(data => {
      commit("setSuggestions", data.suggestions);
    })
  }
}

const mutations = {
  setSuggestions: (state, data) => {
    state.suggestions = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
