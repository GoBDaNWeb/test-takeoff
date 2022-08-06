// react 
import {memo} from 'react'

// * hooks 
import {useContactList} from './useContactList'

// * components
import ContactItem from '../ContactItem'

const ContactsCondition = memo(() => {
    const {
        models: {
            contacts,
            isLoading,
        }
    } = useContactList()

    return (
        <>
            {
                isLoading
                ? (<div>Loading</div>)
                : contacts?.map(item => (
                    <ContactItem 
                        key={item.id} 
                        contact={item}
                    />
                ))
            }
        </>
    )
})

export default ContactsCondition