<template>
  <div class="status-diapason-block">
    <TypeCardElem v-for="(elem, index) in typeCardList" :key="index" :index="index" :indexCondition="indexCondition" />
    <div class="row condition-footer">
      <div class="condition-title">
      </div>
      <div class="condition-buttons">
        <button class="button-add" v-on:click="addTypeCardCond">
          <span>Добавить Тип</span>
        </button>
        <button class="button-delete" v-on:click="deleteCondition(indexCondition)">
          <span>Удалить условие</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TypeCardElem from './TypeCardElem'

export default {
  name: 'DiapasonBlock',
  components: { TypeCardElem },
  data () {
    return {
      typeCardList: []
    }
  },
  props: {
    indexCondition: Number
  },
  destroyed () {
    this.typeCardList = []
  },
  mounted () {
    this.changeTypeItemConditionList({
      type: 'TypeCard',
      index: this.indexCondition
    })
  },
  methods: {
    ...mapActions([
      'deleteItemFromConditionList',
      'changeTypeItemConditionList'
    ]),
    addTypeCardCond () {
      this.typeCardList.push({
        name: 'typeCardItem'
      })
    },
    deleteCondition (indexCondition) {
      this.deleteItemFromConditionList(indexCondition)
    }
  }
}
</script>

<style lang="scss" scoped>
.condition-title {
  max-width: 240px;
  display: flex;
  align-items: center;
  flex: 1;

  &__main {
    font-size: 14px;
    color: #A37200;
    font-weight: bold;
  }

  &__or {
    background-color: #F7F1E3;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
    margin-right: 20px;
  }

  &__secondary {
    font-size: 14px;
    font-weight: normal;
    color: #000000;
  }
}

.row {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.input-diapason {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #E3E3E3;
  flex: 1;
  max-width: 110px;
  margin-right: 10px;
}

.condition-content {
  max-width: calc(100% - 240px);
  flex: 1;
}

.condition-footer {
  margin-top: 30px;
}

.condition-buttons {
  flex: 1;
}
</style>
