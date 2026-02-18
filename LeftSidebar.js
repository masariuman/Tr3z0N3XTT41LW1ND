"use client";

import { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const LeftSidebar = ({ toogleActive }) => {
  const pathname = usePathname();

  // Enable the dark sidebar exclusively for the /dashboard/beauty-salon/ page URL.
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Only check or set the theme if we're on the beauty-salon page.
    if (pathname === "/dashboard/beauty-salon/") {
      const storedTheme = localStorage.getItem("beautySalonSidebarTheme");
      if (storedTheme) {
        setIsDark(storedTheme === "dark");
      } else {
        // Default to dark theme and persist it in localStorage
        setIsDark(true);
        localStorage.setItem("beautySalonSidebarTheme", "dark");
      }
    } else {
      // For other pages, do not use localStorage for the theme
      setIsDark(false);
    }
  }, [pathname]);

  return (
    <>
      <div
        className={`sidebar-area ${
          pathname === "/dashboard/beauty-salon/" && isDark ? "dark" : ""
        }`}
      >
        <div className="logo position-relative">
          <Link
            href="/dashboard/ecommerce/"
            className="d-block text-decoration-none position-relative"
          >
            <Image
              src="/images/logo-icon.png"
              alt="logo-icon"
              width={26}
              height={26}
            />
            <span className="logo-text fw-bold text-dark">Trezo</span>
          </Link>
          <button
            className="sidebar-burger-menu bg-transparent p-0 border-0 opacity-0 z-n1 position-absolute top-50 end-0 translate-middle-y"
            onClick={toogleActive}
          >
            <i className="material-symbols-outlined fs-24">close</i>
          </button>
        </div>

        <div className="sidebar-menu">
          <div className="menu-title small text-uppercase">
            <span className="menu-title-text">Grout Menu 1</span>
          </div>

          <div className="menu-item">
            <Link
              href="/post"
              className={`menu-link ${pathname === "/post" ? "active" : ""}`}
            >
              <i className="material-symbols-outlined">format_list_bulleted</i>
              <span className="title">Menu Klik</span>
            </Link>
          </div>
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="material-symbols-outlined">note_stack</i>
                <span className="title">Parent Polos</span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link href="/" className="menu-link">
                      Sub Menu 1
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/front-pages/features/"
                      className={`menu-link ${
                        pathname === "/front-pages/features/" ? "active" : ""
                      }`}
                    >
                      Sub Menu 2
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="material-symbols-outlined">dashboard</i>
                <span className="title">Parent Angka</span>
                <span className="count">4</span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link
                      href="/dashboard/ecommerce/"
                      className={`menu-link ${
                        pathname === "/dashboard/ecommerce/" ? "active" : ""
                      }`}
                    >
                      Sub Link Polos
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/dashboard/crm/"
                      className={`menu-link ${
                        pathname === "/dashboard/crm/" ? "active" : ""
                      }`}
                    >
                      Sub Link +Hot
                      <span className="new tag">Hot</span>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/dashboard/lms/"
                      className={`menu-link ${
                        pathname === "/dashboard/lms/" ? "active" : ""
                      }`}
                    >
                      Sub Link +Top <span className="new tag">Top</span>
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/dashboard/hotel/"
                      className={`menu-link ${
                        pathname === "/dashboard/hotel/" ? "active" : ""
                      }`}
                    >
                      Sub Link +New
                      <span className="hot tag">New</span>
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <div className="menu-title small text-uppercase">
              <span className="menu-title-text">Group Menu 2</span>
            </div>

            <div className="menu-item">
              <Link
                href="/my-profile/"
                className={`menu-link ${
                  pathname === "/my-profile/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined">account_circle</i>
                <span className="title">My Profile</span>
              </Link>
            </div>

            <Accordion.Item eventKey="30">
              <Accordion.Header>
                <i className="material-symbols-outlined">settings</i>
                <span className="title">Settings</span>
              </Accordion.Header>
              <Accordion.Body>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <Link
                      href="/settings/account-settings/"
                      className={`menu-link ${
                        pathname === "/settings/account-settings/"
                          ? "active"
                          : ""
                      }`}
                    >
                      Account Settings
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/settings/change-password/"
                      className={`menu-link ${
                        pathname === "/settings/change-password/"
                          ? "active"
                          : ""
                      }`}
                    >
                      Change Password
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/settings/connections/"
                      className={`menu-link ${
                        pathname === "/settings/connections/" ? "active" : ""
                      }`}
                    >
                      Connections
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/settings/privacy-policy/"
                      className={`menu-link ${
                        pathname === "/settings/privacy-policy/" ? "active" : ""
                      }`}
                    >
                      Privacy Policy
                    </Link>
                  </li>

                  <li className="menu-item">
                    <Link
                      href="/settings/terms-conditions/"
                      className={`menu-link ${
                        pathname === "/settings/terms-conditions/"
                          ? "active"
                          : ""
                      }`}
                    >
                      Terms & Conditions
                    </Link>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>

            <div className="menu-item">
              <Link
                href="/authentication/logout/"
                className={`menu-link ${
                  pathname === "/authentication/logout/" ? "active" : ""
                }`}
              >
                <i className="material-symbols-outlined">logout</i>
                <span className="title">Logout</span>
              </Link>
            </div>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
