<template>
  <div class="layout-with-sidebar">
    <Sidebar/>
    <div class="container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
  name: 'default',
  components: {
    Sidebar
  }
}
</script>

<style lang="scss" scoped>
.layout-with-sidebar {
  display: flex;
  max-width: 1330px;

}

.container {
  max-width: 1330px;
  padding: 20px 60px;
  flex: 1;
}
</style>
