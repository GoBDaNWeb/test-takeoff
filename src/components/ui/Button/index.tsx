import React from 'react'
import styles from './Button.module.scss'
import {IButtonProps} from './types'
const Button: React.FC<IButtonProps> = ({children}) => {
    return (
        <button className={styles.btn}>
            {children}
        </button>
    )
}

export default Button