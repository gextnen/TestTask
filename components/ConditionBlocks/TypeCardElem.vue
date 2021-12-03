<template>
  <div class="row">
    <div class="condition-title">
      <span>Тип {{ index + 1 }}</span>
    </div>
    <div class="condition-content">
      <v-select placeholder="Выберите тип" v-model="typeItem" :options="typesList"></v-select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeCardBlock',
  props: {
    index: Object
  },
  data () {
    return {
      typesList: [
        {
          id: 1,
          name: 'Gold',
          label: 'Gold'
        },
        {
          id: 2,
          name: 'Silver',
          label: 'Silver'
        },
        {
          id: 3,
          name: 'Bronze',
          label: 'Bronze'
        }
      ]
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
}

.condition-content {
  max-width: calc(100% - 240px);
  padding-right: 10%;
  flex: 1;
}
</style>
