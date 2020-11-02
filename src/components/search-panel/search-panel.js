import React from 'react'
import './search-panel.css'

const SearchPanel = ({editSearchTerm}) => {
    return (
        <div className='search-container'>
            <input className='search-input' placeholder=' Search' onChange={editSearchTerm}/>
            {/* <button className='btn btn-outline-primary'>All</button>
            <button className='btn btn-outline-primary'>Active</button>
            <button className='btn btn-outline-primary'>Done</button> */}
        </div>
    )
  }

  export default SearchPanel;