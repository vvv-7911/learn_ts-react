import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../../store/actionCreators'

import YTopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style'
import YXThemeHeaderRCM from '@/components/theme-header-rcm'

import { State } from '@/types'

export default memo(function YRecommendRanking() {

  const { newRanking, upRanking, originRanking } = useSelector((state: any)=> ({
    newRanking: state.getIn(["recommend", "newRanking"]),
    upRanking: state.getIn(["recommend", "upRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual)
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])

  return (
    <RankingWrapper>
      <YXThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <YTopRanking info={newRanking}/>
        <YTopRanking info={upRanking}/>
        <YTopRanking info={originRanking}/>
      </div>
    </RankingWrapper>
  )
})
