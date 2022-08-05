// * react 
import {Navigate} from 'react-router-dom'

// * hooks 
import {useAuth} from './useAuth'

// * styles 
import styles from './Auth.module.scss'

// * components 
import AuthForm from './AuthForm'

const Auth = () => {
    const {
        models: {
            user
        }
    } = useAuth()

    if (user !== null) {
		return (
			<Navigate to='/'/>
		)
	} 
    return (
        <div className={styles.auth}>
            <AuthForm/>
        </div>
    )
}

export default Auth