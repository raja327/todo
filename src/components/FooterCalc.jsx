import React from 'react'
import './design/FooterCalc.css'
const FooterCalc = ({todos}) => {
    const compelteTodos=todos.filter(todo=>todo.isCompleted)
    const ncompeleteTodos=compelteTodos.length
    console.log(ncompeleteTodos)
  return (
    <div className='footer'>
        <div className="title">
        <p>showing<b>{ncompeleteTodos}</b>  compeleted Todos out of <b>{todos.length}</b></p>
        <p>copyright@Rajaram</p>
        </div>
      
    </div>
  )
}

export default FooterCalc
