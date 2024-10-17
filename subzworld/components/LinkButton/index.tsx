import React from 'react';
import Link from 'next/link';
import './link-button.css';

interface LinkButtonProps {
    href: string;
    children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
    return (
        <Link className='link-button' href={href}>
                {children}
        </Link>
    );
};

export default LinkButton;