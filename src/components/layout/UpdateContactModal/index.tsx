// * react
import {memo} from 'react'

// * hooks 
import {useUpdateContactModal} from './useUpdateContactModal'

// * styles 
import styles from './Modal.module.scss'

// * components 
import ModalForm from './ModalForm'


const UpdateContactModal = memo(() => {
    const {
        commands: {
            handleOpenModal
        }
    } = useUpdateContactModal()

    return (
        <div 
            onClick={handleOpenModal}
            className={styles.modal}
        >
            <ModalForm/>
        </div>
    )
})

export default UpdateContactModal