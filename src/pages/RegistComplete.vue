<template>
  <div class='container'>
    <h2>登録が完了しました</h2>
    <router-link :to='{name: "MyPageRegistItems"}' class='btn btn-default'>マイページへ</router-link>
  </div>
</template>

<script>
export default {
  name: 'registComplete',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2{
  margin: 50px 0;
}
</style>
