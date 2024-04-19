import { Outlet, useRoutes } from "react-router-dom";
import Home from "./Home";
import Users from "./users/Users";
import Products from "./products/Products";
import AddUser from "./users/add-user";
import AddProduct from "./products/add-product";


export default function Routes() {
    return useRoutes([
        { path: "/", element: < Home /> },
        { path: "/users/*", element: (<><Users /><Outlet/></>), children: [{index:true,path:"add", element:<AddUser/>}] },
        { path: "/products/*", element: (<><Products /><Outlet/></>), children: [{path:"add", element:<AddProduct/>}] }
    ])
};