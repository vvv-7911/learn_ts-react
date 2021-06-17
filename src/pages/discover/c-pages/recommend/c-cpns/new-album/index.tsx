import React, { memo, useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd'
import YAlbumCover from '@/components/album-cover'
import YThemeHeaderRCM from '@/components/theme-header-rcm'
import { AlbumWrapper } from './style'

import { State, NewAlbum } from '@/types'

export default memo(function YNewAlbum() {

  // redux hooks
  const { newAlbums } = useSelector((state: any) => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual) 
  const dispatch = useDispatch();

  // other hooks
  const pageRef = useRef(null)
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])
  
  return (
    <AlbumWrapper>
      <YThemeHeaderRCM title='新碟上架' />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e => pageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map((iten: NewAlbum) => {
                        return <YAlbumCover key={iten.id}
                                              info={iten}
                                              size={100}
                                              width={118}
                                              bgp="-570px" />
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => pageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
