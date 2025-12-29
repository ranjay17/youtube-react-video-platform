import React from 'react'
import Button from './Button.js'
const list = ["All", "Music", "Cricket", "Football", "News", "Live", "Gaming", "Cooking"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {
        list.map((name,index)=>{
          return <Button name={name} key={index}/>
        })
      }
    </div>
  )
}

export default ButtonList
