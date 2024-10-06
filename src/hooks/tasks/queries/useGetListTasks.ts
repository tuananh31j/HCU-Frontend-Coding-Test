import { useQuery } from '@tanstack/react-query';
import instance from '~/configs/axios';
import API_ENDPOINT from '~/constants/apiEndpoint';
import HTTP_METHOD from '~/constants/http';
import QUERY_KEY from '~/constants/queryKey';

const useGetListTasks = (params: { [key: string]: string }) => {
    return useQuery({
        queryKey: [QUERY_KEY.TASKS, ...Object.values(params)],
        queryFn: () =>
            instance({
                url: API_ENDPOINT.LIST_TASKS,
                method: HTTP_METHOD.GET,
                params,
            }),
    });
};

export default useGetListTasks;
