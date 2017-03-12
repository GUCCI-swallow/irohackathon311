<template>
  <div class='container'>
    <div class="row">
      <div class="col-sm-6 col-md-4" v-for='item in items'>
          <div class="thumbnail">
            <router-link :to='{name: "MarketBuy"}'>
              <img src="http://placehold.it/350x200" alt="">
            </router-link>
            <div class="caption">
              <h3>{{ item.name }}</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th>最低販売価格</th>
                    <td>{{ item.lowestPrice }}円</td>
                  </tr>
                  <tr>
                    <th>残り時間</th>
                    <td>{{ item.time }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      items: [
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        },
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        },
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        },
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        },
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        },
        {
          image: '',
          name: '美術品01',
          lowestPrice: '1000',
          time: '1日'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
