import IRoute from "../interface/route";
import ChangePasswordPage from "../pages/auth/change";
import ForgotPasswordPage from "../pages/auth/forgot";
import LoginPage from "../pages/auth/login";
import LogoutPage from "../pages/auth/logout";
import RegisterPage from "../pages/auth/register";
import ResetPasswordPage from "../pages/auth/reset";
import HomePage from "../pages/home";
import FevoritePage from "../pages/fevorite";
import WatchList from "../pages/watchlist";
import MovieDescription from "../pages/movieDescription";
const routes: IRoute[] = [
    {
        path: '/',
        exact: true,
        component: HomePage,
        name: 'Home Page',
        protected: true
    },
    {
        path: '/register',
        exact: true,
        component: RegisterPage,
        name: 'Register Page',
        protected: false
    },
    {
        path: '/login',
        exact: true,
        component: LoginPage,
        name: 'Login Page',
        protected: false
    },
    {
        path: '/change',
        exact: true,
        component: ChangePasswordPage,
        name: 'Change Password Page',
        protected: true
    },
    {
        path: '/logout',
        exact: true,
        component: LogoutPage,
        name: 'Logout Page',
        protected: true
    },
    {
        path: '/forget',
        exact: true,
        component: ForgotPasswordPage,
        name: 'Forgot Password Page',
        protected: false
    },
    {
        path: '/reset',
        exact: true,
        component: ResetPasswordPage,
        name: 'Reset Password Page',
        protected: false
    },
    {
        path: '/fevorite',
        exact: true,
        component: FevoritePage,
        name: 'fevorite Movies',
        protected: true
    },
    {
        path: '/watchlist',
        exact: true,
        component: WatchList,
        name: 'My watch list',
        protected: true
    },
    {
        path: '/movies/:id',
        exact: true,
        component: MovieDescription ,
        name: 'My watch list',
        protected: true
    },


];

export default routes;
