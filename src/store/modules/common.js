
const state = {
  siteType: 1,
  tabIdx: 1,
  muType: 1
}

const mutations = {
  SITETYPE: (state, type) =>{
    state.siteType = type;
  },
  TABINDEX: (state, type) => {
    state.tabIdx = type;
  },
  MENUTYPE: (state, type) => {
    state.muType = type;
  }
}
const actions = {
  changeSiteType({commit}, type) {
    commit('SITETYPE', type);
  },
  changeTabIdx({ commit }, type) {
    commit('TABINDEX', type);
  },
  getMenuType({ commit }, type) {
    commit('MENUTYPE', type);
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
