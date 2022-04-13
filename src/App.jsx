
import React from "react";
import Produto from "./Produto";
import UserContext from "./UserContext";



function App() {

  console.log(UserContext);
  return (

    <UserContext.Provider value={{nome:'Andre'}}>
      <Produto/>
    </UserContext.Provider>
  );
}

export default App;
