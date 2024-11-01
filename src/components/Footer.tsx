import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2d3436] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ShopHub</h3>
            <p className="text-gray-300 mb-4">
              Your one-stop destination for all your shopping needs.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#" Icon={Facebook} />
              <SocialIcon href="#" Icon={Twitter} />
              <SocialIcon href="#" Icon={Instagram} />
              <SocialIcon href="#" Icon={Youtube} />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <FooterLink href="/products">Products</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <FooterLink href="/shipping">Shipping Info</FooterLink>
              <FooterLink href="/returns">Returns</FooterLink>
              <FooterLink href="/order-tracking">Order Tracking</FooterLink>
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#0984e3] text-gray-900"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#0984e3] rounded-r-lg hover:bg-[#0984e3]/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} ShopHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, Icon }: { href: string; Icon: any }) {
  return (
    <a
      href={href}
      className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-[#0984e3] transition-colors"
    >
      <Icon className="w-5 h-5" />
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-300 hover:text-white transition-colors relative group"
      >
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#0984e3] transform scale-x-0 group-hover:scale-x-100 transition-transform" />
      </a>
    </li>
  );
}