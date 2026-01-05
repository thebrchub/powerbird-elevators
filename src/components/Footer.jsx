import { 
  Facebook, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight 
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      
      {/* UPPER FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* COL 1: BRAND */}
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold text-white tracking-tight">
              PowerBird <span className="text-blue-500">Elevators</span>
            </h3>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Engineering vertical transportation with precision, safety, and 
              uncompromising quality. Your trusted partner for lifting solutions across Karnataka.
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Linkedin, Instagram, Twitter].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-800"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* COL 2: QUICK LINKS */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-3 text-sm">
            {['Home', 'About Us', 'Our Projects', 'Safety Standards', 'Contact Us'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 3: SERVICES */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Services</h4>
          <ul className="space-y-3 text-sm">
            {['Passenger Elevators', 'Hospital Lifts', 'Industrial Goods Lifts', 'Modernization', 'Annual Maintenance (AMC)'].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-500 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* COL 4: CONTACT */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h4>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-500 mt-1 shrink-0" size={18} />
              <span className="leading-relaxed">
                Near New KSRTC Bus Stand,<br />
                Ganesh Nagar, Sirsi (U.K), Karnataka - 581401
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="text-blue-500 shrink-0" size={18} />
              <span>+91 90196 66919, +91 87623 73939</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="text-blue-500 shrink-0" size={18} />
              <span>info@powerbirdelevators.com</span>
            </li>
          </ul>
        </div>

      </div>

      {/* LOWER FOOTER */}
      <div className="border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <p>© {currentYear} PowerBird Elevators. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>

        </div>
      </div>
    </footer>
  )
}