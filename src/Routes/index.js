import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Profile from '~/Pages/Profile';
import Upload from '~/Pages/Upload';
import Live from '~/Pages/Live';
import OnlyHeader from '~/layouts/OnlyHeader';

import config from '~/config';
// Public route
const publicRoutes = [
    {path: config.routes.home, component: Home},
    {path: config.routes.following, component: Following},
    {path: config.routes.live, component: Live},
    {path: config.routes.profile, component: Profile},
    {path: config.routes.upload, component: Upload, layout: OnlyHeader},
   
];
// Private route
const privateRoutes = [

];
export { publicRoutes, privateRoutes};