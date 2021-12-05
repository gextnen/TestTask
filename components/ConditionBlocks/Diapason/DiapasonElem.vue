<template>
  <div class="row">
    <div class="condition-title">
      <span v-if="index>0" class="condition-title__or">
        или
      </span>
      <span class="condition-title__secondary">
        Диапазон {{ index + 1 }}
      </span>
    </div>
    <div class="condition-content">
      <span> от </span> <input type="number" v-model="diapasonListData.data[0]" class="input-diapason" @change="setDataToStore">
      <span> до </span> <input type="number" v-model="diapasonListData.data[1]" class="input-diapason" @change="setDataToStore">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DiapasonElem',
  props:
    {
      index: Number,
      indexCondition: Number
    },
  data () {
    return {
      diapasonListData: {
        data: []
      }
    }
  },
  mounted () {
    this.addContentToConditionItem({ index: this.indexCondition })
  },
  methods: {
    ...mapActions(
      ['addContentToConditionItem',
        'updateDataFromConditionItem']),
    setDataToStore () {
      this.updateDataFromConditionItem({
        data: [this.diapasonListData.data[0], this.diapasonListData.data[1]],
        indexElem: this.index,
        indexCond: this.indexCondition
      })
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
  background-color: #fff;
  max-width: 110px;
  margin-right: 10px;
}

.condition-content {
  max-width: calc(100% - 240px);
  flex: 1;
}

</style>
