import { createContext } from 'react';
import { UserSchema } from '../../@types/user.types';


type UserState = {
    user: UserSchema, 
    setUser: (user: UserSchema) => void
}

export const UserContext = createContext<UserState>({} as UserState);