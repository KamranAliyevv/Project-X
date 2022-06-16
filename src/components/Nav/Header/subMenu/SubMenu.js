import React from 'react'
import {FaArrowLeft} from "react-icons/fa"

const SubMenu = ({getSubCategory,subData,show,setShow}) => {
  return (
    <div className={`subMenu ${show ? "show" : ""}`} onMouseOver={()=>{getSubCategory(subData,true);console.log(1)}}>
        <div className="subMenu-inner">
            <div className="subMenu-overlay"></div>
            {subData?.children ? 
            <>
            <div onClick={()=>setShow(false)} className="subMenu-back"><FaArrowLeft/><span>{subData.name}</span></div>
        <div onMouseOver={()=>{getSubCategory(subData,true);console.log(1)}} onMouseLeave={()=>{getSubCategory([],true)}} className="subMenu-items">
            {subData.children.map(child=>{
                return (
                <div key={child.id} className="submenu-item">
                    <div className="sub-parent">
                {child.name}
            </div>
            <ul className='sub-children'>
            {child.children.map(item=>{
                return(<li key={item.id}>{item.name}</li>)
            })}
            </ul>
        </div>
                )
            })
        }
        </div>
            </>
            : ""
        }
        </div>
    </div>
  )
}

export default SubMenu