// react 
import {memo} from 'react'

// * hooks 
import {useContactList} from './useContactList'

// * styles 
import styles from './ContactList.module.scss'

// * components
import ContactsCondition from './ContactsCondition'
import SearchedCondition from './SearchedCondition'
import PaginationButtons from './PaginationButtons'

const ContactList = memo(() => {
    const {
        models: {
            searchValue
        }
    } = useContactList()

    return (
        <>
            <div className={styles.contactList}>
                {
                    !searchValue
                    ? <ContactsCondition/>
                    : <SearchedCondition/>
                }
            </div>
            <PaginationButtons/>
        </>
    )
})

export default ContactList