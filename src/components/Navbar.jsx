import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import "./components_css/Navbar.css";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close dropdown when a link inside is clicked
  function handleLinkClick() {
    setIsDropdownOpen(false);
  }

  return (
    <nav>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <img src="/logo.svg" alt="MIT Bengaluru Logo" />
        </Link>
      </div>

      {/* Navigation Links - The extra <ul> wrapper is removed here */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>

        {/* Societies Dropdown */}
        <li style={{ position: "relative" }} ref={dropdownRef}>
          <button
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            className="dropdown-button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Societies
          </button>

          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/societies/antenna-propagation" onClick={handleLinkClick}>
                  Antenna and Propagation
                </Link>
              </li>
              <li>
                <Link to="/societies/cis" onClick={handleLinkClick}>
                  CIS
                </Link>
              </li>
              <li>
                <Link to="/societies/cs" onClick={handleLinkClick}>
                  CS
                </Link>
              </li>
              <li>
                <Link to="/societies/grss" onClick={handleLinkClick}>
                  GRSS
                </Link>
              </li>
              <li>
                <Link to="/societies/photonics" onClick={handleLinkClick}>
                  Photonics
                </Link>
              </li>
              <li>
                <Link to="/societies/ras" onClick={handleLinkClick}>
                  RAS
                </Link>
              </li>
              <li>
                <Link to="/societies/vts" onClick={handleLinkClick}>
                  VTS
                </Link>
              </li>

              <li className="dropdown-divider">Affinities</li>

              <li>
                <Link to="/societies/women-in-engineering" onClick={handleLinkClick}>
                  Women in Engineering
                </Link>
              </li>
            </ul>
          )}
        </li>

        <li>
          <Link to="/membership">Membership</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>
    </nav>
  );
}