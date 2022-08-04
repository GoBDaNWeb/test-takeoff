// * styles 
import styles from './Auth.module.scss'

// * icons 
import {IoIosReturnLeft} from 'react-icons/io'

// * components 
import Button from '../../ui/Button'
import Input from '../../ui/Input'

const Auth = () => {
    return (
        <div className={styles.auth}>
            <form className={styles.authForm}>
                <button className={styles.btn_back}>
                    <IoIosReturnLeft/>
                </button>
                <h2>
                    Login in to account
                </h2>
                <Input
                    type={'email'}
                    placeholder={'Enter your email'}
                />
                <Input
                    type={'password'}
                    placeholder={'Enter your password'}
                />
                <Input
                    type={'password'}
                    placeholder={'Confirm your email'}
                />
                <div>
                    <h4 className={styles.errorMessage}>
                        Error
                    </h4>
                    <Button>
                        Login
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Auth