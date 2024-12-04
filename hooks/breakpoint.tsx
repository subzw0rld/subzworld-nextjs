import { useEffect, useState } from 'react';

const useBreakpoint = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 960);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
};

export default useBreakpoint;