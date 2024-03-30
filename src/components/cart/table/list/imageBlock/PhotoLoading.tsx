import React from 'react'
import ContentLoader from 'react-content-loader'

export const PhotoLoading = () => {
  return (
    <div>
      <ContentLoader 
        speed={2}
        width={80}
        height={80}
        viewBox="0 0 80 80"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="7" y="-1" rx="0" ry="0" width="80" height="80" />
      </ContentLoader>
    </div>
  )
}
