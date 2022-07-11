import React from 'react'
import ButtonComponent from '../atom/ButtonComponent';

const DataComponet2 = ({setState}) => {
    const handleSubmit=()=>{
        console.log("hello");
        setState(true)
    }
  return (
    <div>
     <ButtonComponent
     lable='Submit'
     onSubmit={()=>{handleSubmit()}}/>
    </div>
  )
}

export default DataComponet2