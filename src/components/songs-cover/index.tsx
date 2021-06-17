import React, { memo } from 'react'

import { SongsCoverWrapper } from './style'
import { HotRecommends } from '@/types'

import { getCount, getSizeImage } from '@/utils/format-utils'


// interface HotRecommend {
//   picUrl: string,
//   name: string,
//   playCount: number,
//   copywriter: string,
//   id: number
// }

export default memo(function YSongsCover(props: {info: HotRecommends}) {
  const { info } = props

  return (
    <SongsCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl, 140)} alt=""/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source text-nowrap" title={info.copywriter}>
        by {info.copywriter}
      </div>
    </SongsCoverWrapper>
  )
})
