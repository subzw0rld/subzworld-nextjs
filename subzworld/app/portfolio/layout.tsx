import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
    title: "Subzworld - My Portfolio",
    description: "My portfolio, A deeper dive into my professional background, career highlights etc",
  };

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;