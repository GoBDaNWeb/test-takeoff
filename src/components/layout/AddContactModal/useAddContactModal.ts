// * react 
import React, {useState} from 'react'

// * redux 
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenCreateModal} from '../../../redux/contacts/contactsSlice';
import { selectPage} from '../../../redux/contacts/selectors';
import { useLazyGetContactsQuery, useAddContactMutation} from '../../../redux/contacts/contactsApi';

export function useAddContactModal() {
    const [username, setUsername] = useState<string>('')
    const [fullname, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [website, setWebsite] = useState<string>('')
    const [phone, setPhone] = useState<string>('')

    const page = useSelector(selectPage)

    const [addContact] = useAddContactMutation()
    const [fetchContacts] = useLazyGetContactsQuery()
    const dispatch = useDispatch()

    const handleOpenModal = () => {
        dispatch(handleOpenCreateModal())
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

    const createContact = () => {
        const contact = {
            username,
            fullname,
            email,
            website,
            phone
        }
        addContact(contact)
        fetchContacts(page)
        handleOpenModal()
    }

    return {
        models: {
            username,
            fullname,
            email,
            website,
            phone,
        },
        commands: {
            handleOpenModal,
            createContact,
            onChange
        }
    }
}