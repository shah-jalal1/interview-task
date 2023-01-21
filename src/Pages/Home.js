import React, {useContext, useState} from 'react';
import {Button, Card, Checkbox, Form, Input, Select} from "antd";
import {DataContenxt} from "../Context/DataContextProvider";
import {Link} from "react-router-dom";
import {Option} from "antd/es/mentions";
import {sectorsData} from "../Data/SectorsData";

const Home = () => {

    const dataContext = useContext(DataContenxt);
    const [agree, setAgree] = useState(false);


    const onAgreeChange = (e) => {
        setAgree(e.target.checked)
    }


    const onFinish = (values) => {

        const _data = {...values, agree};

        console.log('values', values)

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

                        {/*<Form.Item*/}
                        {/*    label="Sectors"*/}
                        {/*    name="sectors"*/}
                        {/*    rules={[{required: true, message: 'Please input title'}]}*/}
                        {/*>*/}

                        {/*<Select*/}
                        {/*    labelInValue*/}
                        {/*    defaultValue={{ value: dataContext?.datas?.sectors }}*/}
                        {/*    style={{width: '100%'}}*/}
                        {/*    // onChange={onAgreeChange}*/}

                        {/*    options={[*/}
                        {/*        {*/}
                        {/*            label: "Manufacturing",*/}
                        {/*            options:*/}
                        {/*                [*/}
                        {/*                    { label: 'Construction', value: 'Construction', id: '1' },*/}
                        {/*                    { label: 'Electronics and Optics', value: 'Electronics and Optics', id: '2' },*/}
                        {/*                    {*/}
                        {/*                        label: "Food and Beverage",*/}
                        {/*                        options:*/}
                        {/*                            [*/}
                        {/*                                { label: 'Bakery & confectionery products ', value: 'Bakery & confectionery products', id: '3' },*/}
                        {/*                                { label: 'Fish & fish products', value: 'Fish & fish products', id: '4' },*/}
                        {/*                            ]*/}
                        {/*                    }*/}
                        {/*                ]*/}
                        {/*        }*/}
                        {/*    ]}*/}
                        {/*/>*/}
                        {/*</Form.Item>*/}

                        <Form.Item
                            label="Sectors"
                            name="sectors"
                            rules={[{required: true, message: 'Please input title'}]}
                        >
                            <Select
                                defaultValue="Daily" style={{width: '100%'}}
                                // onChange={onAgreeChange}
                            >
                                {
                                    sectorsData?.map((value, i) => (
                                        <Option key={i} value={value}>{value}</Option>
                                    ))
                                }
                                {/*<Option value="DAILY">Daily</Option>*/}
                                {/*<Option value="WEEKLY">Weekly</Option>*/}
                                {/*<Option value="MONTHLY">Monthly</Option>*/}
                                {/*<Option value="YEARLY">Yearly</Option>*/}
                            </Select>
                        </Form.Item>

                        <div>
                            <Checkbox
                                defaultChecked={dataContext.datas?.agree}
                                onChange={onAgreeChange}
                            >Agree to terms</Checkbox>
                        </div>

                       <div style={{display: 'flex', justifyContent: 'space-between', marginTop: '10px'}}>
                           <Button
                               type="primary"
                               htmlType="submit"
                               ghost
                           >Save</Button>
                           <div >
                               <Link to='/result' >
                                   click here to see the result
                               </Link>
                               {/*<a href="/result">result</a>*/}
                           </div>
                       </div>
                    </Form>
                </Card>

        </div>
    );
};

export default Home;