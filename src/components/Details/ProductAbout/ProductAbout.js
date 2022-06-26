import React, {useState} from 'react';
import DetailsBody from './DetailsBody/DetailsBody';
import DetailsSlider from './DetailsSlider/DetailsSlider';


const ProductAbout = () => {
  
  const [selectImage,setSelectImage]=useState([]);
  return (
    <div className='productAbout'>
        {selectImage.length>0 ? <DetailsSlider selectImage={selectImage[0]}/> : ""}
        <DetailsBody setSelectImage={setSelectImage}/>
    </div>
  )
}

export default ProductAbout