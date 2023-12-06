      import React from "react";
      import ReactDOM from "react-dom/client";

      const HeaderElement=()=>(
        <h1 id="h1" key="h1">Component Composition</h1>
      ) 
      const HeaderComponent1=()=>{
        return (
        <div>
          <HeaderElement/>
          <h1>Namaste React</h1>
        </div>
        )
      }
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<HeaderComponent1 />);
