import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';
import { ThemeProvider } from './contexts/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductGrid } from './components/ProductGrid';
import { About } from './components/About';
import { Footer } from './components/Footer';
import { CartPage } from './components/cart/CartPage';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <ProductGrid />
                </>
              } />
              <Route path="/products" element={<ProductGrid />} />
              <Route path="/about" element={<About />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;