// * hooks 
import {useAuth} from './useAuth'

// * styles 
import styles from './Auth.module.scss'

// * components 
import Button from '../../ui/Button'
import Input from '../../ui/Input'


const AuthForm = () => {
    const {
        models: {
            loginValue,
            password,
            error
        },
        commands: {
            onChange,
            handleLogin
        }
    } = useAuth()

    return (
        <div className={styles.authForm}>
            <h2>
                Login in to account
            </h2>
            <Input
                func={onChange}
                type={'text'}
                placeholder={'Enter your login'}
                name={'login'}
                value={loginValue}
                error={error}
            />
            <Input
                func={onChange}
                type={'password'}
                placeholder={'Enter your password'}
                name={'password'}
                value={password}
                error={error}
            />
            <div>
                {
                    error
                    && (
                        <h4 className={styles.errorMessage}>
                            couldn't log in
                        </h4>
                    )
                }
                
                <Button
                    func={handleLogin}
                    color={error ? 'error' : 'default'}
                >
                    Login
                </Button>
            </div>
        </div>
    )

}

export default AuthForm