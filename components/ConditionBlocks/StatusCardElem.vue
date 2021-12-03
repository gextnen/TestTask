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
      <v-select placeholder="Выберите статус" v-model="statusItem" :options="statusList"></v-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatusCardElem',
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
      ]
    }
  },
  props: {
    index: Object
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
