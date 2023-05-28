import { useRoutes } from 'react-router-dom';

import {Home} from './pages/Home'
import {Login} from './pages/Login'
import { Register } from './pages/Register';


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/login', element: <Login /> },
        { path: '/Register', element: <Register /> },
        /* { path: '/Register', element: <NoFound /> } */
    ]);
}