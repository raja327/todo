import React from 'react'
const FilterOptions = ({option,onChangeOpt}) => {
    
  return (
    <select 
    className='dropdown'
    onChange={(e)=>onChangeOpt(e.target.value)}
    value={option}>
        <option className='dropdown-list' value="all">All</option>
        <option className='dropdown-list' value="complete">Complete</option>
        <option className='dropdown-list' value="incomplete">Incomplete</option>
    </select>
  )
}
export default FilterOptions
