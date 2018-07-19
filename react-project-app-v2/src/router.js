import React from 'react'
import Home from './page/home';
import NotFound from './page/not-found';
import Product from './page/product_page';
import About from './page/about';
import Contact from './page/contact';
import Manage from './page/manage/manage';
import ProductAction from './page/manage/productAction';


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
        path: '/manage',
        exact: false,
        main: () => <Manage/>
    },
    {
        path: '/add',
        exact: false,
        main: ({history}) => <ProductAction history={history}/>
    },
    {
        path: '/:id/:id/edit',
        exact: false,
        main: ({history,match}) => <ProductAction history={history} match={match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound/>
    }
]
export default routes;