<template>
  <div class="layout-with-sidebar">
    <Sidebar />
    <!--    <nuxt />-->
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  components: { Sidebar }
}
</script>
<style>
html, body {
  font-family: sans-serif;
  padding: 0;
  height: 100%;
}
body {
  margin-top: -15px;
}

</style>
