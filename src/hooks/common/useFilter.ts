import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { setQuery } from '~/store/slices/filterSlice';
import { useTypedSelector } from '~/store/store';

const useFilter = () => {
    const dispatch = useDispatch();
    const { query } = useTypedSelector((state) => state.filter);
    const { pathname } = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    const navigator = useNavigate();
    useEffect(() => {
        const params: { [key: string]: string } = {};
        searchParams?.forEach((value, key) => {
            params[key] = value;
        });
        // @dispatch
        dispatch(setQuery(params));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getFilteredValue = (key: string) => {
        return query[key] ? (query[key] as string).split(',') : undefined;
    };

    const reset = () => {
        // @dispatch
        dispatch(setQuery({}));
        navigator(`${pathname}`);
    };
    const updateQueryParam = (params: { [key: string]: string }) => {
        // @dispatch
        dispatch(setQuery(params));
        searchParams.set('status', params.status);
        setSearchParams(params);
    };

    return { query, updateQueryParam, getFilteredValue, reset };
};

export default useFilter;
