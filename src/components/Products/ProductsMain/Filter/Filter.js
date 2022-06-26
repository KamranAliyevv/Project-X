
import React, {useEffect, useRef,useState} from 'react'
import {HiOutlinePlus,HiOutlineMinus} from "react-icons/hi";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {GrClose} from "react-icons/gr";
import { useSelector } from 'react-redux/es/exports';
import { filter } from '../../../../redux/reducer/productsReducer';
import { useDispatch } from 'react-redux/es/exports';
// import {ExpandMoreIcon} from '@mui/icons-material/ExpandMore';

const Filter = ({open,setOpen}) => {
  const dispatch=useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const products=useSelector(state=>state.products);
    let maxPrice=products?.response[0]?.price.raw;
    let minPrice=products?.response[0]?.price.raw;
    if(products.response.length>0){ 
    (Object.values(products.response).forEach(i=>{
      minPrice=i.price.raw < minPrice ? i.price.raw : minPrice;
      maxPrice=i.price.raw > maxPrice ? i.price.raw : maxPrice;
    }))
  }
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
};

const [filterItem,setFilterItem]=useState({
  brend:[],
  minPrice:0,
  maxPrice:1000000,
})
const minPriceRef=useRef();
const maxPriceRef=useRef();

function checkBrend(e){
  if(e.target.checked){
    let copyArray={...filterItem};
    copyArray.brend.push(e.target.value)
    setFilterItem(filterItem);
  }
  else{
    let index=filterItem.brend.indexOf(e.target.value);
    let copyFilter={...filterItem};
    copyFilter.brend.splice(index,1);
    setFilterItem(copyFilter)
  }
}
function allCheck(e){
  e.preventDefault();
  let copyFilter={...filterItem};
  copyFilter.minPrice=minPriceRef.current.value.length > 0 ? minPriceRef.current.value : copyFilter.minPrice;
  copyFilter.maxPrice=maxPriceRef.current.value.length > 0 ? maxPriceRef.current.value : copyFilter.maxPrice;
  setFilterItem(copyFilter);
}

useEffect(()=>{
  dispatch(filter(filterItem))
},[filterItem,dispatch])


  return (
    <div className={ `filter-list ${open ? "active" : ""}`}>
      <div className="mobile-filter-title">
        <span onClick={()=>setOpen(false)}><GrClose/></span>
        <h4>Filterləmələr</h4>
      </div>
        <form onChange={allCheck}>
        <div className="filter-item">
<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={expanded==='panel1' ? <HiOutlineMinus /> : <HiOutlinePlus/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          
          <p>Brend</p>
          {/* <Typography sx={{ color: 'text.secondary', }}>(3)</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <div className={`filter-main`}>
                {["Apple","Xiaomi","Samsung"].map((item,index)=>{
                  return(
                  <div key={index} className="filter-group">
                    <input onClick={checkBrend} value={item} type="checkbox" />
                    <p>{item}</p>
                  </div>
                  )
                })}
            </div>
        </AccordionDetails>
      </Accordion>
      </div>
      <div className="filter-item">
<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
           expandIcon={expanded==='panel2' ? <HiOutlineMinus /> : <HiOutlinePlus/>}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <p>Qiymət aralığı</p>
          {/* <Typography sx={{ color: 'text.secondary'}}>(3)</Typography> */}
        </AccordionSummary>
        <AccordionDetails>
          <div className={`filter-main filter-price${open ? " active" : ""}`}>
                <input ref={minPriceRef} type="text" placeholder={minPrice}/>
                <input ref={maxPriceRef} type="text" placeholder={maxPrice}/>
            </div>
        </AccordionDetails>
      </Accordion>
      </div>
      </form>
        <button className="getFiltered-btn">Filterlənmiş məhsulları göstər</button>
        
    </div>
  )
}

export default Filter