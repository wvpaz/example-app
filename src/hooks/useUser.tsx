import { useContext } from 'react'
import { UserContext } from '../contexts/User/User.context'

export const useUser = () => {
    return useContext(UserContext);
}