      import React from "react";
      import ReactDOM from "react-dom/client";

      const headerElement=(
        <h1 id="h1" key="h1">Namaste React Element</h1>
      ) 
      var xyz="js code inside functional component"
      const HeaderComponent1=()=>{
        return (
        <div>
          {headerElement}
          {console.log(xyz)}
          {xyz}
          <h1>Namaste React Functional Component</h1>
          <h2>Namaste React Functional Component</h2>
        </div>
        )
      }
      const root=ReactDOM.createRoot(document.getElementById("root"));
      // root.render(headerElement);
      root.render(<HeaderComponent1 />);
