import { PropsWithChildren, useState } from 'react';
import { UserSchema } from '../../@types/user.types';
import { UserContext } from './User.context';

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<UserSchema>({} as UserSchema);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}