import Navbar from './Components/Navbar/Navbar';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import Checkout from './Components/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  category="men"/>}/>
        <Route path='/womens' element={<ShopCategory  category="women"/>}/>
        <Route path='/kids' element={<ShopCategory  category="kid"/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>} />
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
