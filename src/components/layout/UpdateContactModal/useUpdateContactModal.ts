// * react 
import React, {useState, useCallback} from 'react'

// * redux 
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenUpdateModal} from '../../../redux/contacts/contactsSlice';
import { useUpdateContactMutation} from '../../../redux/contacts/contactsApi';
import { selectContact } from '../../../redux/contacts/selectors';

export function useUpdateContactModal() {
    const selectedContact = useSelector(selectContact)

    const [username, setUsername] = useState<string>(selectedContact ? selectedContact.username : '')
    const [fullname, setFullName] = useState<string>(selectedContact ? selectedContact.fullname : '')
    const [email, setEmail] = useState<string>(selectedContact ? selectedContact.email : '')
    const [website, setWebsite] = useState<string>(selectedContact ? selectedContact.website : '')
    const [phone, setPhone] = useState<string>(selectedContact ? selectedContact.phone : '')

    const [updateContact] = useUpdateContactMutation()

    const dispatch = useDispatch()


    const handleOpenModal = () => {
        dispatch(handleOpenUpdateModal())
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = e.target
        const {name} = e.target
        if (name === 'username') {
            setUsername(value)
        }
        if (name === 'fullname') {
            setFullName(value)
        }
        if (name === 'email') {
            setEmail(value)
        }
        if (name === 'website') {
            setWebsite(value)
        }
        if (name === 'phone') {
            setPhone(value)
        }
    }

    const handleUpdateContact = () => {
        if (selectedContact) {
            const contact = {
                id: selectedContact.id,
                username,
                fullname,
                email,
                website,
                phone
            }
            updateContact(contact)
            handleOpenModal()
        }
    }

    return {
        models: {
            username,
            fullname,
            email,
            website,
            phone
        },
        commands: {
            handleOpenModal,
            handleUpdateContact,
            onChange
        }
    }
}