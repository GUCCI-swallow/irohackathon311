<template>
  <div class='container'>
    <div class="row">
      <div class="col-md-6">
        <img src="http://placehold.it/350x200" alt="">
        <h3>コンテンツ名</h3>
        <table class="table">
          <tbody>
            <tr>
              <th>最低販売金額</th>
              <td>1000円</td>
            </tr>
            <tr>
              <th>残り時間</th>
              <td>1日</td>
            </tr>
          </tbody>
        </table>
        <h4>取引履歴</h4>
        <table class="table">
          <thead>
            <th>From</th>
            <th>To</th>
          </thead>
          <tbody>
            <tr>
              <td>Aさん</td>
              <td>Bさん</td>
            </tr>
            <tr>
              <td>Bさん</td>
              <td>Dさん</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <form class='form-holizontal'>
          <div class="form-group">
            <input type="number" name="" class='form-control' placeholder='入札額'>
          </div>
          <table class="table table-bordered table-center">
            <tbody>
              <tr>
                <th>作家への還元金額</th>
                <td>50円</td>
              </tr>
              <tr>
                <th>出品者への金額</th>
                <td>950円</td>
              </tr>
            </tbody>
          </table>
          <table class="table">
            <tbody>
              <tr>
                <th>現在の還元率</th>
                <td>5%</td>
              </tr>
              <tr>
                <th>現在の入札数</th>
                <td>0件</td>
              </tr>
            </tbody>
          </table>
          <button class='btn btn-default' @click='buy($event)'>入札する</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  methods: {
    buy: function (e) {
      e.preventDefault()
      this.$router.push('/market/buyComplete')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.table-center{
  margin: 10% 0;
}
</style>
