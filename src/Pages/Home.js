import React, {useContext, useState} from 'react';
import {Button, Card, Checkbox, Form, Input, Select} from "antd";
import {Option} from "antd/es/mentions";
import {DataContenxt} from "../Context/DataContextProvider";

const Home = () => {

    const dataContext = useContext(DataContenxt);
    const [agree, setAgree] = useState(false);

    console.log('----', agree)

    const onAgreeChange = (e) => {
        setAgree(e.target.checked)
    }

    console.log('da======', dataContext.datas)

    const onFinish = (values) => {

        const _data = {...values, agree};

        dataContext.setData(_data);


    }

    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{
            height: '100vh',
            // paddingTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
                <Card  bordered={false} style={{width: '60%', backgroundColor: '#f5f0f0'}}>
                    <h3>Form</h3>
                    <Form
                        layout='vertical'
                        name="basic"
                        initialValues={dataContext.datas ?
                            {
                                ...dataContext.datas,
                            } : {}
                        }
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        className="form"
                        // form={form}
                    >

                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{required: true, message: 'Please input title'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Sectors"
                            name="sectors"
                            rules={[{required: true, message: 'Please input title'}]}
                        >
                            <Select
                                defaultValue="Daily" style={{width: '100%'}}
                                // onChange={onAgreeChange}
                            >
                                <Option value="DAILY">Daily</Option>
                                <Option value="WEEKLY">Weekly</Option>
                                <Option value="MONTHLY">Monthly</Option>
                                <Option value="YEARLY">Yearly</Option>
                            </Select>
                        </Form.Item>

                        <div>
                            <Checkbox
                                // onChange={onChange}
                                onChange={onAgreeChange}
                            >Agree to terms</Checkbox>
                        </div>

                        <Button
                            type="primary"
                            htmlType="submit"
                            ghost
                        >Save</Button>
                    </Form>
                </Card>

        </div>
    );
};

export default Home;