import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import clsx from 'clsx';
import styleModule from './createTask.module.css';
import useCreateTask from '~/hooks/tasks/mutations/useCreateTask';
import { ICreateTask } from '~/types/Task';
import { Link } from 'react-router-dom';
import MAIN_ROUTES from '~/constants/routes';

const { Option } = Select;

const CreateTask: React.FC = () => {
    const [form] = Form.useForm();
    const { mutate } = useCreateTask();

    const onFinish = (values: ICreateTask) => {
        mutate(values);
    };

    return (
        <>
            <Link to={MAIN_ROUTES.HOME}>
                <Button type='default'>Back to list</Button>
            </Link>
            <div className={clsx(styleModule['form-create'])}>
                <Form form={form} name='control-hooks' onFinish={onFinish}>
                    <Form.Item name='name' label='Task name' rules={[{ required: true }]}>
                        <Input placeholder='Enter the name of the task you need to do' />
                    </Form.Item>
                    <Form.Item initialValue={'incomplete'} name='status' label='Status' rules={[{ required: true }]}>
                        <Select placeholder='Task status'>
                            <Option value='completed'>Completed</Option>
                            <Option value='incomplete'>Incomplete</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type='primary' htmlType='submit'>
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default CreateTask;
