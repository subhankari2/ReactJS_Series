      import React,{Suspense, lazy, useEffect,useState} from "react";
      import ReactDOM from "react-dom/client";      
      import Header from "./components/Header";
      import Body from "./components/Body"
      import Footer from "./components/Footer";
      import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
      import About from "./components/About";
      import Error from "./components/Error";
      import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart"

const Grocery=lazy(()=>import("./components/GroceryStore"))
      const AppLayout=()=>{
const [userName,setUserName]=useState();
        useEffect(()=>{
         const data={
name:"Subhankari Padhi"
          }
          setUserName(data.name)
        },[]);

        return (
          <Provider store={appStore}>
          <UserContext.Provider  value={{loggedInUser:userName,setUserName}}>         
          <>
          <Header/>
          <Outlet/>
          <Footer/>
          </>
          </UserContext.Provider>
          </Provider>
        );
      }

      const appRouter=createBrowserRouter([
        {
          path:"/",
          element:<AppLayout/>,
          children:[
            
            {
              path:"/",
            element:<Body/>
            },
            {
              path:"/about",
            element:<About/>
            },
            {
              path:"/contact",
            element:<Contact/>
            },
            {
              path:"/menu/:id",
              element:<RestaurantMenu/>
            },
            {
              path:"/grocery",
              element:<Suspense fallback={<p>Loading...</p>}> <Grocery/></Suspense>
            },
            {
              path:"/cart",
              element:<Cart/>
            }
          ],
          errorElement:<Error />
        }
      ]);
      
      const root=ReactDOM.createRoot(document.getElementById("root"));
      root.render(<RouterProvider router={appRouter} />);
