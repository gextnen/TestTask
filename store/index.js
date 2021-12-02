export const state = () => ({
  diapasonList: []
})

export const mutations = {
  ADD_ITEM_TO_DIAPASON_LIST (state) {
    state.diapasonList.push({
      label: 'Диапазон'
    })
  }
}

export const actions = {
  addItemToDiapasonList ({ commit }) {
    commit('ADD_ITEM_TO_DIAPASON_LIST')
  }
}

export const getters = {
  DiapasonList (state) {
    return state.diapasonList
  }
}
