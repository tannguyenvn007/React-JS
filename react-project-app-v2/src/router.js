import React from 'react'
import Home from './page/home';
import NotFound from './page/not-found';
import Product from './page/product_page';
import About from './page/about';
import Contact from './page/contact';


const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home/>
    },
    {
        path: '/product',
        exact: false,
        main: () => <Product/>
    },
    {
        path: '/about',
        exact: false,
        main: () => <About/>
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
]
export default routes;