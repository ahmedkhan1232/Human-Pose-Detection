// app/Header/Header.tsx

import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 bg-gradient-to-br from-[#63B3ED] via-white to-[#EDF2F7] text-white p-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-blue-800 hover:text-blue-600 transition duration-300">
          <Link href="/" className="text-black hover:text-blue-500">
            <h1 className="tracking-wider">Pose Detection</h1>
          </Link>
        </div>
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/pose-detection" className="text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
                Detect Your Pose
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
                Exercises Guide
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-black hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-105">
                Contact
              </Link>
            </li>
          </ul>
          <div className="space-x-6">
            <Link href="/login">
              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
                Login
              </button>
            </Link>
            <Link href="/signup">
              <button className="bg-blue-500 hover:bg-white text-white hover:text-blue-500 font-semibold py-2 px-6 rounded-full shadow-md transition duration-300">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
