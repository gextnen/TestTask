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
  name: 'TypeCardBlock'
}
</script>

<style scoped>

</style>
