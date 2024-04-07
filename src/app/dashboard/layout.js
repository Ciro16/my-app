"use client";

import Header from "../components/header";
import SideBar from "../components/sidebar";
import { useRef } from "react";

export default function DashboardLayout({ children }) {
  const sidebarRef = useRef(null)

  const handelToggleSidebar = () => {
    sidebarRef.current.classList.toggle('-translate-x-full')
  }

  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen overflow-y-hidden">
          <Header />

          <button onClick={handelToggleSidebar} type="button" className="w-10 inline-flex items-center p-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>

          <div className="flex grow overflow-y-hidden">
            <SideBar ref={sidebarRef} />
            <main className="w-11/12 md:w-4/5 pl-6 md:pl-0 md:pt-8 overflow-y-scroll">
              { children }
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
