import { Routes, Route } from "react-router-dom";
import {Component} from "react";
import { Container } from "react-bootstrap";
import { Homescreen } from "./pages/Homescreen";
import {Storescreen} from "./pages/Storescreen";
import { Loginscreen } from "./pages/Loginscreen";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import './App.css';
import { Registerscreen } from "./pages/Registerscreen";
function App() {
  

  return (
    <ShoppingCartProvider>
    <div className="App">
      <div>
        <Navbar/>
        <Container className="mb-4">
        <Routes>
        <Route path="/"  element={<Homescreen/>}/>
        <Route path="/store"  element={<Storescreen/>}/>
        <Route path="/login"  element={<Loginscreen/>}/>
        <Route path="/register" element={<Registerscreen/>}/>

        </Routes>
      </Container>
       </div>
    </div>
  </ShoppingCartProvider>
  )
}

export default App
