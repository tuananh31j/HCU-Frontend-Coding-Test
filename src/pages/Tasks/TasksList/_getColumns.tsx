/* eslint-disable no-unused-vars */
import { Button, TableColumnsType, Tag } from 'antd';
import FilterDrop from '~/components/FilterDropRadio/FilterDropRadio';
import { StatusTask } from '~/constants/enums';

interface DataType {
    key: React.Key;
    id: string;
    name: string;
    status: StatusTask;
}

interface Props {
    getFilteredValue: (key: string) => string[] | undefined;
    handleUpdateStatus: (id: string) => void;
    reset: () => void;
}

const getColumns = ({ getFilteredValue, handleUpdateStatus, reset }: Props): TableColumnsType<DataType> => {
    const filterOptions = [
        { label: 'Completed', value: StatusTask.COMPLETED },
        { label: 'Incomplete', value: StatusTask.INCOMPETE },
    ];
    const columns: TableColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            filterSearch: true,
            onFilter: (value, record) => record.name.includes(value as string),
            width: '30%',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            onFilter: (_, record) => record.status.includes(record.status),
            filteredValue: getFilteredValue('status'),
            render: (status) => (
                <>
                    {status === StatusTask.COMPLETED && <Tag bordered={false}>{status}</Tag>}
                    {status === StatusTask.INCOMPETE && (
                        <Tag bordered={false} color='magenta'>
                            {status}
                        </Tag>
                    )}
                </>
            ),
            filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                <FilterDrop
                    reset={reset}
                    setSelectedKeys={setSelectedKeys}
                    selectedKeys={selectedKeys}
                    confirm={confirm}
                    clearFilters={clearFilters}
                    filterOptions={filterOptions}
                    prefixCls={''}
                    close={() => {}}
                    visible={false}
                />
            ),
        },
        {
            title: 'Actions',
            render: (_, record) => (
                <>
                    {record.status !== StatusTask.COMPLETED && (
                        <Button onClick={() => handleUpdateStatus(record.id)} type='primary'>
                            Done
                        </Button>
                    )}
                </>
            ),
        },
    ];
    return columns;
};

export default getColumns;
