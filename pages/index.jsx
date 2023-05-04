// Importing required modules
import Image from "next/image";
import Link from "next/link";

// Defining the main component
export default function Main() {
  // Render the component
  return (
    // Main section with classes and styles
    <section className="text-gray-600 body-font bg-gray-100 h-[100vh] overflow-hidden">
      {/* A container for holding the main content */}
      <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        {/* The left column that holds the text */}
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
          {/* The main heading */}
          <h1 className="mb-5 sm:text-6xl text-5xl items-center Avenir xl:w-2/2 text-gray-900">
            Track your workout in Style with some clicks
          </h1>
          {/* The subheading */}
          <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            Routines is a tool you can use to create your own personal workout routines <br/>
            Keep track of your custom workout routines and achieve your fitness goals. <br/>
            Developed in Next.js and styled with Tailwind CSS
          </p>
          {/* A button that links to the login page */}
          <div className="flex justify-center">
            <Link
              className="inline-flex items-center px-5 py-3 mt-2 font-medium text-white transition duration-500 ease-in-out transform bg-transparent border rounded-lg bg-gray-900"
              href="/login"
            >
              <span className="justify-center text-blue-500">Get Started with Routines</span>
            </Link>
          </div>
        </div>
        {/* The right column that holds the image */}
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10 hidden md:block">
          {/* An image of a person working out */}
          <Image
            className="w-80 md:ml-1 ml-24 "
            alt="workout"
            src="/images/home2.png"
            width={500}
            height={450}
            // layout="responsive"
          ></Image>
        </div>
      </div>
    </section>
  );
}
