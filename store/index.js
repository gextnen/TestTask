export const state = () => ({
  diapasonList: [],
  conditionList: []
})

export const mutations = {
  ADD_ITEM_TO_DIAPASON_LIST (state) {
    state.diapasonList.push({
      label: 'Диапазон'
    })
  },
  ADD_ITEM_TO_CONDITION_LIST (state) {
    state.conditionList.push({
      name: 'conditionItem'
    })
  },
  DELETE_ITEM_FROM_CONDITION_LIST (state, index) {
    console.log('DELETE_ITEM_FROM_CONDITION_LIST', index)
    state.conditionList.splice(index, 1)
  }
}

export const actions = {
  addItemToDiapasonList ({ commit }) {
    commit('ADD_ITEM_TO_DIAPASON_LIST')
  },
  addItemToConditionList ({ commit }) {
    commit('ADD_ITEM_TO_CONDITION_LIST')
  },
  deleteItemFromConditionList ({ commit }, index) {
    commit('DELETE_ITEM_FROM_CONDITION_LIST', index)
  }
}

export const getters = {
  DiapasonList (state) {
    return state.diapasonList
  },
  ConditionList (state) {
    return state.conditionList
  }
}
