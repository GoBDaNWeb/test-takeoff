// * react
import React from 'react'
import {IButtonProps} from './types'
// * styles
import styles from './Button.module.scss'

const Button: React.FC<IButtonProps> = ({children, func, color, disable}) => {
    return (
        <button 
            onClick={func}
            className={color === 'default' ? styles.btn : styles.btn_delete}
            disabled={disable}
        >
            {children}
        </button>
    )
}

export default Button