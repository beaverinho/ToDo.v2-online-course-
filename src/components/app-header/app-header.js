import React from 'react'
import './app-header.css'

const AppHeader = ({done, todo}) => {

    

    return (
    <div className='app-header'>
        <h1 className='app-header'>ToDo app</h1>
        <h2>{todo} more to do, {done} done</h2>
    </div>
  )}

  export default AppHeader;