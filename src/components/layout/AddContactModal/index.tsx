// * styles 
import styles from './Modal.module.scss'

// * icons 
import {AiOutlineClose} from 'react-icons/ai'

// * components 
import Input from '../../ui/Input'
import Button from '../../ui/Button'

const AddContactModal = () => {
    return (
        <div className={styles.modal}>
            <form className={styles.modalContent}>
                <button className={styles.btn}>
                    <AiOutlineClose className={styles.icon}/>
                </button>
                <Input
                    type={'text'}
                    placeholder={'Username'}
                />
                <Input
                    type={'text'}
                    placeholder={'Full Name'}
                />
                <Input
                    type={'email'}
                    placeholder={'Email'}
                />
                <Input
                    type={'text'}
                    placeholder={'Website'}
                />
                <Input
                    type={'text'}
                    placeholder={'Phone'}
                />
                <Button>
                    Create
                </Button>
            </form>
        </div>
    )
}

export default AddContactModal