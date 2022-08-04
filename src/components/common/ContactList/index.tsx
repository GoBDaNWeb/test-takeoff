// * styles 
import styles from './ContactList.module.scss'

// * components
import ContactItem from '../ContactItem'

const ContactList = () => {
    return (
        <div className={styles.contactList}>
            {
                [...new Array(4)].map((item, index) => (
                    <ContactItem key={index}/>
                ))
            }
        </div>
    )
}

export default ContactList