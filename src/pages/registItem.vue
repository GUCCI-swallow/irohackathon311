<template>
  <div class='container'>
    <div class="image-display">
    </div>
    <form class='form-holizontal col-md-offset-3 col-md-6'>
      <div class="form-group">
        <input type="text" name="" class='form-control' placeholder='コンテンツ名'>
      </div>
      <button class='btn btn-default' @click='regist($event)'>登録</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'registItem',
  data () {
    return {
    }
  },
  methods: {
    regist: function (e) {
      e.preventDefault()
      this.$router.push('/regist/complete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.image-display{
  width: 50%;
  height: 400px;
  margin: 20px auto;
  border: 1px solid #000000;
}
</style>
