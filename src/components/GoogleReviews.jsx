import { motion } from 'framer-motion'
import Reveal from './Reveal' 
import { Star, CheckCircle2 } from 'lucide-react'

// ==========================================
// 📝 DATA CONFIGURATION
// ==========================================
const reviewData = {
  rating: 4.9,
  totalReviews: 400, // You can update this number dynamically if needed
  // 🔥 FIX: Replaced broken link with the real Google Maps Place Link
  readMoreLink: "https://www.google.com/maps/place/?q=place_id:ChIJGWiJT-2vvjsRLLhSwZteMYc",
  // 🔥 FIX: Direct link to the "Write a Review" dialog
  writeReviewLink: "https://search.google.com/local/writereview?placeid=ChIJGWiJT-2vvjsRLLhSwZteMYc",

  reviews: [
    {
      name: "Vinayak",
      date: "7 months ago",
      text: "We had a great experience with Powerbird Elevators. The team was professional, punctual, and very knowledgeable. From the initial consultation to the final installation, everything was handled smoothly. The lift works perfectly.",
      initial: "V"
    },
    {
      name: "Nehal M",
      date: "9 months ago",
      text: "Excellent Service and Top-Quality Elevators. Power Bird Elevators provides outstanding service with the highest level of professionalism. Highly recommended!",
      initial: "N"
    },
    {
      name: "Arun Pavar",
      date: "6 months ago",
      text: "Best lift service in Sirsi city. They are professional and provide a timely response for any breakdown. The staff and owner are very humble. I am very satisfied with their service.",
      initial: "A"
    },
    {
      name: "Lohit Sutakoti",
      date: "9 months ago",
      text: "We have been using their lifts for the last 5 years, and they still feel brand new. Easy access, low maintenance, and excellent team coordination.",
      initial: "L"
    },
    {
      name: "Manjunath Kamadally",
      date: "9 months ago",
      text: "Quality materials and excellent work finish completed within the promised timeframe. The maintenance team also does a great job.",
      initial: "M"
    },
    {
      name: "Sagar Ranebennur",
      date: "9 months ago",
      text: "Excellent service by Powerbird Elevators. One of the best service providers in the Uttara Kannada district. Everyone must try them.",
      initial: "S"
    },
    {
      name: "Nagaraj Naik",
      date: "6 years ago",
      text: "100% quality product, 24x7 services available, and total customer satisfaction.",
      initial: "N"
    },
    {
      name: "Ashok Yaddagirri",
      date: "9 months ago",
      text: "Popular and the best elevator company in Karwar, Uttara Kannada.",
      initial: "A"
    },
    {
      name: "Darshan Naik",
      date: "9 months ago",
      text: "Excellent working nature and very good service.",
      initial: "D"
    },
    {
      name: "Karthik Acharya",
      date: "9 months ago",
      text: "Smart Lifts for a Smarter Future. Great experience with Powerbird Elevator.",
      initial: "K"
    }
  ]
}

export default function GoogleReviews() {
  // Light Mode Only Colors
  const bgColor = 'bg-gray-50';
  const textColor = 'text-gray-900';
  const cardBg = 'bg-white border-gray-200 shadow-sm';
  const mutedText = 'text-gray-500';
  const reviewText = 'text-gray-700';
  const borderColor = 'border-gray-100';

  // Create infinite loop array
  const infiniteReviews = [...reviewData.reviews, ...reviewData.reviews];

  return (
    <section className={`py-12 ${bgColor} ${textColor} overflow-hidden`}>
      <div className="max-w-7xl mx-auto px-6 mb-12">

        {/* ================= HEADER / SUMMARY ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Reveal>
            <div className="flex items-center gap-4">
              {/* Google Icon Container */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100 p-3">
                 <img 
                   src="/google/google.webp" 
                   alt="Google" 
                   className="w-full h-full object-contain"
                 />
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl">{reviewData.rating}</span>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        fill="currentColor"
                        className={i >= Math.floor(reviewData.rating) ? "opacity-30" : ""}
                      />
                    ))}
                  </div>
                </div>
                <p className={`text-sm ${mutedText}`}>
                  Excellent based on <span className={`font-semibold ${textColor}`}>{reviewData.totalReviews} Reviews across the Web</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex gap-3">
              <a
                href={reviewData.readMoreLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 rounded-lg font-semibold text-sm transition border bg-white border-gray-200 hover:bg-gray-50 text-gray-700"
              >
                Read Reviews
              </a>
              <a
                href={reviewData.writeReviewLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg font-semibold text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-900/20"
              >
                Rate Us
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* ================= INFINITE SCROLL TRACK ================= */}
      <div className="relative w-full overflow-hidden mask-gradient">
         {/* Fade edges */}
         <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-gray-50 to-transparent" />
         <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-gray-50 to-transparent" />

        <motion.div 
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 60, 
          }}
          whileHover={{ animationPlayState: 'paused' }} 
          style={{ cursor: 'grab' }}
        >
          {infiniteReviews.map((review, index) => (
            <div 
              key={index} 
              className={`
                shrink-0 w-[350px] md:w-[400px] 
                ${cardBg} p-6 rounded-xl border transition-all hover:border-blue-500 flex flex-col
              `}
            >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                      {review.initial}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{review.name}</p>
                      <p className={`text-xs ${mutedText}`}>{review.date}</p>
                    </div>
                  </div>
                  <img
                    src="/google/google.webp"
                    alt="Google"
                    className="w-5 h-5 object-contain"
                  />
                </div>

                {/* Stars */}
                <div className="flex text-yellow-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Text */}
                <p className={`${reviewText} text-sm leading-relaxed mb-4 flex-grow italic`}>
                  "{review.text}"
                </p>

                {/* Verified */}
                <div className={`pt-4 border-t flex items-center gap-1.5 text-xs text-green-600 font-medium ${borderColor}`}>
                  <CheckCircle2 size={14} />
                  Verified Customer
                </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}