<template>
  <div>
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="collapse navbar-collapse pull-right" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><router-link :to='{name: "RegistItem" }'>コンテンツ登録</router-link></li>
            <li><router-link :to='{name: "MyPageRegistItems" }'>マイページ</router-link></li>
            <li><router-link :to='{name: "Market" }'>マーケット</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
