// * react 
import {useEffect} from 'react'

// * redux 
import { useDispatch, useSelector } from 'react-redux';
import { handleOpenCreateModal} from '../../../redux/contacts/contactsSlice';
import {selectUser} from '../../../redux/user/selectors'

export function useMain() {
    const dispatch = useDispatch()

    const user = useSelector(selectUser)

    const handleOpenModal = () => {
        dispatch(handleOpenCreateModal())
    }


    return {
        models: {
            user
        },
        commands: {
            handleOpenModal
        }
    }
}