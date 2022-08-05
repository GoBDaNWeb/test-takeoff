// * redux 
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenDeleteModal} from '../../../redux/contacts/contactsSlice';
import { useDeleteContactMutation} from '../../../redux/contacts/contactsApi';
import { selectContact } from '../../../redux/contacts/selectors';

export function useDeleteContactModal() {
    const [deleteContact] = useDeleteContactMutation()
    const dispatch = useDispatch()

    const contact = useSelector(selectContact)

    const handleOpenModal = () => {
        dispatch(handleOpenDeleteModal())
    }

    const handleDeleteContact = () => {
        if (contact) {
            deleteContact(contact.id)
            handleOpenModal()
        }
    }

    return {
        models: {
            contact
        },
        commands: {
            handleOpenModal,
            handleDeleteContact
        }
    }
}