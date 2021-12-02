<template>
  <div class="condition-block">
    <div class="condition-block__header">
      <div class="condition-title">
        <span class="condition-title__main">
          Условие 1
        </span>
      </div>
      <div class="condition-select">
        <v-select placeholder="Выберите условие" v-model="optionItem" :options="optionList"></v-select>
      </div>
    </div>
    <div class="condition-block__body">
      <div v-if="optionItem !=null && optionItem.name==='AgeRespond'" id="SelectAge">
        <div class="row">
          <div class="condition-title">
            <span class="condition-title__secondary">
              Диапазон 1
            </span>
          </div>
          <div class="condition-content">
            <span> от </span> <input type="number" class="input-diapason">
            <span> до </span><input type="number" class="input-diapason">
          </div>
        </div>
        <DiapasonBlock v-for="(elem, index) in diapasonList" :key="index" :index="index"/>
      </div>
    </div>
    <div class="condition-block__footer">
      <div class="condition-title">
      </div>
      <div class="condition-content">
        <div class="condition-content__buttons">
          <button class="button-add" v-if="optionItem !=null && optionItem.name==='AgeRespond'" v-on:click="addDiapason">
            <span class="button-add__plus">
              <plus/>
            </span>
            <span>
              Добавить диапазон
            </span>
          </button>
          <button class="button-delete">
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
import DiapasonBlock from './DiapasonBlock'
import Plus from './icons/plus'

Vue.component('v-select', vSelect)

export default {
  name: 'AddCondition',
  components: {
    Plus,
    DiapasonBlock
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
      diapasonList: []
    }
  },
  methods: {
    ...mapActions([
      'addItemToDiapasonList'
    ]),
    addDiapason () {
      this.addItemToDiapasonList()
      this.diapasonList = this.$store.getters.DiapasonList
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.condition-block {
  border-bottom: 1px solid #E3E3E3;
  background-color: #FFFCF5;
  margin-top: 10px;
  padding: 20px 40px;

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

.button-add {
  padding: 10px;
  border-radius: 7px;
  border: 2px solid #DBF28B;
  color: #81A500;
  background-color: transparent;

  &:hover {
    background-color: rgba(129, 165, 0, 0.1);
    cursor: pointer;
  }
}

.condition-content {
  max-width: calc(100% - 240px);
  flex: 1;
}

.row {
  margin-bottom: 10px;
}

.button-delete {
  float: right;
  padding: 10px;
  border-radius: 7px;
  border: 2px solid #FFD2D2;
  color: #F3180A;
  background-color: transparent;

  &:hover {
    background-color: rgba(243, 24, 10, 0.1);
    cursor: pointer;
  }
}
</style>
