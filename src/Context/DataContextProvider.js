import React, {createContext, useState} from 'react';

export const DataContenxt = createContext("DataContenxt");

const DataContextProvider = ({children}) => {

    const [datas, setDatas] = useState({});


    const setData = (value) => {
        setDatas(value)
    }

    return (
        <DataContenxt.Provider
            value={{
                setData,
                datas,

            }}
        >
            {children}
        </DataContenxt.Provider>
    );
}

export default DataContextProvider;