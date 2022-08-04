// * react
import {ILayoutProps} from './types'

// * styles
import styles from './Layout.module.scss'

// * components 
import AddContactModal from './AddContactModal'

const Layout: React.FC<ILayoutProps> = ({children}) => {
    return (
        <>
            {/* <AddContactModal/> */}

            <div className={styles.layout}>
                {children}
            </div>
        </>
    )
}

export default Layout