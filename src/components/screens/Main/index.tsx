// * react 
import {Navigate} from 'react-router-dom'

// * hooks 
import {useMain} from './useMain'

// * styles
import styles from './Main.module.scss'

// * components
import Button from '../../ui/Button'
import ContactList from '../../common/ContactList'

const Main = () => {
    const {
        models: {
            user
        },
        commands: {
            handleOpenModal
        }
    } = useMain()

    if (user === null) {
		return (
			<Navigate to='/auth'/>
		)
	} 

    return (
        <div className={styles.main}>
            <Button
                func={handleOpenModal}
                color='default'
            >
                Create Contact
            </Button>
            <ContactList/>
        </div> 
    )
}

export default Main