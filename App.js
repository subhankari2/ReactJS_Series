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
      const RestaurantCard=()=>{
        return(
          <div className="card" id='restaurant'>
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l4ppu8o6nhdospxcnrkh" alt="restaurant" />
              <h2> Cafe Niloufer Premium Lounge</h2>
              <h2>4.2 stars</h2>
              <p>Bakery,Bevarages,Snacks,Deserts</p>
              <p>Banjara Hills</p>
          </div>
        )
      }

      const Body=()=>{
        return (
          <>
          <div>Body component </div>
          <RestaurantCard/>
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
