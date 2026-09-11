function Footer() {
  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200/80 pt-12 pb-8 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-bold text-xs shadow-sm">
                DS
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dev <span className="text-[#B341C3]">Stack</span>
              </span>
            </div>
            
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600 pt-2">
              <a href="#" className="hover:text-[#B341C3] transition">GitHub</a>
              <a href="#" className="hover:text-[#B341C3] transition">Twitter</a>
              <a href="#" className="hover:text-[#B341C3] transition">LinkedIn</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#B341C3] transition">Home</a></li>
              <li><a href="#" className="hover:text-[#B341C3] transition">Technologies</a></li>
              <li><a href="#" className="hover:text-[#B341C3] transition">Projects</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              COMPANY
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#B341C3] transition">About</a></li>
              <li><a href="#" className="hover:text-[#B341C3] transition">Contact</a></li>
              <li><a href="#" className="hover:text-[#B341C3] transition">Careers</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-[#B341C3] transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#B341C3] transition">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#B341C3] transition">Privacy</a>
            <a href="#" className="hover:text-[#B341C3] transition">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;