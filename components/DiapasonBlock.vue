<template>
  <div class="row">
    <div class="condition-title">
      <span class="condition-title__or">
        или
      </span>
      <span class="condition-title__secondary">
        Диапазон {{ index + 2 }}
      </span>
    </div>
    <div class="condition-content">
      <span> от </span> <input type="number" class="input-diapason">
      <span> до </span><input type="number" class="input-diapason">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DiapasonBlock',
  props: {
    index: Object
  },
  mounted () {
    console.log('jopa', this.$store)
  }
}
</script>

<style lang="scss" scoped>
.condition-title {
  max-width: 240px;
  display: flex;
  align-items: center;
  flex: 1;
&__main{
   font-size: 14px;
   color: #A37200;
   font-weight: bold;
 }
  &__or{
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
.row{
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}
.input-diapason{
  padding: 10px;
  border-radius: 5px;
  border: 2px solid #E3E3E3;
  flex: 1;
  max-width: 110px;
  margin-right: 10px;
}
.condition-content{
  max-width: calc(100% - 240px);
  flex: 1;
}

</style>
