import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-primary-dark text-white py-12 border-t border-accent/20">
      <div className="container mx-auto px-4 md:px-6 lg:max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="text-2xl font-heading font-bold text-white mb-4">
              <span className="text-accent">SRD</span> EDU CORP
            </div>
            <p className="text-gray-300 text-sm max-w-xs leading-relaxed">
              Empowering Talent. Building Futures. Connecting Opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link href="#programs" className="hover:text-accent transition-colors">Programs</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <FaLinkedin size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <FaInstagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                <FaFacebookF size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} SRD EDU CORP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
