import React from 'react';
import GlobalContext from './GlobalContext';

const Produto = () => {

    const global = React.useContext(GlobalContext);
    console.log(global);
    /*function handleClick(){
      return (
        global.setContar((contar)=>contar + 1)
    }*/


    
  return (
    <div>Produto:{global?.contar}{' '} 
      
     <button onClick={()=>global?.AdicionarDois()}>Adicionar</button>
    
    </div>
  );
}

export default Produto;