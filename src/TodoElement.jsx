import React, {  useState } from 'react'

export const TodoElement = ({id,done,description,owner}) => {


  return (    
    <> 
      <div>
        <input type="checkbox" name={owner} id={id} defaultChecked={done} />      
        <p className='to-do-P'>{description}</p>
        <p><i>{owner}</i></p>
        <hr />
      </div>
    </>
  )
}
