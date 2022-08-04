// * styles 
import styles from './ContactItem.module.scss'

// * icons 
import {AiFillEdit, AiFillDelete} from 'react-icons/ai'

const ContactItem = () => {
    return (
        <div className={styles.contactItem}>
            <ul>
                <li>
                    Username
                    <span>
                        username
                    </span>
                </li>
                <li>
                    Full Name
                    <span>
                        Admin Admins 
                    </span>
                </li>
                <li>
                    Email
                    <span>
                        Admin@gmail.com
                    </span>
                </li>
                <li>
                    Website
                    <span>
                        google.com
                    </span>
                </li>
                <li>
                    Phone
                    <span>
                        024-648-3804
                    </span>
                </li>
            </ul>
            <div className={styles.contactBtns}>
                <button className={styles.edit_btn}>
                    <AiFillEdit className={styles.icon}/>
                </button>
                <button className={styles.delete_btn}>
                    <AiFillDelete className={styles.icon}/>
                </button>
            </div>
        </div>
    )
}

export default ContactItem