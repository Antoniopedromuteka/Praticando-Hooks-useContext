import React from 'react';

const GlobalContext = React.createContext();

export const GlobalStorage = ({Children})=>{

    const [contar, setContar] = React.useState(0);


    const AdicionarUm=()=>{
        setContar((contar) => contar + 1);
    }

    

    const AdicionarDois=()=>{
        setContar((contar) => contar + 2);
    }


    return (
     <GlobalContext.Provider value={{contar, AdicionarUm, AdicionarDois}}>
        {Children ? Children : <h1>Não tem</h1> }
      </GlobalContext.Provider>
    );
}

export default GlobalContext; 