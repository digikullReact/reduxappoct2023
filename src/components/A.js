import React from 'react'
import B from './B'

const A = (props) => {
  return (
    <div>
     <h1>A Component </h1>

     <B data={props.data} />

    </div>
  )
}

export default A