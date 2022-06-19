
import React, { useState,useRef } from 'react'
import {HiOutlinePlus,HiOutlineMinus} from "react-icons/hi"

const Filter = () => {
    const [open,setOpen]=useState(false);
    const filterItem=useRef();
    console.log(filterItem?.current?.offsetHeight)
  return (
    <div className='filter-list'>
        <div className="filter-item">
            <div className="filter-title">
                <h3>Brend <span>(5)</span></h3>
                <span><HiOutlinePlus/></span>
            </div>
            <div className="filter-main">
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Apple</p>
                </div>
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Samsung</p>
                </div>
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Huawei</p>
                </div>
            </div>
        </div>
        <div className="filter-item">
            <div className="filter-title">
                <h3>Type <span>(3)</span></h3>
                <span onClick={()=>setOpen(!open)}>{open ? <HiOutlineMinus/> : <HiOutlinePlus/>}</span>
            </div>
            <div ref={filterItem} className={`filter-main${open ? " active" : ""}`}>
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Apple</p>
                </div>
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Samsung</p>
                </div>
                <div className="filter-group">
                    <input type="checkbox" />
                    <p>Huawei</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter