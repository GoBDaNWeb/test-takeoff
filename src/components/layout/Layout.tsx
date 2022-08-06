// * react
import {memo} from 'react'
import {ILayoutProps} from './types'

// * hooks 
import {useLayout} from './useLayout'

// * styles
import styles from './Layout.module.scss'

// * components 
import Header from './Header'
import AddContactModal from './AddContactModal'
import UpdateContactModal from './UpdateContactModal'
import DeleteContactModal from './DeleteContactModal'

const Layout: React.FC<ILayoutProps> = memo(({children}) => {
    const {
        models: {
            isOpenCreateModal,
            isOpenUpdateModal,
            isOpenDeleteModal,
            user
        }
    } = useLayout()
    
    return (
        <>
            {
                isOpenCreateModal
                && <AddContactModal/>
            }
            {
                isOpenUpdateModal
                && <UpdateContactModal/>
            }
            {
                isOpenDeleteModal
                && <DeleteContactModal/>
            }
            <div className={styles.layout}>
                {
                    user
                    && <Header/>
                }
                {children}
            </div>
        </>
    )
})

export default Layout