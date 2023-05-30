import React from 'react'

const DetailCard = (props) => {
  return (
    <div>
        <p className='title'>{props.name}</p>
        <p className='data'> {props.data} </p>
    </div>
  )
}

export default DetailCard