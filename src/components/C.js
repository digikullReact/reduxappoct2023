import React from 'react'
import D from './D'

const C = (props) => {
  return (
    <div>
        <h1>C component   </h1>

<D data={props.data} />

    </div>
  )
}

export default C