import React, { useState } from 'react'

function Modal({open}) {
    if (!open) return null
   
  return (
    <div>
       <button onClick={onClose}> Close </button>
    </div>
  )
}

export default Modal