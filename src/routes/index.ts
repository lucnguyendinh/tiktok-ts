//layout
import { HeaderOnly } from '~/components/Layouts';

import Following from '~/pages/Following';
import Home from '~/pages/Home';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

interface Public {
    path: string;
    component: React.FC;
    layout?: null | React.FC;
}

const publicRoutes: Public[] = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/search', component: Search, layout: null },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes: any[] = [];

export { publicRoutes, privateRoutes };
