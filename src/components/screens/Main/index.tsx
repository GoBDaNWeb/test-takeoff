// * styles
import styles from './Main.module.scss'

// * components
import Button from '../../ui/Button'
import Search from '../../common/Search'
import ContactList from '../../common/ContactList'

const Main = () => {
    return (
        <div className={styles.main}>
            <Search/>
            <Button>
                Create Contact
            </Button>
            <ContactList/>
        </div> 
    )
}

export default Main