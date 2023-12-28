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
      const burgerKing={
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mqr237klqgnu0w2pzd94",
        name:" Burger King",
        rating:"4.2",
        cuisines:["Burgers", "American"],
        location:"Asian Satyam Mall"
      }




      const RestaurantCard=()=>{
        return(
          <div className="card">
            <img src={burgerKing.image} alt="restaurant" />
              <h2>{burgerKing.name}</h2>
              <h3>{burgerKing.rating} star</h3>
              <h4>{burgerKing.cuisines.join(", ")}</h4>
              <p>{burgerKing.location}</p>
          </div>
        )
      }

      const Body=()=>{
        return (
          <div className="restaurant-list">
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          <RestaurantCard/>
          </div>
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
