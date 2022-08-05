// * react 
import React, {memo} from 'react'
import {IInputProps} from './types'

// * styles 
import styles from './Input.module.scss'

const Input: React.FC<IInputProps> = memo(({type, placeholder, name, func, value, error}) => {
    return(
        <input 
            onChange={func}
            className={error ? styles.inputError : styles.input}
            type={type} 
            placeholder={placeholder}
            name={name}
            value={value}
        />
    )
})



export default Input