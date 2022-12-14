// * hooks 
import {useAddContactModal} from './useAddContactModal'

// * styles 
import styles from './Modal.module.scss'

// * components 
import ModalForm from './ModalForm'

const AddContactModal = () => {
    const {
        commands: {
            handleOpenModal
        }
    } = useAddContactModal()

    return (
        <div 
            onClick={handleOpenModal}
            className={styles.modal}
        >
            <ModalForm/>
        </div>
    )
}

export default AddContactModal