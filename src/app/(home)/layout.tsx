// app/layout.tsx
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main lang="en">
      {children}
    </main>
  );
}
