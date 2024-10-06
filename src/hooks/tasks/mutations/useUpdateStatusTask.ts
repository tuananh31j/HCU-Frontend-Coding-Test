import { useMutation, useQueryClient } from '@tanstack/react-query';
import instance from '~/configs/axios';
import API_ENDPOINT from '~/constants/apiEndpoint';
import { StatusTask } from '~/constants/enums';
import HTTP_METHOD from '~/constants/http';
import QUERY_KEY from '~/constants/queryKey';
import showMessage from '~/utils/showMessage';

const useUpdateStatusTask = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) =>
            instance({
                url: `${API_ENDPOINT.UPDATE_STATUS_TASK}/${id}`,
                method: HTTP_METHOD.PATCH,
                data: { status: StatusTask.COMPLETED },
            }),
        onSuccess: () => {
            queryClient.refetchQueries({
                predicate: (query) => query.queryKey.includes(QUERY_KEY.TASKS),
            });
            showMessage('Status updated', 'success');
        },
        onError: () => {
            showMessage('Something wrong!', 'error');
        },
    });
};

export default useUpdateStatusTask;
