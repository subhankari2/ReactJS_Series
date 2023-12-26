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
      const restaurantCard={
        image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/l4ppu8o6nhdospxcnrkh",
        name:"Cafe Niloufer Premium Lounge",
        rating:"4.2",
        cuisines:["Bakery", "Bevarages", "Snacks", "Deserts"],
        location:"Banjara Hills"
      }




      const RestaurantCard=()=>{
        return(
          <div className="card" id='restaurant'>
            <img src={restaurantCard.image} alt="restaurant" />
              <h2>{restaurantCard.name}</h2>
              <h3>{restaurantCard.rating} star</h3>
              <h4>{restaurantCard.cuisines.join(", ")}</h4>
              <p>{restaurantCard.location}</p>
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
