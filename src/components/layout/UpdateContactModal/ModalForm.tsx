// * react 
import {memo} from 'react'

// * hooks 
import {useUpdateContactModal} from './useUpdateContactModal'

// * styles 
import styles from './Modal.module.scss'

// * components 
import Input from '../../ui/Input'
import Button from '../../ui/Button'
import PhoneInput from '../../ui/Input/PhoneInput'

const ModalForm = memo(() => {
    const {
        models: {
            username,
            fullname,
            email,
            website,
            phone
        },
        commands: {
            handleUpdateContact,
            onChange
        }
    } = useUpdateContactModal()

    return (
        <div 
            onClick={(e) => e.stopPropagation()}
            className={styles.modalContent}
        >
            <Input
                func={onChange}
                type={'text'}
                placeholder={'Username'}
                name={'username'}
                value={username}
            />
            <Input
                func={onChange}
                type={'text'}
                placeholder={'Full Name'}
                name={'fullname'}
                value={fullname}
            />
            <Input
                func={onChange}
                type={'email'}
                placeholder={'Email'}
                name={'email'}
                value={email}
            />
            <Input
                func={onChange}
                type={'text'}
                placeholder={'Website'}
                name={'website'}
                value={website}
            />
            <PhoneInput
                func={onChange}
                placeholder={'Phone'}
                name={'phone'}
                value={phone}
            />
            <Button
                func={handleUpdateContact}
                disable={
                    !username ||
                    !fullname ||
                    !email ||
                    !website || 
                    !phone
                }
                color='default'
            >
                Update
            </Button>
        </div>
    )
})

export default ModalForm