import React from 'react'
import styles from "./Buttons.module.css";
const ButtonContainer = (props) => {
  const button = ['C', '1', '2', '+', '3', '4', '-','5', '6','*', '7', '8', '/','=', '9',  '0', '.']
  return (
    <div className={styles.buttonContainer}>
      {
        button.map((item,index)=>(
          <button key={index}className={styles.button}
          onClick={()=> props.onButtonClick(item)}
          >{item}</button>
        ))
      }
      </div>
  )
}

export default ButtonContainer