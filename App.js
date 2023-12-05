      import {ce as ce} from "react";
      import ReactDOM from "react-dom/client";
/**
  <div class="header">
    <h1>Namaste React</h1>
    <li>About Us</li>
    <li>Home</li>
    <li>Support</li>
    </div>
 */

      const heading1 = ce(
        "h1",
        { 
          id: "heading1" ,
          key:'heading1'
      },
        "Namaste React"
      );
      const about = ce(
        "li",
        { 
          id: "about",
          key:'about'
        },
        "About Us"
        );
        const support=ce("li",{id:"support",key:"support"},"Suport");
        const home=ce("li",{id:"home",key:"home"},"Home");
        const list=ce("ul",{id:"list",key:"list"},[about,support,home]);
      const header=ce("div",{id:"header",key:"header"},[heading1,list]);
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(header);
