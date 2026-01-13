import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  ExternalLink
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Social Media Data
  const socialLinks = [
    { icon: Facebook, url: "https://facebook.com/powerbird.elevators" },
    { icon: Instagram, url: "https://instagram.com/powerbirdelevators/" },
    { icon: Youtube, url: "https://youtube.com/@powerbirdelevators" }
  ]

  return (
    <footer className="bg-gray-950 text-gray-300 border-t border-gray-800">
      
      {/* UPPER FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* COL 1: BRAND & SOCIALS */}
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
            {socialLinks.map((item, i) => (
              <a 
                key={i} 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 border border-gray-800"
              >
                <item.icon size={18} />
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

        {/* COL 3: HEADQUARTERS */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Headquarters</h4>
          <ul className="space-y-5 text-sm">
            
            {/* Address - Click to Map */}
            <li>
              <a 
                href="https://maps.google.com/?q=PowerBird+Elevators+Sirsi" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-3 group hover:text-blue-400 transition-colors"
              >
                <MapPin className="text-blue-500 mt-1 shrink-0 group-hover:text-blue-400" size={18} />
                <span className="leading-relaxed">
                  Near New KSRTC Bus Stand,<br />
                  Ganesh Nagar, Sirsi (U.K),<br />
                  Karnataka - 581401
                </span>
              </a>
            </li>

            {/* Phone - Click to Call */}
            <li>
              <div className="flex items-center gap-3">
                <Phone className="text-blue-500 shrink-0" size={18} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919019666919" className="hover:text-blue-400 transition-colors">+91 90196 66919</a>
                </div>
              </div>
            </li>

            {/* Email - Click to Mail */}
            <li>
              <a href="mailto:info@powerbirdelevators.com" className="flex items-center gap-3 group hover:text-blue-400 transition-colors">
                <Mail className="text-blue-500 shrink-0 group-hover:text-blue-400" size={18} />
                <span>info@powerbirdelevators.com</span>
              </a>
            </li>
          </ul>
        </div>

        {/* COL 4: BRANCH OFFICE */}
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Branch Office</h4>
          <ul className="space-y-5 text-sm">
            
            {/* Address - Click to Map */}
            <li>
              <a 
                href="https://maps.google.com/?q=PowerBird+Elevators+Bengaluru" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-start gap-3 group hover:text-blue-400 transition-colors"
              >
                <MapPin className="text-blue-500 mt-1 shrink-0 group-hover:text-blue-400" size={18} />
                <span className="leading-relaxed">
                  Gokula 1st Stage, 8th Cross,<br />
                  Opp. Comfort INN, HMT Layout,<br />
                  Mathikere, Bengaluru – 560054
                </span>
              </a>
            </li>

            {/* Phone */}
            <li>
              <div className="flex items-start gap-3">
                <Phone className="text-blue-500 mt-1 shrink-0" size={18} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919019666919" className="hover:text-blue-400 transition-colors">+91 90196 66919</a>
                  <a href="tel:+918762373939" className="hover:text-blue-400 transition-colors">+91 87623 73939</a>
                </div>
              </div>
            </li>

            {/* Branch Email (Placeholder for now) */}
            <li>
              <a href="mailto:bangalore@powerbirdelevators.com" className="flex items-center gap-3 group hover:text-blue-400 transition-colors">
                <Mail className="text-blue-500 shrink-0 group-hover:text-blue-400" size={18} />
                {/* 📝 TODO: Update this email once client confirms */}
                <span>bangalore@powerbirdelevators.com</span>
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* LOWER FOOTER */}
      <div className="border-t border-gray-900 bg-gray-950">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <p>© {currentYear} PowerBird Elevators. All rights reserved.</p>
            {/* 🔥 BRC HUB CREDIT */}
            <span className="hidden md:inline text-gray-800">|</span>
            <p className="flex items-center gap-1">
              Designed & Developed by 
              <a 
                href="https://www.thebrchub.tech" 
                target="_blank" 
                rel="noreferrer"
                className="text-blue-500 hover:text-blue-400 font-bold flex items-center gap-0.5"
              >
                BRC Hub LLP <ExternalLink size={10} />
              </a>
            </p>
          </div>
          
          <div className="flex gap-6">
            {/* 🔥 TWEAK: Clickable Placeholders */}
            <button className="hover:text-white transition-colors">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors">Sitemap</button>
          </div>

        </div>
      </div>
    </footer>
  )
}