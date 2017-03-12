<template>
  <div class='container'>
    <div class="image-display">
    </div>
    <form class='form-holizontal col-md-offset-3 col-md-6'>
      <div class="form-group">
        <input type="text" name="" class='form-control' placeholder='ログインID' v-model='id'>
      </div>
      <button class='btn btn-default' @click='login($event)'>ログイン</button>
    </form>
  </div>
</template>

<script>
import store from 'store'

export default {
  name: '',
  data () {
    return {
      id: ''
    }
  },
  methods: {
    login: function (e) {
      e.preventDefault()

      store.set('id', this.id)
      const items = [
        {
          name: '美術品0',
          image: 'image1.JPG',
          owner: 'user001',
          creator: 'user001',
          lowestPrice: 10000,
          time: '1日',
          isMine: true
        },
        {
          name: '美術品1',
          image: 'image2.JPG',
          owner: 'user001',
          creator: 'user001',
          lowestPrice: 10000,
          time: '1日',
          isMine: true
        },
        {
          name: '美術品2',
          image: 'image3.JPG',
          owner: 'user001',
          creator: 'user001',
          lowestPrice: 10000,
          time: '1日',
          isMine: true
        }
      ]

      store.set('items', items)
      this.$router.push('/regist/item')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
