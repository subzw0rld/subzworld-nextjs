import React from "react";
import "./hero-banner.css";
import Image from "next/image";

interface HeroBannerProps {
  title: string;
  backgroundImage: string;
  mobileImage: string;
}

/**
 * HeroBanner component displays a banner with a title and responsive images.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title text to display on the banner
 * @param {string} props.backgroundImage - The URL of the background image for larger screens
 * @param {string} props.mobileImage - The URL of the background image for mobile screens
 * @returns {JSX.Element} The rendered HeroBanner component
 */
const HeroBanner: React.FC<HeroBannerProps> = ({ title, backgroundImage, mobileImage }) => {
  return (
    <div className="hero-banner">
      <picture>
      <source media="(max-width: 960px)" srcSet={mobileImage} />
        <Image
          src={backgroundImage}
          alt={title}
          width={2880}
          height={433}
          layout="responsive"
          priority
        />
      </picture>
      <h1>{title}</h1>
    </div>
  );
};

export default HeroBanner;
