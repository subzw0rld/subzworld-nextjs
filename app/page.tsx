import HeroBanner from "@/components/HeroBanner";
import "./_css/homepage.css";

/**
 * Home component renders the main landing page of the application.
 * It includes a HeroBanner component with a title and background images.
 *
 * @component
 * @example
 * return (
 *   <Home />
 * )
 */

export default function Home() {
  return (
    <div className="home-page page">
      <HeroBanner
        title="Welcome to Subzworld!"
        backgroundImage="/images/banner.jpg"
        mobileImage="/images/mobile-banner.jpg"
      />
      <section className="section-container">
        <blockquote>
          <h2>Who am I ?</h2>
        </blockquote>
        <p>
          My name is Subroto, I am from Delhi, India. I am a IT technologist by
          profession working with{" "}
          <a
            href="https://www.techmahindra.com/"
            target="blank"
            referrerPolicy="no-referrer"
          >
            Tech Mahindra
          </a>{" "}
          as a Delivery Lead for Fullstack and Headless Commerce overlooking
          projects across the EMEA (Europe-Middle East-Asia) region.
        </p>
        <p>
          I come with a very strong professional background spanning 24 years.
          During my tenure I have worked and delivered projects for multiple
          industries including:
        </p>
        <ul className="default-list">
          <li>Airlines</li>
          <li>E-Commerce (B2B/B2C)</li>
          <li>Marketplace</li>
          <li>Banking</li>
          <li>Healthcare</li>
          <li>Telecom</li>
        </ul>
        ... and many more.
        <p className="page-break">
          Also I got the opportunity to work for multiple esteemed organisations
          including:
        </p>
        <ul className="default-list">
          <li>Tech Mahindra</li>
          <li>Publicis.Sapient</li>
          <li>Sopra Steria</li>
          <li>Tata Interactive Services</li>
        </ul>
        ... and many more.
        <p className="page-break">
          Being a nerd I like to work on different technologies and frameworks
          and keep myself updated with the latest trends in technology.
          Currently I am heavily invested in delivering projects using Next.js
          and React.
        </p>
        <p>
          Apart from project delivery I also have almost a decade long Pre-Sales
          experience and have been involved in mutliple critical RFPs.
        </p>
        <blockquote>
          <h2>Hobbies</h2>
        </blockquote>
        <p>
          Apart from my professional life, I have my hobbies to maintain my
          sanity. I am an amateur landscape photographer and I love to travel
          and explore new places (Check my Insta profile for my travelogues). I
          am also a foodie and love to try different cuisines.
        </p>
        <p>
          During my free time and also when I am not traveling, I prefer to
          check out YouTube and other articles related to technology and
          scientific breakthroughs.
        </p>
      </section>
    </div>
  );
}
