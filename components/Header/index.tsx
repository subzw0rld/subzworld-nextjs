"use client";

import headerItems, { HeaderItem } from "@/helper/config/header.config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.css";
/**
 * Header component that renders the main navigation for the application.
 * It highlights the active link based on the current pathname.
 *
 * @returns {JSX.Element} The rendered header component.
 *
 * @remarks
 * This component uses the `usePathname` hook to determine the current path
 * and conditionally applies the 'active' class to the corresponding navigation link.
 *
 **/

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="subzworld-header">
      <nav className="navigation">
        <ul>
          {
            headerItems.map((item: HeaderItem, index: number) => (
              <li key={item.title + index} className={pathname === item.link ? 'active' : ''}>
                <Link href={item.link}>{item.title}</Link>
              </li>
          ))
        }
        </ul>
      </nav>
    </header>
  );
};
