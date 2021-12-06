import IRoute from "../interface/route"
import AboutPage from "../pages/about";
import HomePage from "../pages/home";

const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
      
    },
    {
        path: '/about',
        exact: true,
        component: AboutPage,
        name: 'About Page',
      
    }
];

export default routes;
