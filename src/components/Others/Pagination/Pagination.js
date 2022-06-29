import React from 'react'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationComp = ({products,count,handleChange,page}) => {
  const pageCount=Math.ceil(products.length/count);
  
  return (
    <Stack spacing={2}>
      <Pagination onChange={handleChange} page={page+1} count={+pageCount} />
    </Stack>
  )
}

export default PaginationComp