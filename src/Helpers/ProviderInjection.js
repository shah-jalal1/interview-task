import DataContextProvider from "../Context/DataContextProvider";

const contextProvider = [

    DataContextProvider
]

export const ProviderInjection = ({app}) => {
    contextProvider.forEach(Provider => app = <Provider>{app}</Provider>);
    return app;
}

export default ProviderInjection;