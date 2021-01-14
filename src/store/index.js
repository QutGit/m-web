import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((mdules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  mdules[moduleName] = value.default
  return mdules
}, {})

const store = new Vuex.Store({
  modules,
  getters
})

export default store
