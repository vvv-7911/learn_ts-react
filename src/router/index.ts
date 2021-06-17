import React from "react"

import YDiscover from '@/pages/discover'

import YRecommend from '@/pages/discover/c-pages/recommend'

export default [
  {
    path: '/',
    exact: true,
    component: YDiscover,
  },
  {
    path: '/discover',
    component: YDiscover,
    routes: [
      {
        path: '/discover/recommend',
        component: YRecommend
      },
      {
        path: '/discover/ranking'
      }
    ]
  }
]