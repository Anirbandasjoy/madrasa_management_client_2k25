'use client'
import Footer from "@/components/layout/shared/Footer";
import Navbar from "@/components/layout/shared/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {

  const pathname = usePathname();

  return (
    <main lang="en">

      {pathname !== "/" && <Navbar pageName={pathname.split('/')} />}
      
      {children}
      <Footer/>
    </main>
  );
}
