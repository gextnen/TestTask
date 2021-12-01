<template>
  <div>
    <Header/>
    <div class="">
      Дом → опросы → Добавить опрос
    </div>
    <div class="pools-content">
      <div class="pools-nav">
        <nuxt-link to="/polls/params" class="pools-nav__item">Параметры</nuxt-link>
        <nuxt-link to="/polls/questions" class="pools-nav__item">Вопросы</nuxt-link>
        <nuxt-link to="/polls/logic" class="pools-nav__item">Логика</nuxt-link>
        <nuxt-link to="/polls/conditions" class="pools-nav__item">Условия</nuxt-link>
        <nuxt-link to="/polls/respondents" class="pools-nav__item">Респонденты</nuxt-link>
      </div>
      <nuxt />
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
.pools-content{
  margin-top: 40px;
  max-width: 1020px;
}
.pools-nav {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  &__item{
    color: #258539;
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

</style>
