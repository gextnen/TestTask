<template>
  <div class="status-card-block">
    <StatusCardElem v-for="(elem, index) in statusStoreList" :key="index" :index="index" :indexCondition="indexCondition" />
    <div class="row condition-footer">
      <div class="condition-title">
      </div>
      <div class="condition-buttons">
        <button class="button-add" @click="addStatus">
          <span>Добавить статус</span>
        </button>
        <button class="button-delete" @click="deleteCondition(indexCondition)">
          <span>Удалить условие</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import StatusCardElem from './StatusCardElem'

export default {
  name: 'StatusCardBlock',
  components: { StatusCardElem },
  props: {
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
      statusStoreList: []
    }
  },
  mounted () {
    this.changeTypeItemConditionList({
      type: 'StatusCard',
      index: this.indexCondition
    })
  },
  methods: {
    ...mapActions([
      'deleteItemFromConditionList',
      'changeTypeItemConditionList'
    ]),
    addStatus () {
      this.statusStoreList.push({
        name: 'statusItem'
      })
    },
    deleteCondition (indexCondition) {
      this.deleteItemFromConditionList(indexCondition)
    }
  }
}
</script>

<style lang="scss" scoped>

//.status-card-block {
//  display: flex;
//  flex-direction: column;
//}

.condition-title {
  max-width: 240px;
  display: flex;
  align-items: center;
  flex: 1;
}

.condition-content {
  max-width: calc(100% - 240px);
  padding-right: 10%;
  flex: 1;
}

.condition-buttons {
  display: flex;
  justify-content: space-between;
  flex: 1;
}

.row {
  display: flex;
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

.condition-footer {
  margin-top: 40px;
}
</style>
