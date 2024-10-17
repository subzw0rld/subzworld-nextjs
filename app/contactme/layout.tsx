import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
    title: "Subzworld - Contact Me",
    description: "Ways of connecting with me",
  };

const Layout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <>
            {children}
        </>
    );
};

export default Layout;