import React from 'react'
import ButtonComponent from '../atom/ButtonComponent'

const DataComponent = ({setState}
    
    
) => {

    const handleSubmit=()=>{
        console.log("Hello World")
        setState(false)
    }
  return (
    <div>
       
        <ButtonComponent lable='Create' onSubmit={()=>(handleSubmit())}/>
    </div>
  )
}

export default DataComponent