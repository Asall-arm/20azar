import Products from './Component/Products/Products';
import Comments from './Component/Comments/Comments';
import Users from './Component/Users/Users';
import Orders from './Component/Orders/Orders';
import Offs from './Component/Offs/Offs';

const routes = [
    {path: "/products", element: <Products />},
    {path: "/Comments", element: <Comments />},
    {path: "/Users", element: <Users />},
    {path: "/Orders", element: <Orders />},
    {path: "/Offs", element: <Offs />},
];

export default routes;