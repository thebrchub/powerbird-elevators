import Reveal from '../components/Reveal'
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Cpu, 
  CheckCircle2,
  Briefcase,
  Leaf,
  Award,
  Sun,
  Moon
} from 'lucide-react'

export default function About({ darkPreview, setDarkPreview }) {
  return (
    // Added min-h-screen for full height
    <div className={`pt-18 min-h-screen transition-colors duration-300 ${darkPreview ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* ================= DARK MODE TOGGLE ================= */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setDarkPreview(!darkPreview)}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white shadow-lg hover:bg-gray-800 transition text-sm font-semibold"
        >
          {darkPreview ? <Sun size={16} /> : <Moon size={16} />}
          {darkPreview ? 'Light View' : 'Dark View'}
        </button>
      </div>

      {/* ================= HERO ================= */}
      <section 
        className={`border-b transition-colors duration-300 ${
          darkPreview 
            ? 'bg-gray-950 text-white border-gray-800' 
            : 'bg-white text-gray-900 border-gray-200'
        }`}
      >
        {/* RESPONSIVE: px-6 (mobile) to px-6 (desktop) is fine, just ensuring container width */}
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <h1 className="text-4xl font-bold">
              About <span className="text-blue-500">PowerBird Elevators</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={`mt-6 max-w-3xl text-lg leading-relaxed ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
              <p>
                The <span className="text-blue-400 font-semibold">MPWAY</span> to Safety and Quality. 
              </p>
              
              <p className={`my-4 text-xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                "We are the First and Best Elevator Company in the entire North Canara (Uttar Kannada) Region."
              </p>

              <p>
                We are an ISO 9001:2015 Certified Company authorized by the Government of Karnataka, 
                delivering advanced vertical transportation solutions.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CORPORATE PROFILE ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        {/* RESPONSIVE: grid-cols-1 on mobile, lg:grid-cols-2 on large screens */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <Reveal>
            <div>
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono mb-6
                ${darkPreview ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                 <Building2 size={14} /> COMPANY PROFILE
              </div>
              
              <h2 className={`text-3xl font-bold mb-6 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                25 Years of Engineering Excellence
              </h2>

              <p className={`leading-relaxed mb-6 text-lg ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                Utilizing advanced technological prowess, PowerBird has remained a top elevator supplier 
                in the vertical transportation market. Our creative, innovative spirit is represented 
                by the production of elevator group-control systems that use <strong>artificial intelligence technologies</strong>.
              </p>

              <p className={`leading-relaxed border-l-4 border-blue-500 pl-6 italic ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                "We understand our responsibilities as a good corporate citizen and continue to implement 
                measures for protecting the environment and ensuring a sustainable society for future generations."
              </p>

              {/* RESPONSIVE: flex-col on small screens, flex-row on desktop */}
              <div className="mt-8 flex flex-col sm:flex-row gap-8 sm:items-center">
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>25+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Experience</span>
                 </div>
                 
                 {/* RESPONSIVE: Hidden on mobile, visible on sm+ */}
                 <div className={`hidden sm:block w-px h-12 ${darkPreview ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                 
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>20+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Cities Covered</span>
                 </div>
                 
                 <div className={`hidden sm:block w-px h-12 ${darkPreview ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                 
                 <div className="flex flex-col">
                    <span className={`text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>24/7</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Emergency Service</span>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CAPABILITIES CARD ================= */}
          <Reveal delay={0.2}>
            <div className={`rounded-xl p-8 relative overflow-hidden border transition-colors duration-300
              ${darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-gray-50 border-gray-200'}`}>
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>

              <h3 className={`text-lg font-bold mb-6 flex items-center gap-2 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                <Briefcase className="text-blue-600" size={20} />
                Our Product Range
              </h3>

              <div className="space-y-4">
                {[
                  'Passenger & Capsule Lifts',
                  'Hospital Stretcher Lifts',
                  'Heavy Duty Goods Lifts',
                  'Dumbwaiter Systems',
                  'Stair Lifts (Home Mobility)',
                  'Machine Room-Less (MRL) Lifts'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={18} />
                    <span className={`font-medium transition-colors ${darkPreview ? 'text-gray-300 group-hover:text-blue-400' : 'text-gray-700 group-hover:text-blue-700'}`}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className={`mt-8 pt-6 border-t ${darkPreview ? 'border-gray-800' : 'border-gray-200'}`}>
                <p className="text-xs text-gray-500 font-mono">
                  SPECIALIZATION: AI CONTROL & GREEN TECH
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section 
        className={`py-24 relative overflow-hidden transition-colors duration-300
        ${darkPreview ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'}`} 
      >
        <div className="absolute inset-0 opacity-10" 
             style={{ backgroundImage: 'radial-gradient(#4b5563 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold">Certifications & Compliance</h2>
              <p className="text-gray-400 mt-2 text-sm uppercase tracking-widest">Authorized & Verified</p>
            </div>
          </Reveal>

          {/* RESPONSIVE: grid-cols-1 on mobile, md:grid-cols-2 on tablet+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CARD 1 */}
            <Reveal delay={0.1}>
              <div className={`border p-8 rounded-lg flex flex-col sm:flex-row items-start gap-6 hover:border-blue-500 transition-colors duration-300
                ${darkPreview 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-gray-200 shadow-sm'
                }`}>
                
                <div className={`p-3 rounded-md border shrink-0 ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                   <Award className="text-yellow-500" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Quality Management System</p>
                   <h3 className={`text-xl font-bold tracking-wide ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                     ISO 9001:2015 Certified
                   </h3>
                   <div 
                    className={`mt-3 inline-block px-2 py-0.5 rounded text-xs border ${
                      darkPreview 
                        ? 'bg-yellow-900/30 border-yellow-800 text-yellow-500' 
                        : 'bg-yellow-50 border-yellow-200 text-yellow-700'
                    }`}
                  >
                    International Standard
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CARD 2 */}
            <Reveal delay={0.2}>
              <div className={`border p-8 rounded-lg flex flex-col sm:flex-row items-start gap-6 hover:border-blue-500 transition-colors duration-300
                ${darkPreview 
                  ? 'bg-gray-900 border-gray-800' 
                  : 'bg-white border-gray-200 shadow-sm'
                }`}>
                
                <div className={`p-3 rounded-md border shrink-0 ${darkPreview ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-100'}`}>
                   <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Statutory Approval</p>
                   <h3 className={`text-xl font-bold tracking-wide ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                     Govt. of Karnataka
                   </h3>
                   <p className="text-sm text-gray-400 mt-1">Authorized for Elevator Installation & Services</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL STANDARDS ================= */}
      <section className={`py-24 transition-colors duration-300 ${darkPreview ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className={`text-3xl font-bold mb-12 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              Why Choose PowerBird?
            </h2>
          </Reveal>

          {/* RESPONSIVE: grid-cols-1 on mobile, md:grid-cols-3 on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Advanced Safety',
                desc: 'Equipped with Automatic Rescue Devices (ARD) and Multi-beam door sensors (10mm-1580mm range) to ensure passenger safety at all times.',
                icon: <ShieldCheck size={32} />,
                color: 'text-red-600'
              },
              {
                title: '70% Energy Saving',
                desc: 'Our Permanent Magnet (PM) Motors and LED lighting systems reduce power consumption by approx. 70% compared to traditional systems.',
                icon: <Leaf size={32} />,
                color: 'text-green-600'
              },
              {
                title: 'Smart Technology',
                desc: 'We use AI-driven group control systems and Variable Voltage Variable Frequency (VVVF) drives for smooth, seamless, and jerk-free operation.',
                icon: <Cpu size={32} />,
                color: 'text-blue-600'
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className={`group border p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300
                  ${darkPreview 
                    ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                    : 'bg-white border-gray-200'
                  }`}>
                  
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${item.color} p-3 rounded-lg border border-transparent transition-all
                      ${darkPreview 
                        ? 'bg-gray-800 group-hover:bg-gray-700 group-hover:border-gray-600' 
                        : 'bg-gray-50 group-hover:bg-white group-hover:border-gray-200'
                      }`}>
                      {item.icon}
                    </div>
                    <span className={`text-4xl font-bold transition-colors
                      ${darkPreview ? 'text-gray-800 group-hover:text-gray-700' : 'text-gray-100 group-hover:text-gray-200'}`}>
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className={`text-xl font-bold mb-3 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                    {item.title}
                  </h3>

                  <p className={`leading-relaxed text-sm ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}