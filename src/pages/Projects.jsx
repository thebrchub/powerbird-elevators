import Reveal from '../components/Reveal'
import { 
  Building, 
  MapPin, 
  Hotel, 
  Home, 
  Stethoscope, 
  ShoppingBag,
  Briefcase,
  Landmark
} from 'lucide-react'

export default function Projects() {
  
  // Data from Brochure Page 19 (Client List)
  const clients = [
    "Omkar Jungle Resort",
    "Hotel Ankola International", 
    "Rotary Charitable Hospital",
    "Namadhari Bhavan",
    "TSS",
    "Pro-Tantrix",
    "Mandara",
    "Kamadhenu",
    "Bappanalli Brothers",
    "Chandrapattan Groups",
    "Wajid Misgar",
    "Lavender Elite",
    "Pradeep's Group",
    "Arga Trust",
    "Vishwa Seva Sami",
    "Om Ganeshaya Namah Constructions"
  ];

  // Data from Brochure Page 20 (Service Locations)
  const cities = [
    "Bangalore", "Sirsi", "Hubli", "Dharwad", "Belgaum", 
    "Mangalore", "Udupi", "Shimoga", "Davangere", 
    "Bellari", "Hospet", "Karwar", "Kumta", "Bhatkal", "Honnavar"
  ];

  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <h1 className="text-4xl font-bold">
              Our <span className="text-blue-500">Portfolio</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-gray-300 max-w-2xl text-lg">
              PowerBird elevators are currently operating in approximately 
              <span className="text-white font-bold"> 20 Cities</span> around the State[cite: 23]. 
              From luxury resorts to critical healthcare facilities.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SECTORS (Page 3 of Brochure) ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Sectors We Serve
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: <Hotel size={24} />, label: "Hotels" },
              { icon: <Home size={24} />, label: "Residential" },
              { icon: <ShoppingBag size={24} />, label: "Stores" },
              { icon: <Stethoscope size={24} />, label: "Hospitals" },
              { icon: <Briefcase size={24} />, label: "Offices" },
              { icon: <Landmark size={24} />, label: "Govt Sector" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center p-6 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 group">
                  <div className="text-gray-400 group-hover:text-blue-600 mb-3 transition-colors">
                    {item.icon}
                  </div>
                  <span className="font-semibold text-gray-700 group-hover:text-gray-900">
                    {item.label}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= NOTABLE CLIENTS (Page 19) ================= */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="mb-12 border-l-4 border-blue-500 pl-6">
              <h2 className="text-3xl font-bold">Trusted Clientele</h2>
              <p className="text-gray-400 mt-2">Selected projects from our diverse portfolio</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-3 p-4 bg-gray-800/50 border border-gray-700 rounded hover:border-blue-500 hover:bg-gray-800 transition-colors">
                  <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0"></div>
                  <span className="text-sm font-medium text-gray-300 tracking-wide">
                    {client}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SERVICE NETWORK (Page 20) ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <Reveal>
            <MapPin className="mx-auto text-red-600 mb-4" size={48} />
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Service Network
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-12">
              We have established a robust after-sales network to service elevators across Karnataka.
            </p>
          </Reveal>

          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city, i) => (
              <Reveal key={i} delay={0.1 + (i * 0.02)}>
                <span className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-600 text-sm font-medium shadow-sm hover:border-blue-400 hover:text-blue-600 transition-colors">
                  {city}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}