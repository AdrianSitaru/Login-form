<template>
  <div class="home">
    <form>
      <h2>Login</h2>
      <BaseInput
          :label="'email'"
          :input-type="'email'"
          :placeholder="'email'"
          @handle-input="handle_input"
      />
      <BaseInput
          :label="'password'"
          :input-type="'password'"
          :placeholder="'password'"
          @handle-input="handle_input"
      />
      <button @click="submitForm">Submit</button>
    </form>
  </div>
</template>

<script>
import BaseInput from "@/components/BaseInput.vue";
export default {
  name: 'login-View',
  components: {
    BaseInput,
  },
  data() {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    handle_input({value, key}) {
      this.form[key] = value;
    },
    submitForm() {
      this.$store.dispatch('login', this.form)
      console.log(this.form)
    }
  }
}
</script>
