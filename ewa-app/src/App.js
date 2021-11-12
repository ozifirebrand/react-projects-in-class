import React from "react";
import Laptop from "./views/Laptop";
import "./App.css"
function App (){
  return(
      <div className="container">
          <Laptop name ="Apple" color = "gold" madeIn="China"/>
              <Laptop name ="Dell" color = "black" madeIn="Lagos"/>
      </div>
      )
  }

  export default App