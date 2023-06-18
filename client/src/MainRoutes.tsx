import { useRoutes } from 'react-router-dom';
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import { Register } from './pages/Register';


export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Register />},
        { path: '/login', element: <Login /> },
        { path: '/jogo', element: <Home /> },
        /* { path: '/Register', element: <NoFound /> } */
    ]);
}
