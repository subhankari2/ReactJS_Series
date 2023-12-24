      import React from "react";
      import ReactDOM from "react-dom/client";

      const Header = () => {
        return (
         <div className="header">
         <img className="logo" alt="logo" src="https://i.pinimg.com/originals/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg" />
         <div className="nav-items">
            <ul >
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Cart</li>
            </ul>
         </div>
         </div>
        );
      };
      const Body=()=>{
        return (
          <>
          <div>Body component </div>
          </>
        )
      }
      const Footer = () =>{
        return (
          
          <footer>copyright</footer>
        
        );
      }

      const AppLayout=()=>{
        return (
          <React.Fragment>
          <Header/>
          <Body/>
          <Footer/>
          </React.Fragment>

        );
      }
      
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<AppLayout/>);
