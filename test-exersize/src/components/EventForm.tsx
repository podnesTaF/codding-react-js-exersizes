import React, {FC} from 'react';
import {Button, DatePicker, Form, Input, Row, Select} from "antd";
import {IUser} from "../models/IUser";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IEvent} from "../models/IEvent";

interface EventFormProps {
    guests: IUser[];
    submit: (values: IEvent) => void;
}

const EventForm: FC<EventFormProps> = ({guests, submit}) => {
    const {user} = useTypedSelector(state => state.auth)
    const onFinish = (values: any) => {
       submit({...values, date: values.date.format('YYYY.MM.DD'), author: user.username})
    }

    return (
        <div className='event-form-wrapper'>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Event description"
                    name="description"
                    rules={[{required: true, message: 'Please input event description!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Event date"
                    name="date"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <DatePicker/>
                </Form.Item>
                <Form.Item
                 label='Invite a guest'
                    name='guest'
                >
                    <Select
                        showSearch
                        placeholder="Select a person"
                        optionFilterProp="children"
                        filterOption={(input, option) =>
                            (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={guests.map(guest => ({value: guest.username, label: guest.username}))}
                    />
                </Form.Item>
                <Row justify='end'>
                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </div>
    );
};

export default EventForm;
