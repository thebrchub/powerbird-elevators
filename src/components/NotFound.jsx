import React from 'react'
import { Link } from 'react-router-dom'
import { AlertTriangle, Home, ArrowLeft } from 'lucide-react'

// 👇 1. Accept the darkPreview prop here
export default function NotFound({ darkPreview }) {
  return (
    // 👇 2. Use conditional logic for background instead of 'dark:' classes
    <div className={`min-h-[70vh] flex items-center justify-center px-6 py-30 transition-colors duration-300 ${
      darkPreview ? 'bg-gray-950' : 'bg-gray-50'
    }`}>
      <div className="text-center max-w-lg">
        
        {/* Icon */}
        <div className="mb-8 flex flex-col items-center">
          <div className={`p-4 rounded-full mb-4 animate-bounce ${
            darkPreview ? 'bg-blue-900/20 text-blue-500' : 'bg-blue-100 text-blue-500'
          }`}>
            <AlertTriangle size={48} />
          </div>
          <h1 className={`text-8xl font-black ${darkPreview ? 'text-gray-800' : 'text-gray-500'}`}>
            404
          </h1>
        </div>

        {/* Message */}
        <h2 className={`text-3xl font-bold mb-4 ${darkPreview ? 'text-white' : 'text-gray-900'}`}>
          Stuck between floors?
        </h2>
        <p className={`mb-8 text-lg ${darkPreview ? 'text-gray-400' : 'text-gray-600'}`}>
          The page you are looking for doesn't exist or has been moved to another level. Let's get you back on solid ground.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
          <button 
            onClick={() => window.history.back()} 
            className={`inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-lg font-medium transition-all hover:scale-105 ${
              darkPreview 
                ? 'bg-gray-800 border-gray-700 text-gray-300 hover:border-blue-500' 
                : 'bg-white border-gray-200 text-gray-700 hover:border-blue-500'
            }`}
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

      </div>
    </div>
  )
}