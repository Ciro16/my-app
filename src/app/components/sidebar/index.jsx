import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { forwardRef } from "react";

const SideBar = forwardRef(function SideBar (props, ref) {
  const pathname = usePathname()

  const isHomePage = pathname === '/dashboard'
  const isTestPage = pathname === '/dashboard/test'

  return (
    <div className="fixed md:static -translate-x-full transition-[transform] duration-500 md:transform-none md:w-1/5" ref={ref}>
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item as={Link} href="/dashboard" active={isHomePage} icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/dashboard/test" active={isTestPage} icon={HiViewBoards} label="Pro" labelColor="dark">
              Kanban
            </Sidebar.Item>
            <Sidebar.Item as={Link} href="/" icon={HiInbox} label="3">
              Inbox
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
})

export default SideBar