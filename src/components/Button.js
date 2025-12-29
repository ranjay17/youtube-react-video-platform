import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className='px-5 py-2 rounded-lg bg-black text-white m-2'>{name}</button>
    </div>
  )
}

export default Button
