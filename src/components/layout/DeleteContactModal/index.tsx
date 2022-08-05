// * hooks 
import {useDeleteContactModal} from './useDeleteContactModal'

// * styles 
import styles from './Modal.module.scss'

// * components 
import Button from '../../ui/Button'

const DeleteContactModal = () => {
    const {
        models: {
            contact
        },
        commands: {
            handleOpenModal,
            handleDeleteContact
        }
    } = useDeleteContactModal()

    return (
        <div 
            onClick={handleOpenModal}
            className={styles.modal}
        >
            <div 
                onClick={(e) => e.stopPropagation()}
                className={styles.modalContent}
            >
                <h2>
                    You realy want delete this contact?
                </h2>
                <div>
                    <h4>
                        {contact?.fullname}
                    </h4>
                    <h4>
                        {contact?.email}
                    </h4>
                </div>
                <Button
                    func={handleDeleteContact}
                    color='delete'
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default DeleteContactModal