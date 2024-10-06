import React from 'react';
import { Button, Space, Table } from 'antd';
import type { TableProps } from 'antd';
import useGetListTasks from '~/hooks/tasks/queries/useGetListTasks';
import useFilter from '~/hooks/common/useFilter';
import useUpdateStatusTask from '~/hooks/tasks/mutations/useUpdateStatusTask';
import getColumns from '~/pages/Tasks/TasksList/_getColumns';
import { Link } from 'react-router-dom';
import MAIN_ROUTES from '~/constants/routes';
import { StatusTask } from '~/constants/enums';

interface DataType {
    key: React.Key;
    id: string;
    name: string;
    status: StatusTask;
}

const ListTasks: React.FC = () => {
    const { query, getFilteredValue, reset, updateQueryParam } = useFilter();
    const { data } = useGetListTasks(query);
    const { mutate: updateStatusTask } = useUpdateStatusTask();
    const onChange: TableProps<DataType>['onChange'] = (_, filters) => {
        updateQueryParam({ ...query, status: (filters.status && (filters.status[0] as string)) || '' });
    };
    const handleUpdateStatus = (id: string) => {
        updateStatusTask(id);
    };

    const columns = getColumns({ getFilteredValue, handleUpdateStatus, reset });
    return (
        <Space direction='vertical' size='small' style={{ width: '100%' }}>
            <Link to={MAIN_ROUTES.CREATE_POST}>
                <Button type='default'>Create New Task</Button>
            </Link>
            <Table<DataType>
                columns={columns}
                dataSource={data?.data}
                onChange={onChange}
                pagination={{ total: data?.data.length, pageSize: 5 }}
            />
        </Space>
    );
};

export default ListTasks;
