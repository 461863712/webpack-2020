<template>
  <div>
    <h1>{{msg}}</h1>
    <p>ssss</p>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn.vue'
  export default {
    name:"App",
    data() {
      return {
        msg:"Hello World"
      }
    },
    components: {
      Cpn
    }
  }
</script>
<style scoped>
  p{
    color: red;
  }
</style>