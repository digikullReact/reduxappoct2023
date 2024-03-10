import React from 'react'
import C from './C'

const B = (props) => {
  return (
    <div>

        <h1>B Component  </h1>

        <C data={props.data} />
    </div>
  )
}

export default B