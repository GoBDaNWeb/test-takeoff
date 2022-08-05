// * redux 
import {useDispatch} from 'react-redux'
import {logout} from '../../../redux/user/userSlice'

export function useHeader() {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return {
        commands: {
            handleLogout
        }
    }
}
