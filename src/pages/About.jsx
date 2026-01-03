import Reveal from '../components/Reveal'
import { 
  Building2, 
  FileText, 
  ShieldCheck, 
  Cpu, 
  Clock, 
  CheckCircle2,
  Briefcase,
  Leaf,
  Award
} from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white">

      {/* ================= HERO ================= */}
      <section className="bg-gray-950 text-white border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <Reveal>
            <h1 className="text-4xl font-bold">
              About <span className="text-blue-500">PowerBird Elevators</span>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-gray-300 text-lg leading-relaxed">
              The <span className="text-blue-400 font-semibold">MPWAY</span> to Safety and Quality. 
              We are an ISO 9001:2015 Certified Company authorized by the Government of Karnataka, 
              delivering advanced vertical transportation solutions.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= CORPORATE PROFILE ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          <Reveal>
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-xs font-mono text-gray-600 mb-6">
                 <Building2 size={14} /> COMPANY PROFILE
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                25 Years of Engineering Excellence
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                Utilizing advanced technological prowess, PowerBird has remained a top elevator supplier 
                in the vertical transportation market. Our creative, innovative spirit is represented 
                by the production of elevator group-control systems that use <strong>artificial intelligence technologies</strong>.
              </p>

              <p className="text-gray-600 leading-relaxed border-l-4 border-blue-500 pl-6 italic">
                "We understand our responsibilities as a good corporate citizen and continue to implement 
                measures for protecting the environment and ensuring a sustainable society for future generations."
              </p>

              <div className="mt-8 flex gap-8">
                 <div className="flex flex-col">
                    <span className="text-4xl font-bold text-gray-900">25+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Years Experience</span>
                 </div>
                 <div className="w-px bg-gray-300 h-12"></div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-bold text-gray-900">20+</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Cities Covered</span>
                 </div>
                 <div className="w-px bg-gray-300 h-12"></div>
                 <div className="flex flex-col">
                    <span className="text-4xl font-bold text-gray-900">24/7</span>
                    <span className="text-xs uppercase tracking-wider text-gray-500 mt-1">Emergency Service</span>
                 </div>
              </div>
            </div>
          </Reveal>

          {/* ================= CAPABILITIES CARD ================= */}
          <Reveal delay={0.2}>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full pointer-events-none"></div>

              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center gap-2">
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
                    <span className="text-gray-700 font-medium group-hover:text-blue-700 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-xs text-gray-500 font-mono">
                  SPECIALIZATION: AI CONTROL & GREEN TECH
                </p>
              </div>
            </div>
          </Reveal>

        </div>
      </section>

      {/* ================= STATUTORY DETAILS (Technical Look) ================= */}
      <section className="py-24 bg-gray-950 text-white relative overflow-hidden">
        {/* Subtle grid bg */}
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* CARD 1: ISO CERTIFICATION */}
            <Reveal delay={0.1}>
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg flex items-start gap-6 hover:border-blue-500 transition-colors duration-300">
                <div className="bg-gray-800 p-3 rounded-md border border-gray-600">
                   <Award className="text-yellow-500" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Quality Management System</p>
                   <h3 className="text-xl font-bold text-white tracking-wide">ISO 9001:2015 Certified</h3>
                   <div className="mt-3 inline-block px-2 py-0.5 bg-yellow-900/30 border border-yellow-800 rounded text-xs text-yellow-500">
                     International Standard
                   </div>
                </div>
              </div>
            </Reveal>

            {/* CARD 2: GOVT AUTHORIZATION */}
            <Reveal delay={0.2}>
              <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg flex items-start gap-6 hover:border-blue-500 transition-colors duration-300">
                <div className="bg-gray-800 p-3 rounded-md border border-gray-600">
                   <FileText className="text-blue-400" size={24} />
                </div>
                <div>
                   <p className="text-xs text-gray-500 font-mono uppercase mb-1">Statutory Approval</p>
                   <h3 className="text-xl font-bold text-white tracking-wide">Govt. of Karnataka</h3>
                   <p className="text-sm text-gray-400 mt-1">Authorized for Elevator Installation & Services</p>
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= OPERATIONAL STANDARDS (Values) ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose PowerBird?
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="group border border-gray-200 p-8 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${item.color} bg-gray-50 p-3 rounded-lg group-hover:bg-white border border-transparent group-hover:border-gray-200 transition-all`}>
                      {item.icon}
                    </div>
                    <span className="text-4xl font-bold text-gray-100 group-hover:text-gray-200 transition-colors">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-sm">
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