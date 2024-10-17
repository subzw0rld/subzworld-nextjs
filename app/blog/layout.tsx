import { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
    title: "Subzworld - Blog",
    description: "My Blog, a collection of my journey and my learnings",
  };

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;