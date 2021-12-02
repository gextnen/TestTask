<template>
  <div class="respondents-content">
    <section class="row">
      <span class="add-pool">Добавить опрос</span>
    </section>
    <section class="conditionsList">
      <ConditionItem/>
    </section>
    <section class="respondents-add-condition">
      <div class="respondents-add-condition__content">
        <span> +</span>
        <span> Нажмите, чтобы добавить новое условие выборки.</span>
        <span> Все условия связываются между собой логическим "И"</span>
      </div>
    </section>
    <section class="respondents-footer">
      <button class="respondents-footer__test">
        Протестировать опрос
      </button>
      <button class="respondents-footer__next">
        Далее →
      </button>
    </section>
  </div>
</template>

<script>
import ConditionItem from '../../components/ConditionItem'

export default {
  name: 'Respondents',
  components: { ConditionItem }
}
</script>

<style lang="scss" scoped>

.add-pool {
  font-size: 18px;
  color: #AEAEAE;
  font-weight: 700;
}

.row {
  padding: 20px 40px 0;
}

.respondents-content {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.respondents-footer {
  display: flex;
  justify-content: space-between;
  background-color: #F4F7F9;
  padding: 30px;

  &__test {
    padding: 10px;
    color: #00A121;
    border-radius: 5px;
    border: 0;
    background-color: #fff;
    box-shadow: 0 1px 1px 1px #C7CACC;
  }

  &__next {
    padding: 10px;
    color: #fff;
    background-color: #06A326;
    border-radius: 5px;
    border: 0;
  }
}
.respondents-add-condition{
  padding: 40px;
  &__content{
    border-radius: 10px;
    border: 1px solid #E5ECF0;
    padding: 25px;
    display: flex;
    color: #007017;
    font-size: 14px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
