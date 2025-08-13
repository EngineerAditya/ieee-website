import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLinkClick() {
    setIsDropdownOpen(false);
  }

  return (
    <>
      {/* Full width invisible container */}
      <div className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
        {/* Floating navbar box */}
        <nav className="max-w-6xl mx-auto backdrop-blur-md bg-white/10 border border-white/20 shadow-lg px-6 py-3 flex justify-between items-center rounded-lg">
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <img src="/logo.svg" alt="MIT Bengaluru Logo" className="h-12" />
            </Link>
          </div>

          {/* Navigation */}
          <ul className="flex items-center gap-6 text-white">
            <li>
              <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-gray-300 transition-colors">Events</Link>
            </li>

            {/* Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="hover:text-gray-300 transition-colors"
              >
                Societies
              </button>
              {isDropdownOpen && (
                <ul className="absolute top-full mt-2 bg-black/80 backdrop-blur-md rounded-lg border border-white/20 shadow-lg w-56">
                  <li>
                    <Link to="/societies/antenna-propagation" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">Antenna and Propagation</Link>
                  </li>
                  <li>
                    <Link to="/societies/cis" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">CIS</Link>
                  </li>
                  <li>
                    <Link to="/societies/cs" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">CS</Link>
                  </li>
                  <li>
                    <Link to="/societies/grss" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">GRSS</Link>
                  </li>
                  <li>
                    <Link to="/societies/photonics" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">Photonics</Link>
                  </li>
                  <li>
                    <Link to="/societies/ras" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">RAS</Link>
                  </li>
                  <li>
                    <Link to="/societies/vts" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">VTS</Link>
                  </li>
                  <li className="px-4 py-2 text-sm text-gray-400 border-t border-white/20">Affinities</li>
                  <li>
                    <Link to="/societies/women-in-engineering" onClick={handleLinkClick} className="block px-4 py-2 hover:bg-white/10">Women in Engineering</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/membership" className="hover:text-gray-300 transition-colors">Membership</Link>
            </li>
            <li>
              <Link to="/articles" className="hover:text-gray-300 transition-colors">Articles</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Spacer matching the invisible container height */}
      <div className="h-[90px]"></div>
    </>
  );
}
