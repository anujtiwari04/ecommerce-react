import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { Menu, ShoppingCart, X, Sun, Moon } from 'lucide-react';
import { clsx } from 'clsx';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { totalItems } = useCart();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#2d3436] hover:text-[#0984e3] transition-colors">
              ShopHub
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/about">About</NavLink>
            <Link 
              to="/cart" 
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#0984e3] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {totalItems}
                </span>
              )}
            </Link>
            {/* <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
            >
              {theme === 'light' ? (
                <Moon className="w-6 h-6" />
              ) : (
                <Sun className="w-6 h-6" />
              )}
            </button> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={clsx(
        "md:hidden",
        isOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <MobileNavLink to="/" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/products" onClick={() => setIsOpen(false)}>Products</MobileNavLink>
          <MobileNavLink to="/about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
          <MobileNavLink to="/cart" onClick={() => setIsOpen(false)}>
            Cart ({totalItems})
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-[#2d3436] hover:text-[#0984e3] px-3 py-2 text-sm font-medium relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0984e3] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
    </Link>
  );
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-medium text-[#2d3436] hover:text-[#0984e3] hover:bg-gray-50"
    >
      {children}
    </Link>
  );
}