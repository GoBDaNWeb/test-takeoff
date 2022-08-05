// * hooks 
import {useContactList} from './useContactList'

// * styles 
import styles from './ContactList.module.scss'

// * components
import ContactsCondition from './ContactsCondition'
import SearchedCondition from './SearchedCondition'
import PaginationButtons from './PaginationButtons'

const ContactList = () => {
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
}

export default ContactList