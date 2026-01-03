import Reveal from './Reveal'
import { Star, CheckCircle2 } from 'lucide-react'

// ==========================================
// 📝 UPDATE YOUR REVIEW DATA HERE
// ==========================================
const reviewData = {
  rating: 4.9,
  totalReviews: 400,
  readMoreLink: "#",
  writeReviewLink: "#",

  reviews: [
    {
      name: "Rajesh Kumar",
      date: "2 months ago",
      text: "PowerBird transformed our 15-year-old lift. It is silent and smooth now. The team was professional and finished on time.",
      initial: "R"
    },
    {
      name: "Dr. Anjali Desai",
      date: "1 month ago",
      text: "Safety was my priority for patients. Their stretcher lift installation was flawless and the AMC service is very responsive.",
      initial: "A"
    },
    {
      name: "Venkatesh Builders",
      date: "3 weeks ago",
      text: "We have used PowerBird for 3 of our sites. Technically sound team and competitive pricing. Highly recommended.",
      initial: "V"
    }
  ]
}

export default function GoogleReviews({ darkPreview = true }) {
  // 🔥 FIX: Using darkPreview prop to control theme colors
  // If no prop is passed, it defaults to true (Dark Theme) to match your previous hardcoded style.
  
  const bgColor = darkPreview ? 'bg-gray-950' : 'bg-gray-50';
  const textColor = darkPreview ? 'text-white' : 'text-gray-900';
  const cardBg = darkPreview ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200 shadow-sm';
  const mutedText = darkPreview ? 'text-gray-400' : 'text-gray-500';
  const reviewText = darkPreview ? 'text-gray-300' : 'text-gray-700';

  return (
    // 🔥 FIX: Reduced padding to py-12 to minimize white space issues
    <section className={`py-12 ${bgColor} ${textColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADER / SUMMARY ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <Reveal>
            <div className="flex items-center gap-4">
              {/* Google Icon */}
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <svg className="w-7 h-7" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z" />
                  <path fill="#EA4335" d="M12 4.6c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 1.09 14.97 0 12 0 7.7 0 3.99 2.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
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
                  Excellent based on <span className={`font-semibold ${textColor}`}>{reviewData.totalReviews} Reviews</span>
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
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm transition border ${
                  darkPreview 
                    ? 'bg-gray-800 border-gray-700 hover:bg-gray-700 text-white' 
                    : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                }`}
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

        {/* ================= REVIEW CARDS ================= */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviewData.reviews.map((review, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className={`${cardBg} p-6 rounded-xl border transition-all hover:border-blue-500 h-full flex flex-col`}>

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
                    src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                    alt="Google"
                    className="w-5 h-5 opacity-50 grayscale hover:grayscale-0 transition-all"
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
                <div className={`pt-4 border-t flex items-center gap-1.5 text-xs text-green-600 font-medium ${darkPreview ? 'border-gray-800' : 'border-gray-100'}`}>
                  <CheckCircle2 size={14} />
                  Verified Customer
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}