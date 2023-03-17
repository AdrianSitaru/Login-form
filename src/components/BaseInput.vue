<template>
  <div>
    <label>{{ label }}
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
<style>
</style>