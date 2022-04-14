
import React from "react";
import {GlobalStorage} from "./GlobalContext";
import Produto from "./Produto";




function App() {

   
  return (
 
    <GlobalStorage Children={<Produto/>}></GlobalStorage>
      
 
  );
}

export default App;
