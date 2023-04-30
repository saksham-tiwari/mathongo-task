import Link from "next/link"
const HomePage = () => (
  <div className="min-h-screen bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center py-24">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Workout Tracker
        </h1>
        <p className="text-gray-600">
          Keep track of your custom workout routines and achieve your fitness goals.
        </p>
        <div className="mt-8">
          <Link href="/login" className="text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-md shadow">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
