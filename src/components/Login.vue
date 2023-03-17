<template>
    <form>
      <h2>Login</h2>
      <label>
        email:
        <input type="email" v-model="email" placeholder="email">
      </label>
      <label>
        password:
        <input type="password" v-model="password" placeholder="password">
        <button>Submit</button>
      </label>
    </form>
</template>

<script>
export default {
  name: 'login-form',
  data() {
    return {
      email: '',
      password: '',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

input {
  display: block;
  margin: 5px auto;
  height: 40px;
  width: 328px;
  border-radius: 5px;
  border: 2px solid #A3A3A3;
}

label {
  display: block;
  padding: 10px;
  text-align: left;
  width: 335px;
  margin: 0 auto;
  box-sizing: border-box;

}

button {
  width: 335px;
  height: 48px;
  margin-top: 24px;
  background-color: #1FC69E;
  color: white;
  font-size: 22px;
  font-weight: bold;
  border: #1FC69E 0;
  border-radius: 5px;
}

</style>
