import React from 'react'

const SearchBar = ({searchChange}) => {
const handleInputChange=(e)=>{
  const inputValue=e.target.value
  // inputValue.trim();
  searchChange(inputValue)
}
  return (
    <input 
    type="text" 
    placeholder='search todos'
    onChange={handleInputChange} />
  )
}

export default SearchBar
