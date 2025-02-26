'use client'
import React from 'react'
import RollingGallery from './rolling-gallery'

type Props = {}

function TeamCarousel({}: Props) {
  return (
    <div>
      <RollingGallery autoplay={true} pauseOnHover={true} />
    </div>
  )
}

export default TeamCarousel
