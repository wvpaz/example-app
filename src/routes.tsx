import { RouteObject, useRoutes } from 'react-router-dom';
import { Home, Login, Master, Users, UsersList } from './pages';
import { useUser } from './hooks/useUser';
import { useEffect, useState } from 'react';

const defaultAppRoutes: RouteObject[] = [
    {
        path: '/', 
        element: <Login />
    }
];

const unauthenticatedAppRoutes: RouteObject[] = [
    {
        path: '*', 
        element: <Login />
    }
];

const authenticatedAppRoutes: RouteObject[] = [
    {
        path: '/',
        element: <Master />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/users', 
                element: <Users />,
                children: [
                    {
                        index: true,
                        element: <UsersList />
                    },
                    // {
                    //     path: 'management', 
                    //     element: <UserManagement />
                    // }
                ]
            }
        ]
    }
];

export const AppRouter: React.FC = () => {
    const [routes, setRoutes] = useState<RouteObject[]>(defaultAppRoutes);
    const { user } = useUser();

    useEffect(() => {
        console.log(user)
        setRoutes(user.name ? authenticatedAppRoutes : unauthenticatedAppRoutes);
    }, [user])

    return (
        <>
            { useRoutes(routes)}
        </>
    );
}