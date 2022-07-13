import React from "react"
import ContentLoader from "react-content-loader"

const ProductCardSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={220}
    height={320}
    boxShadow="rgb(0 0 0 / 24%) 0px 3px 8px"
    viewBox="0 0 220 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="9" y="-3" rx="0" ry="0" width="150" height="179" />  
    <rect x="0" y="185" rx="10" ry="10" width="166" height="16" /> 
    <rect x="0" y="209" rx="10" ry="10" width="140" height="15" />
  </ContentLoader>
)

export default ProductCardSkeleton