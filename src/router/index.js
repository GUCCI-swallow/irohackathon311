import Vue from 'vue'
import Router from 'vue-router'

import Top from '@/pages/top'
import RegistItem from '@/pages/registItem'
import RegistComplete from '@/pages/registComplete'

import Market from '@/pages/market'
import MarketBuy from '@/pages/marketBuy'
import MarketBuyComplete from '@/pages/MarketBuyComplete'

import MyPageSell from '@/pages/MyPageSell'
import MyPageItems from '@/pages/MyPageItems'
import MyPageRegistItems from '@/pages/MyPageRegistItems'
import MyPageHistory from '@/pages/MyPageHistory'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Top
    },
    {
      path: '/regist/item',
      name: 'RegistItem',
      component: RegistItem
    },
    {
      path: '/regist/complete',
      name: 'RegistComplete',
      component: RegistComplete
    },
    {
      path: '/market',
      name: 'Market',
      component: Market
    },
    {
      path: '/market/buy',
      name: 'MarketBuy',
      component: MarketBuy
    },
    {
      path: '/market/buyComplete',
      name: 'MarketBuyComplete',
      component: MarketBuyComplete
    },
    {
      path: '/mypage/registItems',
      name: 'MyPageRegistItems',
      component: MyPageRegistItems
    },
    {
      path: '/mypage/history',
      name: 'MyPageHistory',
      component: MyPageHistory
    },
    {
      path: '/mypage/items',
      name: 'MyPageItems',
      component: MyPageItems
    },
    {
      path: '/mypage/sell',
      name: 'MyPageSell',
      component: MyPageSell
    }
  ]
})
