import React from 'react'
import Home from './components/page/home';
import NotFound from './components/page/not-found';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
]
export default routes;