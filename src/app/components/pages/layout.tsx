// components/Layout.tsx
'use client'
import React, { ReactNode } from "react";
import { usePathname } from "next/navigation"; // Use usePathname instead
import SubHeader from "../SubHeader";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname
  const pageTitle = pathname === "/"
    ? "Home"
    : (pathname.split("/").pop()?.replace(/-/g, " ").toLowerCase().replace(/\b\w/g, char => char.toUpperCase()) || "Default Title");
  

  return (
    <div>
      <SubHeader pageTitle={pageTitle} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
