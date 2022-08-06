// react 
import {memo} from 'react'

// * hooks 
import {useContactList} from './useContactList'

// * components
import ContactItem from '../ContactItem'

const SearchedCondition = memo(() => {
    const {
        models: {
            loadingSeacredContacts,
            searhedContacts,
        }
    } = useContactList()

    return (
        <>
            {
                loadingSeacredContacts
                ? (<div>Loading</div>)
                : <>
                    {
                        searhedContacts && searhedContacts.length > 0
                        ? searhedContacts.map(item => (
                            <ContactItem 
                                key={item.id} 
                                contact={item}
                            />
                        ))
                        : <div>contacts not found</div>
                    }
                </>
                
            }
        </>
    )
})

export default SearchedCondition