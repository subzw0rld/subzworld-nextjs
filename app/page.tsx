"use client";
import HeroBanner from "@/components/HeroBanner";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <div className="home-page page">
      <HeroBanner
        title="24 Years. 5 Industries. One Focus: Engineering Digital Solutions that Works!"
        backgroundImage="/images/banner.webp"
        mobileImage="/images/mobile-banner.webp"
      />
      <section className="section-container">
        <blockquote>
          <h2>Who am I ?</h2>
        </blockquote>
        <p>
          Based in Gurgaon, I lead the Full-Stack and Headless Commerce Delivery
          across ANZ at {" "}
          <a
            href="https://www.techmahindra.com/"
            target="blank"
            referrerPolicy="no-referrer"
          >
            Tech Mahindra
          </a>.{" "}
          With 24+ years in enterprise IT, I specialize in architecting and executing digital commerce solutions using modern frameworks like Next.js and React. 
        </p>
        <p>
          I’ve led delivery across industries—Airlines, Banking, B2B/B2C Retail, Marketplaces, and Healthcare—for some of the world’s largest brands.
        </p>
        
        <div ref={ref}>
          {inView ? (
            <>
              <p className="page-break">
                I’ve worked with leading firms such as Tech Mahindra, Publicis Sapient, Sopra Steria, and Tata Interactive Services.
              </p>
              <p className="page-break">
                Being a nerd I like to work on different technologies and
                frameworks and keep myself updated with the latest trends in
                technology. Currently I am heavily invested in delivering
                projects using Next.js and React.
              </p>
              <p>
                I also possess 10 years of pre-sales expertise, translating business needs into scalable tech solutions and winning enterprise RFPs.
              </p>
              <blockquote>
                <h2>Hobbies</h2>
              </blockquote>
              <p>
                Outside work, I unwind with landscape photography and travel and explore new places (Check my Insta profile for my
                travelogues). Plus, I’m a foodie with a passion for exploring cuisines.
              </p>
              <p>
                In spare time, I also follow tech and science developments on YouTube and specialized blogs.
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
}
