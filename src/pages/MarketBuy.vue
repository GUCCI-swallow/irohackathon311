<template>
  <div class='container'>
    <div class="row">
      <div class="col-md-6">
        <img :src="'static/img/' + item.image" alt="" style='width: 100%;'>
        <h3>{{ item.name }}</h3>
        <table class="table">
          <tbody>
            <tr>
              <th>最低販売金額</th>
              <td>{{ item.lowestPrice }}</td>
            </tr>
            <tr>
              <th>残り時間</th>
              <td>{{ item.time }}</td>
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
              <td>user001</td>
              <td>user002</td>
            </tr>
            <tr>
              <td>user003</td>
              <td>user001</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
        <form class='form-holizontal'>
          <div class="form-group">
            <input type="number" name="" class='form-control' placeholder='入札額' v-model='price'>
          </div>
          <table class="table table-bordered table-center">
            <tbody>
              <tr>
                <th>作家への還元金額</th>
                <td>{{ price * 0.05}} 円　</td>
              </tr>
              <tr>
                <th>出品者への金額</th>
                <td>{{ price * 0.95}}円</td>
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
import store from 'store'

export default {
  name: '',
  data () {
    return {
      item: {},
      price: 0
    }
  },
  created () {
    const item = store.get('items')
    this.item = item[0]
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
