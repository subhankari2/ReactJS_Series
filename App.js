      import React from "react";
      import ReactDOM from "react-dom/client";
/**
  <div class="header">
    <h1>Namaste React</h1>
    <li>About Us</li>
    <li>Home</li>
    <li>Support</li>
    </div>
 */

      const heading1 = React.createElement(
        "h1",
        { 
          id: "heading1" ,
          key:'heading1'
      },
        "Namaste React"
      );
      const about = React.createElement(
        "li",
        { 
          id: "about",
          key:'about'
        },
        "About Us"
        );
        const support=React.createElement("li",{id:"support",key:"support"},"Suport");
        const home=React.createElement("li",{id:"home",key:"home"},"Home");
        const list=React.createElement("ul",{id:"list",key:"list"},[about,support,home]);
      const header=React.createElement("div",{id:"header",key:"header"},[heading1,list]);
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(header);
