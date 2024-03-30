import React from 'react'
import ContentLoader from 'react-content-loader'

export const PhotoLoading = () => {
  return (
    <div>
      <ContentLoader 
        speed={2}
        width={100}
        height={100}
        viewBox="0 0 100 100"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="30" y="123" rx="0" ry="0" width="327" height="184" /> 
        <rect x="0" y="0" rx="0" ry="0" width="100" height="100" />
      </ContentLoader>
    </div>
  )
}
