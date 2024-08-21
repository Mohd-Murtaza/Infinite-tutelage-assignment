import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileAndTabView, setIsMobileAndTabView] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileAndTabView(window.innerWidth <= 979);
      if (window.innerWidth > 979) {
        setIsSidebarOpen(false); // Ensure sidebar is closed when resizing to larger screen
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="navbarMainContainer">
        <div className="hamburgerAndDashboardDiv">
          {isMobileAndTabView && (
              <FiMenu className="hamburgerIcon" onClick={toggleSidebar} size={24} />
          )}
          <span>Dashboard</span>
        </div>
        <div className="navbarSearchContainer">
          <div className="navbarSearchIconAndInpDiv">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.325 2.25C11.6784 2.25 14.4 4.9716 14.4 8.325C14.4 11.6784 11.6784 14.4 8.325 14.4C4.9716 14.4 2.25 11.6784 2.25 8.325C2.25 4.9716 4.9716 2.25 8.325 2.25ZM8.325 13.05C10.9352 13.05 13.05 10.9352 13.05 8.325C13.05 5.7141 10.9352 3.6 8.325 3.6C5.7141 3.6 3.6 5.7141 3.6 8.325C3.6 10.9352 5.7141 13.05 8.325 13.05ZM14.0524 13.0979L15.9619 15.0068L15.0068 15.9619L13.0979 14.0524L14.0524 13.0979Z"
                fill="#667085"
              />
            </svg>

            <input type="text" name="" id="" placeholder="Search..." />
          </div>
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.4 12.375H15.75V13.725H2.25V12.375H3.6V7.65C3.6 6.21783 4.16893 4.84432 5.18162 3.83162C6.19432 2.81893 7.56783 2.25 9 2.25C10.4322 2.25 11.8057 2.81893 12.8184 3.83162C13.8311 4.84432 14.4 6.21783 14.4 7.65V12.375ZM13.05 12.375V7.65C13.05 6.57587 12.6233 5.54574 11.8638 4.78622C11.1043 4.0267 10.0741 3.6 9 3.6C7.92587 3.6 6.89574 4.0267 6.13622 4.78622C5.3767 5.54574 4.95 6.57587 4.95 7.65V12.375H13.05ZM6.975 15.075H11.025V16.425H6.975V15.075Z"
                fill="#667085"
              />
            </svg>
          </div>
        </div>
      </div>
      {isMobileAndTabView && (
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      )}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Navbar;
