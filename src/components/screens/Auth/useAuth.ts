// * react 
import React, {useState, useEffect} from 'react'
import {useNavigate } from 'react-router-dom'

// * redux 
import { useSelector, useDispatch } from 'react-redux';
import { useGetAuthDataQuery} from '../../../redux/user/userApi';
import { login} from '../../../redux/user/userSlice';
import {selectUser} from '../../../redux/user/selectors'

    

export function useAuth() {
    const [loginValue, setLoginValue] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<boolean>(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {data: authData} = useGetAuthDataQuery()
    const user = useSelector(selectUser)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const {value} = e.target
        const {name} = e.target
        if (name === 'login') {
            setLoginValue(value)
        }
        if (name === 'password') {
            setPassword(value)
        }
    }

    const handleLogin = () => {
        if (authData?.login === loginValue && authData?.password === password) {
            dispatch(login(authData))
            navigate('/')
        } else {
            setError(true)
        }
    }

    useEffect(() => {
        setError(false)
    }, [login, password])

    return { 
        models: {
            user,
            loginValue,
            password,
            error
        },
        commands: {
            onChange,
            handleLogin
        }
    }
}