<template>
  <div class="nav-sidebar">
    <div class="nav-logo">
      <img src="~/assets/icons/redCircle.svg" alt="" class="nav-item__icon" />
    </div>
    <div class="nav-item">
      <img src="~/assets/icons/list.svg" alt="" class="nav-item__icon" />
      <span class="nav-item__title">Опросы</span>
    </div>
    <div class="nav-item">
      <img src="~/assets/icons/persons.svg" alt="" class="nav-item__icon" />
      <span class="nav-item__title">Пользователи</span>
    </div>
    <div class="nav-item">
      <flag icon-name="red" />
      <span class="nav-item__title">Черные списки</span>
    </div>
    <div class="nav-item">
      <img src="~/assets/icons/phone.svg" alt="" class="nav-item__icon" />
      <span class="nav-item__title">Колл-центр</span>
    </div>
  </div>
</template>

<script>
import Flag from './icons/flag'
export default {
  name: 'Sidebar',
  components: { Flag }
}
</script>

<style lang="scss" scoped>
.nav-sidebar {
  width: 180px;
  border-right: 1px solid #EDEDED;
  padding-top: 15px;
  min-height: 100vh;
  .nav-item:hover {
    background-color: #f7f7f7;
  }
}
.nav-item {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  &__title{
    font-size: 14px;
    margin-top: 8px;
  }
  &__icon {
    width: 40px;
    img {
      fill: pink;
    }
  }
}
.nav-logo{
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 10px 60px;
}

</style>
