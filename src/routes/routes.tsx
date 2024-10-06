import { Navigate } from 'react-router-dom';
import MAIN_ROUTES from '~/constants/routes';
import CreateTask from '~/pages/Tasks/CreateTask';
import ListTasks from '~/pages/Tasks/TasksList';
import { MainLayout, NotFound, Suspense } from '~/routes/LazyRoutes';

const routes = [
    {
        path: '/',
        element: (
            <Suspense>
                <MainLayout />
            </Suspense>
        ),
        children: [
            {
                path: MAIN_ROUTES.HOME,
                element: <ListTasks />,
            },
            {
                path: MAIN_ROUTES.CREATE_POST,
                element: <CreateTask />,
            },
        ],
    },
    { path: '*', element: <Navigate to={MAIN_ROUTES.NOT_FOUND} /> },
    { path: MAIN_ROUTES.NOT_FOUND, element: <NotFound /> },
];

export default routes;
