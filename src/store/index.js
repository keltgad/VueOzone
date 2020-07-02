
import Vue from 'vue'
import Vuex from 'vuex'
import dadata from './modules/dadata'

Vue.use(Vuex)

export default new Vuex.Store({
modules: {
  dadata,
},
})
