import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import instance from '~/configs/axios';
import API_ENDPOINT from '~/constants/apiEndpoint';
import HTTP_METHOD from '~/constants/http';
import QUERY_KEY from '~/constants/queryKey';
import { ICreateTask } from '~/types/Task';
import showMessage from '~/utils/showMessage';

const useCreateTask = () => {
    const navigater = useNavigate();
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (task: ICreateTask) =>
            instance({
                url: API_ENDPOINT.CREATE_TASK,
                method: HTTP_METHOD.POST,
                data: task,
            }),
        onSuccess: () => {
            queryClient.refetchQueries({
                predicate: (query) => query.queryKey.includes(QUERY_KEY.TASKS),
            });
            showMessage('Created successfully', 'success');
            navigater('/');
        },
        onError: () => {
            showMessage('Something wrong!', 'error');
        },
    });
};

export default useCreateTask;
