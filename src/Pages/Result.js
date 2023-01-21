import React, {useContext} from 'react';
import {DataContenxt} from "../Context/DataContextProvider";
import {Card} from "antd";
import {Link} from "react-router-dom";

const Result = () => {
    const dataContext = useContext(DataContenxt);

    console.log('data--', dataContext?.datas?.agree)
    return (
        <div style={{
            height: '100vh',
            // paddingTop: '40px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Card  bordered={false} style={{width: '60%', backgroundColor: '#f5f0f0'}}>
               <div>
                   <h3 style={{textAlign: 'center'}}>Input Data</h3>
                   <h3>Name:
                       <span> {dataContext?.datas?.name}</span>
                   </h3>
                   <h3>Sectors:
                       <span> {dataContext?.datas?.sectors}</span>
                   </h3>
                   <h3>Agree:
                       <span> {dataContext?.datas?.agree ? 'True' : 'False'}</span>
                   </h3>
               </div>
                <div style={{display: 'flex', justifyContent: 'end'}}>
                        <Link to='/' >
                            Click here to go to the form page
                        </Link>
                        {/*<a href="/result">result</a>*/}
                </div>
            </Card>

        </div>
    );
};

export default Result;