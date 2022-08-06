// * react
import React, {memo} from "react"
import InputMask from "react-input-mask";
import {IInputProps} from './types'

// * styles 
import styles from './Input.module.scss'


const PhoneInput: React.FC<IInputProps> = memo(({placeholder, name, func, value}) => {
  return <InputMask className={styles.input} mask="+4\9 99 999 99" onChange={func} value={value} placeholder={placeholder} name={name}/>;
})

export default PhoneInput