import { useRoutes } from 'react-router-dom';
import useFilter from '~/hooks/common/useFilter';
import routes from '~/routes/routes';

function App() {
    useFilter();
    const router = useRoutes(routes);
    return router;
}

export default App;
