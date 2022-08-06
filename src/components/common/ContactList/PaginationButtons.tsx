// react 
import {memo} from 'react'

// * hooks 
import {useContactList} from './useContactList'

// * styles 
import styles from './ContactList.module.scss'

// * icons 
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

const PaginationButtons = memo(() => {
    const {
        models: {
            page,
            isDisablePrev,
            isDisableNext,
            searchValue
        },
        commands: {
            handleNextPage,
            handlePrevPage
        }
    } = useContactList()

    return (
        <>
             {
                !searchValue
                && (
                    <div className={styles.pagination_btns}>
                        <button
                            onClick={handlePrevPage}
                            disabled={isDisablePrev}
                        >
                            <BsArrowLeftShort/>
                        </button>
                            {page}
                        <button
                            onClick={handleNextPage}
                            disabled={isDisableNext}
                        >
                            <BsArrowRightShort/>
                        </button>
                    </div>
                )
            }
        </>
    )
})

export default PaginationButtons