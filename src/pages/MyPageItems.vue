<template>
  <div class='container'>
    <ul class="nav nav-tabs">
      <li role="presentation"><router-link :to='{name: "MyPageRegistItems"}'>登録コンテンツ一覧</router-link></li>
      <li role="presentation" class="active"><router-link :to='{name: "MyPageItems"}'>保有コンテンツ一覧</router-link></li>
      <li role="presentation"><router-link :to='{name: "MyPageHistory"}'>取引履歴</router-link></li>
    </ul>
    <div class="tab-content">
      <div class='row item' v-for='item in items'>
        <img class='responsive-img col-md-4' src="http://placehold.it/350x200" alt="">
        <div class="col-md-4 content-name">
          <table class='table'>
            <tr>
              <td>コンテンツ名:</td>
              <td>{{ item.name }}</td>
            </tr>
          </table>
        </div>
        <form class='form-holizontal col-md-4 sell-form'>
          <div class="form-group">
            <input type="number" name="" class='form-control' placeholder='最低販売金額'>
          </div>
          <div class="form-group">
            <input type="date" name="" class='form-control' placeholder='期限'>
          </div>
          <button class='btn btn-default' @click='sell($event)'>販売する</button>
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
      items: [
        {
          name: '美術品0',
          image: ''
        },
        {
          name: '美術品1',
          image: ''
        },
        {
          name: '美術品2',
          image: ''
        }
      ]
    }
  },
  methods: {
    sell: function (e) {
      e.preventDefault()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-content{
  margin-top: 20px;
}
.sell-form{
  margin-top: 20px;
}
.item{
  margin: 15px 0;
}
.content-name{
  padding: 20px;
}
</style>
