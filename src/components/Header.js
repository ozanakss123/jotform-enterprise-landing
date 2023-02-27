import { useState } from "react";

import { Turn as Hamburger } from "hamburger-react";
import { BiChevronDown } from "react-icons/bi";

function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="header-container">
        <div class="header-logo-side">
          <div class="logo-wrapper">
            <svg
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 367 66"
              class="logo"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M256.78 50.67a8.46 8.46 0 01-6.05-2.44c-1.6-1.6-2.68-4.03-2.68-7.31 0-3.32 1.08-5.74 2.68-7.34a8.47 8.47 0 016.05-2.4c2.28 0 4.45.8 6.05 2.4 1.6 1.6 2.67 4.02 2.67 7.34 0 3.32-1.07 5.74-2.67 7.34a8.47 8.47 0 01-6.05 2.4zm0-30.1c-11.58 0-20.35 8.52-20.35 20.35 0 11.75 8.77 20.35 20.35 20.35 11.58 0 20.35-8.6 20.35-20.35 0-11.83-8.77-20.35-20.35-20.35zM160.5 50.95a8.46 8.46 0 01-6.05-2.44c-1.6-1.6-2.67-4.02-2.67-7.3 0-3.32 1.08-5.75 2.67-7.34a8.47 8.47 0 016.06-2.41c2.28 0 4.45.81 6.05 2.4 1.6 1.6 2.67 4.03 2.67 7.34 0 3.32-1.08 5.75-2.67 7.34a8.47 8.47 0 01-6.06 2.41zm0-30.1c-11.57 0-20.34 8.53-20.34 20.35 0 11.76 8.77 20.35 20.34 20.35 11.58 0 20.35-8.6 20.35-20.35 0-11.82-8.77-20.34-20.34-20.34zM308.77 61.14h11.55V38.2c0-1.9.6-3.55 1.64-4.71a5.9 5.9 0 014.56-1.9c2.08 0 3.5.7 4.41 1.76.93 1.08 1.4 2.65 1.4 4.55v23.24h11.48V38.2c0-1.85.6-3.5 1.64-4.69a5.78 5.78 0 014.48-1.92c2.13 0 3.54.7 4.44 1.76.92 1.08 1.38 2.65 1.38 4.55v23.24H367v-25.3c0-5.17-1.7-8.94-4.39-11.4-2.67-2.45-6.23-3.54-9.8-3.54-2.55 0-4.88.44-6.97 1.49-1.79.9-3.36 2.22-4.74 4.06-2.23-3.63-6.3-5.55-11.1-5.55-3.52 0-7.57 1.4-10.13 4.1v-3.16h-11.1v39.3zM304.42 21.87v11.77l-.9-.18c-1.07-.21-2-.29-2.86-.29-2.45 0-4.63.6-6.19 2.06-1.55 1.45-2.62 3.86-2.62 7.74v18.17h-11.52v-39.3h11.22v3.8c2.77-3.34 7.08-4 9.79-4 .86 0 1.65.09 2.4.16l.68.07zM96.72 42.2h11.26l.13.13c.08.08.14.2.15.33a7.98 7.98 0 002.64 5.57 8 8 0 005.26 1.8 7.3 7.3 0 005.65-2.39 8.91 8.91 0 002.03-5.98V8.74h12.18V42c0 10.65-8.15 19.55-19.78 19.55-5.8 0-10.68-1.93-14.1-5.28-3.34-3.27-5.33-7.94-5.42-13.62v-.45zM234.8 14.07l.64.19V5.34l-.3-.13a8.63 8.63 0 00-2.01-.53c-.85-.14-1.85-.23-2.87-.23-3.97 0-8.43 1.32-10.74 3.69-2.31 2.36-3.59 5.73-3.59 9.77v1.88h-5.8v10.24h5.8v31.11h11.65V30.03h7.86V19.79h-7.86v-1.74c0-1.81.63-2.86 1.44-3.46a4.92 4.92 0 012.94-.85c1.5 0 2.38.2 2.84.33zM205.96 51.95l.6-.19v8.95l-.28.14c-.42.2-1.1.39-1.89.53-.8.13-1.73.22-2.7.22-3.72 0-7.9-1.32-10.07-3.7-2.17-2.37-3.37-5.75-3.37-9.8V30.03h-5.45V19.84h5.45V8.8h10.93v11.05h7.38v10.2h-7.38v17.91c0 1.82.6 2.87 1.36 3.48.78.63 1.81.85 2.76.85 1.41 0 2.23-.2 2.66-.33z"
                fill="#0A1551"
              ></path>
              <path
                d="M16.43 62.73c1.24 1.2.36 3.27-1.4 3.27H3.95A3.9 3.9 0 010 62.16V51.44c0-1.72 2.13-2.57 3.38-1.36l13.05 12.65z"
                fill="#0A1551"
              ></path>
              <path
                d="M33.72 63.56a8.3 8.3 0 010-11.78l11.82-11.74a8.42 8.42 0 0111.86 0 8.3 8.3 0 010 11.78L45.58 63.56a8.42 8.42 0 01-11.86 0z"
                fill="#FFB629"
              ></path>
              <path
                d="M2.5 34.05a8.3 8.3 0 010-11.78L22.39 2.5a8.42 8.42 0 0111.86 0 8.3 8.3 0 010 11.78l-19.9 19.77a8.42 8.42 0 01-11.85 0z"
                fill="#09F"
              ></path>
              <path
                d="M18.76 48.15a8.3 8.3 0 010-11.78l26.87-26.7a8.42 8.42 0 0111.86 0 8.3 8.3 0 010 11.78l-26.87 26.7a8.42 8.42 0 01-11.86 0z"
                fill="#FF6100"
              ></path>
            </svg>
          </div>
          <p class="header-title">Enterprise</p>
        </div>
        <div className="hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} size={24} rounded />
          <ul className={isOpen ? "show-nav-menu" : "hide-nav-menu"}>
            <li className="mobile-list-item">Teams</li>
            <li className="mobile-list-item">Pricing</li>
            <li className="mobile-list-item">Security</li>
            <li className="mobile-list-item arrow">
              <div className="list-item-expand">
                <p>Features</p>
                <div className="list-item-arrow">
                  <BiChevronDown className="down-icon" />
                </div>
              </div>
            </li>
            <li className="mobile-list-item arrow">
              <div className="list-item-expand">
                <p>Solutions</p>
                <div className="list-item-arrow">
                  <BiChevronDown className="down-icon" />
                </div>
              </div>
            </li>
            <li className="mobile-list-item arrow">
              <div className="list-item-expand">
                <p>Resources</p>
                <div className="list-item-arrow">
                  <BiChevronDown className="down-icon" />
                </div>
              </div>
            </li>
            <li className="mobile-contact-btn">
              <a href="#">Contact Sales</a>
            </li>
          </ul>
        </div>
        <div className="header-nav">
          <ul>
            <li className="header-nav-item">Teams</li>
            <li className="header-nav-item">Pricing</li>
            <li className="header-nav-item">Security</li>
            <li className="header-nav-item">
                <div className="header-nav-item-dropdown">
                    <p>Features</p>
                    <BiChevronDown className="down-icon" />
                </div>
            </li>
            <li className="header-nav-item">
                <div className="header-nav-item-dropdown">
                    <p>Solutions</p>
                    <BiChevronDown className="down-icon" />
                </div>
            </li>
            <li className="header-nav-item">
                <div className="header-nav-item-dropdown">
                    <p>Resources</p>
                    <BiChevronDown className="down-icon" />
                </div>
            </li>
            <li className="header-nav-item">
                <a href="#" className="btn">Get a Demo</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;