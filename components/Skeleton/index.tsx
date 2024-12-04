import React from "react";
import "./skeleton.css";

interface SkeletonProps {
    width: string;
    height: string;
}

const Skeleton: React.FC<SkeletonProps> = ({width, height}) => {
    return (
        <div style={{width: width, height: height} as React.CSSProperties} className="skeleton skeleton-outer">
            <div className="skeleton-inner"></div>
        </div>
    );
}

export default Skeleton;