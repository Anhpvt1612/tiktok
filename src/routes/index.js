import { HeaderOnly } from '~/component/Layout';
import HeaderOnlyPage from '~/pages/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
//Public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/headeronly', component: HeaderOnlyPage, layout: HeaderOnly },
];

//Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
