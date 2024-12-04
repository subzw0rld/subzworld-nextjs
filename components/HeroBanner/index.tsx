"use client";
import Image from "next/image";
import React from "react";
import "./hero-banner.css";

interface HeroBannerProps {
  title: string;
  backgroundImage: string;
  mobileImage: string;
}

/**
 * HeroBanner component displays a banner with a title and responsive images.
 *
 * @component
 * @param {string} props.title - The title text to display on the banner
 * @param {string} props.backgroundImage - The URL of the background image for larger screens
 * @param {string} props.mobileImage - The URL of the background image for mobile screens
 * @returns {JSX.Element} The rendered HeroBanner component
 */
const HeroBanner: React.FC<HeroBannerProps> = ({ title, backgroundImage, mobileImage }) => {
  // const isMobile = useBreakpoint();

  return (
    <div className="hero-banner">
      <picture>
      <source media="(max-width: 960px)" srcSet={mobileImage} width={1000} height={1250} />
        <Image
          src={backgroundImage}
          alt={title}
          width={2880}
          height={433}
          layout="responsive"
          priority
          blurDataURL="/images/banner-placeholder.png"
          placeholder="blur"
        />
      </picture>
      {/* <Image src={isMobile ? mobileImage : backgroundImage} alt={title} width={isMobile ? 1000 : 2880} height={ isMobile? 1250 : 433} layout="responsive" priority /> */}
      <h1>{title}</h1>
    </div>
  );
};

export default HeroBanner;
