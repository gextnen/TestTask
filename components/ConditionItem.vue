<template>
  <div class="condition-block">
    <div class="condition-block__header">
      <div class="condition-title">
        <span class="condition-title__main">
          Условие {{ indexCondition + 1 }}
        </span>
      </div>
      <div class="condition-select">
        <v-select v-model="optionItem" :options="optionList" placeholder="Выберите условие"></v-select>
      </div>
    </div>
    <div class="condition-block__body">
      <div v-if="optionItem !=null && optionItem.name==='AgeRespond'">
        <DiapasonBlock :indexCondition="indexCondition" />
      </div>
      <div v-if="optionItem !=null && optionItem.name==='TypeCard'">
        <TypeCardBlock :indexCondition="indexCondition" />
      </div>
      <div v-if="optionItem !=null && optionItem.name==='StatusCard'">
        <StatusCardBlock :indexCondition="indexCondition" />
      </div>
    </div>
    <div v-if="optionItem==='' || optionItem===null" class="condition-block__footer">
      <div class="condition-title">
      </div>
      <div class="condition-content">
        <div class="condition-content__buttons">
          <button class="button-delete" @click="deleteCondition(indexCondition)">
            <span>Удалить условие</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import vSelect from 'vue-select'
import { mapActions } from 'vuex'
import DiapasonBlock from './ConditionBlocks/Diapason/DiapasonBlock'
import TypeCardBlock from './ConditionBlocks/TypeCard/TypeCardBlock'
import StatusCardBlock from './ConditionBlocks/StatusCard/StatusCardBlock'

Vue.component('v-select', vSelect)

export default {
  name: 'AddCondition',
  components: {
    StatusCardBlock,
    TypeCardBlock,
    DiapasonBlock
  },
  props: {
    indexCondition: Number
  },
  data () {
    return {
      optionItem: '',
      optionList: [
        {
          id: 1,
          name: 'AgeRespond',
          label: 'Возраст респондента'
        },
        {
          id: 2,
          name: 'TypeCard',
          label: 'Тип карты лояльности'
        },
        {
          id: 3,
          name: 'StatusCard',
          label: 'Статус карты лояльности'
        }
      ],
      diapasonList: [],
      typesCardList: []
    }
  },
  methods: {
    ...mapActions([
      'addItemToDiapasonList',
      'deleteItemFromConditionList'
    ]),
    addDiapason () {
      // this.addItemToDiapasonList()
      // this.diapasonList = this.$store.getters.DiapasonList
      this.diapasonList.push({
        name: 'diapasonItem'
      })
    },
    deleteCondition (indexCondition) {
      this.deleteItemFromConditionList(indexCondition)
    }
  }
}
</script>

<style lang="scss" scoped>
.condition-block {
  border-bottom: 1px solid #E3E3E3;
  background-color: #FFFCF5;
  padding: 20px 40px;
  &:nth-child(2n) {
    background-color: #F8FAFF;
    .condition-title__main{
      color: #2248A6;
    }
  }
  &:nth-child(3n) {
    background-color: #FAFFF8;
    .condition-title__main{
      color: #6DA622;
    }
  }
  &:nth-child(4n) {
    background-color: #FAFAFA;
    .condition-title__main{
      color: #000;
    }
  }
  &__header {
    display: flex;
    align-items: center;
  }

  &__body {
    margin-top: 20px;
  }

  &__footer {
    margin-top: 35px;
    display: flex;
    align-items: center;
  }
}

.condition-select {
  /*padding: 10px 5px;*/
  /*border-radius: 5px;*/
  /*border: 2px solid #E3E3E3;*/
  //max-width: 70%;
  background-color: #fff;
  flex: 1;
}

.condition-title {
  max-width: 240px;
  flex: 1;

  &__main {
    font-size: 14px;
    color: #A37200;
    font-weight: bold;
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
}

.input-diapason {
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #E3E3E3;
  flex: 1;
  max-width: 110px;
  margin-right: 10px;
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

.row {
  margin-bottom: 10px;
}

</style>
