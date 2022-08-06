// * react
import {memo} from 'react'

// * hooks
import {useHeader} from './useHeader'

// * styles 
import styles from './Header.module.scss'

// * icons 
import {FaSmileWink} from 'react-icons/fa'
import {ImExit} from 'react-icons/im'

// * components 
import Search from '../../common/Search'

const Header = memo(() => {
    const {
        commands: {
            handleLogout
        }
    } = useHeader()
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <FaSmileWink/>
                Have a nice day
            </div>
            <Search/>
            <button onClick={handleLogout}>
                <ImExit/>
            </button>
        </div>
    )

})

export default Header