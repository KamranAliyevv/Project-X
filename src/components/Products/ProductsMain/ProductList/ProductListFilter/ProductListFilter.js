import React from 'react'
import {FaAngleDown} from "react-icons/fa";
import {GrFilter} from "react-icons/gr";
import {TbArrowsUpDown} from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { sort } from '../../../../../redux/reducer/productsReducer';

const ProductListFilter = ({setOpen}) => {
  const products=useSelector(state=>state.products);
  const dispatch=useDispatch();
  function dataSort(e){
    let selected=e.target.value;
    dispatch(sort(selected))
  }
  return (
    <div className='productList-filter'>
        <p>{products.response.length} məhsul tapıldı</p>
    <div className="products-rules">
      <TbArrowsUpDown className='dropdown'/>
      <div className="rules-dropdown">
    <select onChange={dataSort}>
    <option value="yeni">Ən Yenilər</option>
    <option value="baha">Əvvəlcə baha </option>
    <option value="ucuz">Əvvəlcə ucuz</option>
    </select>
    <span><FaAngleDown/></span>
    </div>
    </div>
    <div className="products-rules rules-filter">
      <GrFilter/>
      <div onClick={setOpen(true)}>Filterləmələr</div>
    </div>
    </div>
  )
}

export default ProductListFilter;