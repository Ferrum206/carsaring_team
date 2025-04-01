import { useState } from 'react'
import styles from './style.module.css'
import { acord } from './accordionData'

export const Accordion = () => {
    const [isOpen, setIsOpen]= useState(false)
  return (
   <>
<div>
    <ul>
        {acord.map((index,id)=>{
            return(
                <li>
                    
                </li>
            )


})}
    </ul>
</div>
   </>
  )
}
