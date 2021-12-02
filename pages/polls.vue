<template>
  <div>
    <Header/>
    <div class="">
      Дом → опросы → Добавить опрос
    </div>
    <div class="pools-content">
      <div class="pools-nav">
        <div class="pools-nav__item">
          <nuxt-link to="/polls/params">Параметры</nuxt-link>
        </div>
        <div class="pools-nav__item">
          <nuxt-link to="/polls/questions">Вопросы</nuxt-link>
        </div>
        <div class="pools-nav__item">
          <nuxt-link to="/polls/logic">Логика</nuxt-link>
        </div>
        <div class="pools-nav__item">
          <nuxt-link to="/polls/conditions">Условия</nuxt-link>
        </div>
        <div class="pools-nav__item">
          <nuxt-link to="/polls/respondents" class="active">Респонденты</nuxt-link>
        </div>
      </div>
      <div class="pools-wrapper">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'polls',
  components: { Header }
}
</script>

<style lang="scss" scoped>
a {
  text-decoration: none !important;
}

.pools-content {
  margin-top: 40px;
  max-width: 1020px;
}
.pools-wrapper{
  min-height: 100vh;
  box-shadow: 0 14px 28px rgba(0,0,0,0.20), 0 10px 10px rgba(0,0,0,0.15);
  margin-top: 12px;
}
.pools-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  &__item {
    position: relative;
    display: flex;
    justify-content: center;
    max-width: 15%;
    flex: 1;
    a {
      color: #258539;
    }
  }

  &::after {
    content: '';
    width: 100%;
    border-bottom: solid 1px #C1E837;
    position: absolute;
    left: 0;
    top: 30px;
    z-index: 1;
  }
}

.active {
  color: #000 !important;
  font-weight: bold;
  &::after {
    content: '';
    width: 100%;
    border-bottom: solid 4px #C1E837;
    position: absolute;
    left: 0;
    top: 27px;
    z-index: 1;
  }
}
</style>
