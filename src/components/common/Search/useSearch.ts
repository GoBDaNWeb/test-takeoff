// * react 
import React from 'react'

// * redux 
import { useSelector, useDispatch } from 'react-redux';
import { setSearchValue} from '../../../redux/contacts/contactsSlice';
import { selectSearchValue} from '../../../redux/contacts/selectors';


export function useSearch() {
    const dispatch = useDispatch()
    const searchValue = useSelector(selectSearchValue)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = e.target
        dispatch(setSearchValue(value))
    }  
    
    return {
        models: {
            searchValue,
        },
        commands: {
            onChange
        }
    }
}