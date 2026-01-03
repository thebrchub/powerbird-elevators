import Reveal from './Reveal' // Adjust path if needed
import { Quote, CheckCircle2, Star } from 'lucide-react'

export default function ClientFeedback({ darkPreview }) {
  
  const reviews = [
    {
      name: 'Rajesh Kumar',
      role: 'Apartment Secretary',
      text: 'PowerBird transformed our 15-year-old lift. It used to break down weekly, but now it is silent and smooth. The team was very professional.',
      stars: 5
    },
    {
      name: 'Dr. Anjali Desai',
      role: 'Clinic Owner',
      text: 'The stretcher lift installation was flawless. What impressed me most was their AMC service—they respond within 2 hours whenever we call.',
      stars: 5
    },
    {
      name: 'Venkatesh Builders',
      role: 'Construction Firm',
      text: 'Technically sound team and competitive pricing. We have partnered with them for our last 3 projects and the execution is always on time.',
      stars: 5
    }
  ]

  return (
    <section 
      className={`py-24 relative overflow-hidden transition-colors duration-300 ${
        darkPreview ? 'bg-gray-950 text-white' : 'bg-gray-50 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-16">
          <Reveal>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-px w-8 bg-blue-600"></span>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Testimonials</span>
            </div>
            <h2 className={`text-3xl md:text-4xl font-bold ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
              What Our Clients Say
            </h2>
          </Reveal>
        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div 
                className={`
                  h-full p-8 rounded-[2rem] border transition-all duration-300 flex flex-col group
                  hover:-translate-y-2
                  ${darkPreview 
                    ? 'bg-gray-900 border-gray-800 hover:border-blue-500/50' 
                    : 'bg-white border-gray-100 shadow-lg shadow-gray-200/50 hover:shadow-xl'
                  }
                `}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6 text-yellow-500">
                  {[...Array(review.stars)].map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>

                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote 
                    size={40} 
                    className={`transform transition-transform duration-500 group-hover:scale-110 ${
                      darkPreview ? 'text-blue-500/20' : 'text-blue-100'
                    }`} 
                  />
                </div>
                
                {/* Text */}
                <p className={`text-lg leading-relaxed flex-grow mb-8 font-medium ${darkPreview ? 'text-gray-300' : 'text-gray-600'}`}>
                  "{review.text}"
                </p>
                
                {/* Author Info */}
                <div 
                  className={`
                    flex items-center gap-3 pt-6 border-t 
                    ${darkPreview ? 'border-gray-800' : 'border-gray-100'}
                  `}
                >
                  {/* Avatar Placeholder (Initials) */}
                  <div className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm
                    ${darkPreview ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-600'}
                  `}>
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <span className={`font-bold block ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
                      {review.name}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className={`text-xs ${darkPreview ? 'text-gray-500' : 'text-gray-400'}`}>
                        {review.role}
                      </span>
                      <CheckCircle2 size={12} className="text-green-500" />
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}