// * react 
import {IContact} from './types'

// * redux 
import { useDispatch } from 'react-redux';
import { handleOpenUpdateModal, handleOpenDeleteModal, setSelectContact } from '../../../redux/contacts/contactsSlice';

export function useContactItem() {
    const dispatch = useDispatch()

    const openUpdateModal = (contact: IContact) => {
        dispatch(setSelectContact(contact))
        dispatch(handleOpenUpdateModal())
    }

    const openDeleteModal = (contact: IContact) => {
        dispatch(setSelectContact(contact))
        dispatch(handleOpenDeleteModal())
    }

    return {
        commands: {
            openUpdateModal,
            openDeleteModal
        }
    }
}