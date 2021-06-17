import React, { memo, useEffect } from 'react'
import { useSelector, useDispatch, shallowEqual} from 'react-redux'

import {HotRecommendWrapper} from './style'
import { getHotRecommendAction } from '../../store/actionCreators'

import YThemeHeaderRCM from '@/components/theme-header-rcm'
import YSongsCover from '@/components/songs-cover'

import { State, HotRecommends } from '@/types'

export default memo(function YHotRecommend() {

  // redux hooks
  const { hotRecommends } = useSelector((state: any) => ({
    hotRecommends: state.getIn(["recommend", "hotRecommends"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getHotRecommendAction(8))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <YThemeHeaderRCM title="热门推荐" keywords={["华语", "民谣", "流行", "摇滚", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map((item: HotRecommends) => {
            return <YSongsCover key={item.id} info={item}/>
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
