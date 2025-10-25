import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Categories from "../Components/Categories";

const Router = createBrowserRouter(
    [
        {
            path: '/',
            Component: HomeLayout,
            children: [
                {
                    path: "",
                    Component: Home
                    
                },
                {
                    path: "/category/:id",
                    Component: CategoryNews,
                    loader: ()=> fetch('/news.json')
                    
                }
            ]
        },
        {
            path: '/auth',
            element: <h2>authrntication layout</h2>
        },
        {
            path: '/news',
            element: <h2>News layout</h2>
        },
        {
            path: '/*',
            element: <h2>error 404</h2>
        },
    ]
)

export default Router