<template>
  <div class="input-holder">
    <label>
      {{ label }}
      <input @input="handleInput" :type="inputType" :placeholder="placeholder" v-model="input"/>
    </label>
  </div>
</template>
<script>
export default {
  name: "BaseInput",
  props: {
    label: String,
    inputType: String,
    placeholder: String,
  },

  data() {
    return {
      input: '',
    }
  },
  methods: {
    handleInput() {
      this.$emit('handle-input', {value: this.input, key: this.inputType})
    },
  }
}
</script>
<style lang="scss">

.input-holder {
  width: 335px;
  display: block;
  align-content: center;
  margin: 0 auto;
  text-align: left;
}

input {
  display: block;
  margin: 10px auto;
  border: 1px solid #A3A3A3;
  width: 328px;
  height: 40px;
  border-radius: 5px;
}

button {
  width: 335.2px;
  height: 40px;
  border: 1px solid #1FC69E;
  background-color: #1FC69E;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  margin-top: 10px;
}

</style>