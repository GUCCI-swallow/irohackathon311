<template>
  <div class='container'>
    <ul class="nav nav-tabs">
      <li role="presentation"><router-link :to='{name: "MyPageRegistItems"}'>登録コンテンツ一覧</router-link></li>
      <li role="presentation"><router-link :to='{name: "MyPageItems"}'>保有コンテンツ一覧</router-link></li>
      <li role="presentation" class="active"><router-link :to='{name: "MyPageHistory"}'>取引履歴</router-link></li>
    </ul>
    <div class="tab-content">
      <div class="col-md-5">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>履歴</th>
            </tr>
          </thead>
          <tbody>
            <tr  v-for='h in histories'>
              <td>{{ h }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-5 col-md-offset-2">
        <table class="table table-bordered">
          <tbody>
            <tr>
              <th>これまでの販売総額</th>
              <td>{{ sell }}円</td>
            </tr>
            <tr>
              <th>これまでの購入総額</th>
              <td>{{ buy }}円</td>
            </tr>
            <tr>
              <th>これまでの還元総額</th>
              <td>{{ back }}</td>
            </tr>
            <tr>
              <th>総利益</th>
              <td>{{ total }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      histories: ['100円の還元金が発生しました', '1000円のコンテンツを販売しました'],
      sell: 1000,
      buy: 0,
      back: 1100,
      total: 1100
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-content{
  margin-top: 20px;
}
</style>
