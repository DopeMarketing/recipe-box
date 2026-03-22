import Link from 'next/link'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-orange-600">Recipe Box</h1>
          <div className="space-x-4">
            <Link href="/login" className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Your Digital Recipe Collection
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Store, categorize, and manage all your favorite recipes in one place. 
            Never lose track of that perfect family recipe or amazing dish you discovered online.
          </p>
          <Link 
            href="/signup" 
            className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Get Started Free
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Easy Recipe Entry</h3>
            <p className="text-gray-600">
              Quickly add recipes manually with ingredients and step-by-step instructions. 
              Upload photos to make your collection visually appealing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Organization</h3>
            <p className="text-gray-600">
              Categorize recipes by cuisine, meal type, or create custom tags. 
              Find exactly what you're looking for in seconds.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-4">Powerful Search</h3>
            <p className="text-gray-600">
              Search across recipe titles, ingredients, and instructions. 
              Find that perfect dish based on what you have in your kitchen.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to organize your recipes?</h3>
          <p className="text-gray-600 mb-6">
            Join thousands of home cooks who have already digitized their recipe collections.
          </p>
          <Link 
            href="/signup" 
            className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
          >
            Start Your Recipe Box
          </Link>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Recipe Box. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}