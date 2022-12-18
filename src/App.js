import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes}    from "react-router-dom"
import Register   from "./Componets/Register";


import Login from './Componets/Login';

import Home from './Componets/Home';
import ProtectedRoute from './services/ProtectedRoute';
function App() {
  return (
    <div className="App">
     


<BrowserRouter>



<Routes>




  <Route  path="/login"  element={<Login />} />
  <Route  path="/register5"  element={<Register/>} />


<Route path="/"  element={<ProtectedRoute />} > 

        <Route  path="/"  element={<Home />} />

</Route> 

</Routes>

</BrowserRouter>



    </div>
  );
}

export default App;
