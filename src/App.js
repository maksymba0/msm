import logo from './logo.svg';
import './App.css';
import './Main.css';
import TopBar from './Components/TopBar.js'
import Employee from './Components/Employee.js';
import Products from './Components/Products.js';
import Reports from './Components/Reports.js';
import Home from './Components/Home.js'; 
import Auth from './Components/Auth.js'
import { useState } from 'react';

function App() {
  const [IsLoggedIn,setIsLoggedIn] = useState(false);
  
  let Comp
  switch(window.location.pathname)
  {
    case "/":
      Comp = <Home/>
      break

    case "/products":
      Comp = <Products/>
      break

    case "/employee":
      Comp = <Employee/>
      break

    case "/reports":
      Comp = <Reports/>
      break

    default:
      Comp = <Home/>
  }
  console.log(Comp);
  return (
    <div className="Main">
         
        <TopBar></TopBar>
        
         
         {!IsLoggedIn ? (<Auth LogInProp={setIsLoggedIn}/>): Comp}
         
         
        
        
    </div> 
  );
}

export default App;
