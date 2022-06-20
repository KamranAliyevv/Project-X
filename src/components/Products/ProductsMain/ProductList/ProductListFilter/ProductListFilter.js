import React from 'react'
import {FaAngleDown} from "react-icons/fa";
const ProductListFilter = ({count}) => {
  return (
    <div className='productList-filter'>
        <p>{count} məhsul tapıldı</p>
    <div className="products-dropdown">
    <select>
    <option value={"Ən Yenilər"}>Ən Yenilər</option>
    <option value={"Əvvəlcə baha"}>Əvvəlcə baha </option>
    <option value={"Əvvəlcə ucuz"}>Əvvəlcə ucuz</option>
    </select>
    <span><FaAngleDown/></span>
    </div>
    </div>
  )
}

export default ProductListFilter;