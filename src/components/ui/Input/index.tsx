// * react 
import React from 'react'
import {IInputProps} from './types'

// * styles 
import styles from './Input.module.scss'

const Input: React.FC<IInputProps> = ({type, placeholder}) => {
    return(
        <input 
            className={styles.input}
            type={type} 
            placeholder={placeholder}
        />
    )
}

export default Input