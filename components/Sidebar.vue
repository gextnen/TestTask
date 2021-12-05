<template>
  <div class="nav-sidebar">
    <div class="nav-logo">
      <nuxt-link to="/" class="logo">
        <img src="~/assets/icons/redCircle.svg" alt="" class="nav-item__icon"/>
      </nuxt-link>
    </div>
    <nuxt-link to="/polls" class="nav-item">
      <list />
      <span class="nav-item__title">Опросы</span>
    </nuxt-link>
    <nuxt-link to="/users" class="nav-item">
      <persons />
      <span class="nav-item__title">Пользователи</span>
    </nuxt-link>
    <nuxt-link to="/blackLists" class="nav-item">
      <flag />
      <span class="nav-item__title">Черные списки</span>
    </nuxt-link>
    <nuxt-link to="/callCenter" class="nav-item">
      <phone />
      <span class="nav-item__title">Колл-центр</span>
    </nuxt-link>
  </div>
</template>

<script>
import Flag from './icons/flag'
import List from './icons/list'
import Persons from './icons/persons'
import Phone from './icons/phone'

export default {
  name: 'Sidebar',
  data () {
    return {
      isActive: false
    }
  },
  components: {
    Phone,
    Persons,
    List,
    Flag
  }

}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
  color: black;
}

.nav-sidebar {
  width: 180px;
  border-right: 1px solid #EDEDED;
  margin-top: -8px;
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

  &__title {
    font-size: 14px;
    margin-top: 8px;
  }

  &__icon {
    width: 40px;
  }
}

.nav-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 10px 60px;
}

.nuxt-link-active {
  border: 2px solid #DBF28B;

  &:hover {
    background-color: transparent !important;
  }
  &.logo {
    border: none;
  }
}
</style>
