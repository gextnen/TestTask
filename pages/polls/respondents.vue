<template>
  <div class="respondents-content">
    <section class="row">
      <span class="add-pool">Добавить опрос</span>
    </section>
    <section class="conditions-list">
      <ConditionItem v-for="(elem, index) in conditionsList" :key="index" :indexCondition="index"/>
    </section>
    <section class="respondents-add-condition">
      <div class="respondents-add-condition__content" v-on:click="addCondition">
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
import { mapActions } from 'vuex'
import ConditionItem from '../../components/ConditionItem'

export default {
  name: 'Respondents',
  components: { ConditionItem },
  data () {
    return {
      conditionsList: []
    }
  },
  methods: {
    ...mapActions([
      'addItemToConditionList'
    ]),
    addCondition () {
      this.addItemToConditionList()
      this.conditionsList = this.$store.getters.ConditionList
      console.log('Jopa', this.conditionsList)
    }
  }
}
</script>

<style lang="scss" scoped>

.add-pool {
  font-size: 18px;
  color: #AEAEAE;
  font-weight: 700;
}
.conditions-list {
  margin: 10px 0 0 0;

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

.respondents-add-condition {
  padding: 40px;
  flex: 1;
  &__content {
    cursor: pointer;
    border-radius: 10px;
    border: 2px solid #E5ECF0;
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
