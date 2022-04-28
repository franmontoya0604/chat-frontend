import React  from "react";
import { BrowserRouter, Routes, Route,Navigate}  from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound"
import ProtectedRoutes from "./components/ProtectedRoutes"
import ProviderContext from "./context/AppContext"

function App() {
  return (
    <>
    <BrowserRouter>
    <ProviderContext>
    <Routes> 
       <Route  path="/" element={ <ProtectedRoutes> <Home/> </ProtectedRoutes> } /> 
       <Route  path="login" element={<Login/> } /> 

       <Route path="*" element={<NotFound/>} />

     </Routes>
     </ProviderContext>
     </BrowserRouter>
     </>
  );
}

export default App;
