import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-black shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex-shrink-0 ">
        <Link href="/">
          <img src="/logo.svg" alt="Proper Tee Logo" className="h-15 w-auto" />
        </Link>
      </div>

      {/* Navigation links in the center */}
      <div className="flex space-x-8">
        <Link
          href="/shop"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Tøj
        </Link>
        <Link
          href="/popular"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Mest Populære
        </Link>
        <Link
          href="/service"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Service
        </Link>
        <Link
          href="/about"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Om Os
        </Link>
      </div>

      {/* Right side: Contact button and cart */}
      <div className="flex items-center space-x-4">
        <button className="bg-red-500 text-black px-4 py-2 rounded hover:bg-red-600 transition-colors">
          Kontakt Os
        </button>
        <div className="bg-red-500 rounded-full p-2">
          <svg
            className="w-6 h-6 text-black"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13v8a2 2 0 002 2h10a2 2 0 002-2v-3"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
}
