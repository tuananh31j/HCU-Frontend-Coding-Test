import React from 'react';
import Loading from '~/components/Loading/Loading';

// @lazyRoutes
export const MainLayout = React.lazy(() => import('~/layouts/MainLayout'));
export const NotFound = React.lazy(() => import('~/pages/404'));

// @suspense
export const Suspense = ({ children }: { children: React.ReactNode }) => {
    return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
