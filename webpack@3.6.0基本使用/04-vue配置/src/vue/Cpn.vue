<template>
  <div>
    <h1>标题</h1>
    <p>哈哈哈{{name}}</p>
  </div>
</template>

<script>
  export default {
    name:"Cpn",
    data() {
      return {
        name:"sda"
      }
    }
  }
</script>
<style scoped>
  p{
    color: green;
  }
</style>