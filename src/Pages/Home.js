import React, {useContext} from 'react';
import {Button, Card, Checkbox, Form, Input, Select} from "antd";
import {DataContenxt} from "../Context/DataContextProvider";
import {Link} from "react-router-dom";
import {Option} from "antd/es/mentions";
import {sectorsData} from "../Data/SectorsData";

const Home = () => {

    const dataContext = useContext(DataContenxt);


    const onFinish = (values) => {

        dataContext.setData(values);
        alert('Successfully Save Data');

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
                                agree: dataContext.datas?.agree
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
                            rules={[{required: true, message: 'Please input name'}]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Sectors"
                            name="sectors"
                            rules={[{required: true, message: 'Please input Sectors'}]}
                        >
                            <Select
                                placeholder='Select Sector'
                                style={{width: '100%'}}
                            >
                                {
                                    sectorsData?.map((value, i) => (
                                        <Option key={i} value={value}>{value}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item
                            name="agree"
                            valuePropName="checked"
                            rules={[
                                {
                                    required: true,
                                    message: "You need to agree the terms and conditions",
                                },
                            ]}
                        >
                            <Checkbox  >
                                Agree to terms
                            </Checkbox>
                        </Form.Item>

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