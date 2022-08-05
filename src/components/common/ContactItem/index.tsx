// * react 
import {IContactItemProps} from './types'

// * hooks 
import {useContactItem} from './useContactItem'

// * styles 
import styles from './ContactItem.module.scss'

// * icons 
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const ContactItem: React.FC<IContactItemProps> = ({contact}) => {
    const {
        commands: {
            openUpdateModal,
            openDeleteModal
        }
    } = useContactItem()

    return (
        <div className={styles.contactItem}>
            <ul>
                <li>
                    Username
                    <span>
                        {contact.username}
                    </span>
                </li>
                <li>
                    Full Name
                    <span>
                        {contact.fullname}
                    </span>
                </li>
                <li>
                    Email
                    <span>
                        {contact.email}
                    </span>
                </li>
                <li>
                    Website
                    <span>
                        {contact.website}
                    </span>
                </li>
                <li>
                    Phone
                    <span>
                        {contact.phone}
                    </span>
                </li>
            </ul>
            <div className={styles.contactBtns}>
                <button 
                    onClick={() => openUpdateModal(contact)}
                    className={styles.edit_btn}
                >
                    
                    <AiFillEdit className={styles.icon}/>
                </button>
                <button 
                    onClick={() => openDeleteModal(contact)}
                    className={styles.delete_btn}
                >
                    <AiFillDelete className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}

export default ContactItem