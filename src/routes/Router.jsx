import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Contact from "../pages/Contact";
import Services from "../pages/Services";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: '/doctors',
                element: <Doctors />,
            },
            {
                path: '/doctors/:id',
                element: <DoctorDetails />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/services',
                element: <Services />,
            },   
        ]
    }
])