import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageRouting from './PageRouting';
import Home from '../pages/Landing/Home';
import About from '../pages/About/About';
import Contacts from '../pages/Contacts/Contacts';
import Skills from '../pages/Skill/Skills';
import Project from '../pages/Project/Project';
import PageNotFound from '../pages/NotFound/PageNotFound';
function Router () {
    const router = createBrowserRouter([
        {
            element: <PageRouting />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/contact',
                    element: <Contacts />
                },
                {
                    path: '/skills',
                    element: <Skills />
                },
                {
                    path: '/project',
                    element: <Project />
                },
                {
                    path: '*',
                    element: <PageNotFound />
                }
            ]
        }
    ]);
    return (
        <div>
            <RouterProvider router={ router } />
        </div>
    );
}

export default Router;