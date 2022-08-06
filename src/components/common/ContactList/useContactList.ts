// * react 
import {useState, useEffect} from 'react'

// * hooks 
import {useDebounce} from '../../../hooks/debounce'

// * redux 
import {useSelector, useDispatch} from 'react-redux'
import {selectPage, selectSearchValue} from '../../../redux/contacts/selectors'
import {incPage, decPage} from '../../../redux/contacts/contactsSlice'
import {useGetAllContactsQuery, useLazyGetSearchContactsQuery, useGetContactsQuery} from '../../../redux/contacts/contactsApi'

export function useContactList() {
    const [isDisablePrev, setIsDisablePrev] = useState<boolean>(true)
    const [isDisableNext, setIsDisableNext] = useState<boolean>(false)
    const [totalContactsPages, setTotalContactsPages] = useState<number | undefined>(0)

    const dispatch = useDispatch()

    const page = useSelector(selectPage)
    const searchValue = useSelector(selectSearchValue)

    const debounced = useDebounce(searchValue)
    
    const { data: contacts, isLoading } = useGetContactsQuery(page)
    const { data: allContact, refetch: refetchAllcontacts } = useGetAllContactsQuery()
    const [fetchContacts, { isLoading: loadingSeacredContacts, data: searhedContacts }] = useLazyGetSearchContactsQuery()


    const handleNextPage = () => {
        dispatch(incPage())
    }

    const handlePrevPage = () => {
        dispatch(decPage())
    }
    

    useEffect(() => {
        setTotalContactsPages(allContact && Math.ceil(allContact.length / 4))
        refetchAllcontacts()
    }, [contacts, allContact])


    useEffect(() => {
        if (totalContactsPages === page) {
            setIsDisableNext(true)
        } else if (totalContactsPages !== page) {
            setIsDisableNext(false)
        }

        if (page !== 1) {
            setIsDisablePrev(false)
        } else if (page === 1) {
            setIsDisablePrev(true)
        }
    }, [page, allContact, totalContactsPages])

    useEffect(() => {
        if (searchValue) {
            fetchContacts(searchValue)
        }
    }, [debounced])

    return {
        models: {
            page,
            contacts,
            isLoading,
            isDisablePrev,
            isDisableNext,
            loadingSeacredContacts,
            searhedContacts,
            searchValue
        },
        commands: {
            handleNextPage,
            handlePrevPage
        }
    }
}