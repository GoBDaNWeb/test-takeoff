import styles from './Search.module.scss'
import {BsSearch} from 'react-icons/bs'

const Search = () => {
    return (
        <label className={styles.search}>
            <BsSearch className={styles.icon}/>
            <input 
                className={styles.input} 
                type="text" 
                placeholder='Find Contact...'
            />
        </label> 
    )
}

export default Search