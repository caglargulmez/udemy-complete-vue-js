<template>
  <p>Hey!</p>
  <hr>
  <greeting :age="age"></greeting>
  <!-- v-bind="props-variable" && v-on="emit-comes-from-User-component"  -->
  <user :age="age" @age-change="updateAge" :ageChangeFn="updateAgeCB"></user>
  <!-- Bootstrap CSS -->
    
</template>

<script>
import Greeting from './components/Greeting.vue'
import User from './components/User.vue'

export default {
  name: "App",
  components: {
    Greeting,
    User
  },
  data() {
    return {
      age: 20,
    }
  },
  methods: {
    updateAge(num) {
      this.age += num;
    },
    updateAgeCB(num) {
      this.age += num;
    }
  }
}
</script>

<style>

</style>