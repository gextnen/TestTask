<template>
  <div class="header">
    <div class="header__input">
      <input type="text" placeholder="Поиск по системе" class="input-search">
    </div>
    <div class="header__profile">
      <img src="assets/avat.png" alt="Avatar" class="profile-avatar">
      <div class="header__profile__info">
        <span class="profile-name"> Alexander C.</span>
        <span class="profile-role"> Администратор</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
}

.header {
  display: flex;
  justify-content: space-between;
  &__input {
    max-width: 600px;
    display: flex;
    flex: 1;
  }
  &__profile {
    display: flex;

    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
}
.profile-avatar{
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.profile-name{
  font-weight: bold;
  font-size: 14px;
}
.profile-role {
  font-size: 12px;
  color: #8C8C8C;
}
.input-search{
  padding: 15px;
  border-radius: 5px;
  border: 2px solid #E3E3E3;
  flex: 1;
}
</style>
