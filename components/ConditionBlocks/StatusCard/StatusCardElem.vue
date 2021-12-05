<template>
  <div class="row">
    <div class="condition-title">
      <span v-if="index>0" class="condition-title__or">
        или
      </span>
      <span class="condition-title__secondary">
        Статус {{ index + 1 }}
      </span>
    </div>
    <div class="condition-content">
      <v-select
        v-model="statusItem"
        placeholder="Выберите статус"
        :options="statusList"
        @input="setDataToStore"
      ></v-select>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'StatusCardElem',
  props: {
    index: Number,
    indexCondition: Number
  },
  data () {
    return {
      statusList: [
        {
          id: 1,
          name: 'active',
          label: 'Активна'
        },
        {
          id: 2,
          name: 'notActive',
          label: 'Не активна'
        }
      ],
      statusItem: ''
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
        data: this.statusItem.name,
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

.condition-content {
  max-width: calc(100% - 240px);
  flex: 1;
}
</style>
