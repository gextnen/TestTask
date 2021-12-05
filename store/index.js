export const state = () => ({
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
      type: 'empty',
      content: []
    })
  },
  ADD_CONTENT_TO_CONDITION_ITEM (state, { index }) {
    state.conditionList[index].content.push([])
  },
  CHANGE_TYPE_OF_ITEM_CONDITION_LIST (state, {
    type,
    index
  }) {
    state.conditionList[index].type = type
  },
  UPDATE_DATA_ITEM_CONDITION_LIST (state, { data, indexElem, indexCond }) {
    state.conditionList[indexCond].content[indexElem] = data
  },
  DELETE_ITEM_FROM_CONDITION_LIST (state, index) {
    state.conditionList.splice(index, 1)
  }
}

export const actions = {
  addItemToDiapasonList ({ commit }) {
    commit('ADD_ITEM_TO_DIAPASON_LIST')
  },
  // conditionList methods
  addItemToConditionList ({ commit }) {
    commit('ADD_ITEM_TO_CONDITION_LIST')
  },
  deleteItemFromConditionList ({ commit }, index) {
    commit('DELETE_ITEM_FROM_CONDITION_LIST', index)
  },
  // Item conditionList methods
  changeTypeItemConditionList ({ commit }, { type, index }) {
    commit('CHANGE_TYPE_OF_ITEM_CONDITION_LIST', { type, index })
  },
  updateDataFromConditionItem ({ commit }, { data, indexElem, indexCond }) {
    commit('UPDATE_DATA_ITEM_CONDITION_LIST', { data, indexElem, indexCond })
  },
  addContentToConditionItem ({ commit }, { index }) {
    commit('ADD_CONTENT_TO_CONDITION_ITEM', { index })
  }
}
export const getters = {
  ConditionList (state) {
    return state.conditionList
  }
}
