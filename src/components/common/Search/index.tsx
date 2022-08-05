// * hooks 
import {useSearch} from './useSearch'

// * styles
import styles from './Search.module.scss'

// * icons
import {BsSearch} from 'react-icons/bs'

const Search = () => {
    const {
        models: {
            searchValue
        },
        commands: {
            onChange
        }
    } = useSearch()

    return (
        <label className={styles.search}>
            <BsSearch className={styles.icon}/>
            <input 
                onChange={onChange}
                className={styles.input} 
                type="text" 
                placeholder='Find Contact...'
                value={searchValue}
            />
        </label> 
    )
}

export default Search