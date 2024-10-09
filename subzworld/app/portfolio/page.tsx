"use client";
import PortfolioConfig from "@/helper/model/portfolio.model";
import Image from "next/image";
import React from "react";

import "../_css/card.css";
import "../_css/portfolio.css";

const PortfolioPage: React.FC = () => {
  return (
    <div className="portfolio-page page">
      <section className="section-container">
        <div className="portfolio-banner">
          <div className="grid-container">
            {PortfolioConfig.leftbanner.map((item: any) =>
              item.type === "image" ? (
                <Image
                  key={item.src}
                  src={item.src}
                  width={item.dim.width}
                  height={item.dim.height}
                  className={`grid-item ${item.className}`}
                  alt={item.info}
                  title={item.info}
                />
              ) : (
                <div
                  key={item.label}
                  className={`grid-item uppercase center ${item.className}`}
                >
                  {item.label}
                </div>
              )
            )}
          </div>
          <div className="right-container">
            {PortfolioConfig.rightbanner.map((item: any) =>
              item.type === "image" ? (
                <Image
                  key={item.src}
                  src={item.src}
                  width={item.dim.width}
                  height={item.dim.height}
                  className={`grid-item ${item.className}`}
                  alt={item.info}
                  title={item.info}
                />
              ) : (
                <div
                  key={item.label}
                  className={`grid-item uppercase center ${item.className}`}
                >
                  {item.label}
                </div>
              )
            )}
          </div>
        </div>
        <div className="portfolio-heading center">
          <h1>My Portfolio</h1>
        </div>
        <div className="storyline card-area">
          <div className="card-area-inner">
            <div className="card horizontal-center year-1">
              <h2 className="title text-center">The Beginning</h2>
              <p>
                Long long time ago back in <strong>1998</strong>. I decided to
                to start my professional career.
              </p>
              <p>
                Coming from a business family it was not an easy decision.
                During many interviews I was even encouraged to join my family
                business instead.
              </p>
              <p>
                But I was determined to start on my own because of my love for
                technology. Therefore I kept appearing for interviews.
              </p>
              <p>
                Finally I got a chance with a small organisation called Observe
                Computers, working with their IT department as a software
                developer.
              </p>
              <p>I worked on multiple technology that includes:</p>
              <ul className="default-list">
                <li>FoxPro</li>
                <li>Javascript</li>
                <li>Smalltalk</li>
                <li>Core Java (1.2.2)</li>
              </ul>
              <p>
                It was a small begining but I felt I was on Top of the World!
              </p>
            </div>
            <div className="card horizontal-center year-2">
              <h2 className="title text-center">Happy Times!</h2>
              <p>
                While working with Observe Computers, I was able to learn a lot
                and work on many challenging projects including a website
                dedicated to Mental Health Awareness. At that time the website
                was the largest website on Mental Health and was for a
                pretigious client called Dr Sanjay Chugh.
              </p>
              <p>
                I was always very bold and risk taking from the start and never
                shyed away from taking up challenges. This helped my
                organisation to delegate me with the task of leading the
                development team.
              </p>
              <p>
                Alas! The good time soon came to rest in 2001 when the first
                dotCom bubble burst happened and all the software engineers were
                soon out hunting for jobs.
              </p>
              <p>
                Since the CEO of Observe Computers was very fond of me, he
                suggested that I should pursue higher education that specialises
                in UI technology. That lead me to University of Portsmouth in UK
                to pursue an MSc degree in Multimedia Information System.
              </p>
            </div>
            <div className="card horizontal-center year-3">
              <h2 className="title text-center">
                Restarting My Academic Front
              </h2>
              <p>
                While working with Observe Computers, I was able to learn a lot
                and work on many challenging projects including a website
                dedicated to Mental Health Awareness. At that time the website
                was the largest website on Mental Health and was for a
                pretigious client called Dr Sanjay Chugh.
              </p>
              <p>
                I was always very bold and risk taking from the start and never
                shyed away from taking up challenges. This helped my
                organisation to delegate me with the task of leading the
                development team.
              </p>
              <p>
                Alas! The good time soon came to rest in 2001 when the first
                dotCom bubble burst happened and all the software engineers were
                soon out hunting for jobs.
              </p>
              <p>
                Since the CEO of Observe Computers was very fond of me, he
                suggested that I should pursue higher education that specialises
                in UI technology. That lead me to University of Portsmouth in UK
                to pursue an
                <strong>MSc degree in Multimedia Information System.</strong>
              </p>
            </div>
            <div className="card horizontal-center year-4">
              <h2 className="title text-center">University of Portsmouth</h2>
              <p>
                I learned a lot during my time at University of Portsmouth. It
                was a completely different experience compared to the kind of
                education I experienced in India. The classes covered a lot of
                real world scenarios and practical application of every topic
                being covered.
              </p>
              <p>
                As a final chapter of my MSc degree, I was required to submit a
                20,000 word dissertation on a topic I was supposed to choose
                based on the list provided by the University. I opted for
                delivering a multimedia artefact based on a Multimedia platform
                called Squeak. It was similar to Flash and Director but was
                written in Smalltalk. I worked on the research topic with my
                University's Department of Creative Techmologies.
              </p>
              <p>
                While working on my dissertation, the University's Department of
                Creative Technologies was very impressed with my work and
                offered me a position as a Research Associate which I served
                until 2004.
              </p>
            </div>
            <div className="card horizontal-center year-5">
              <h2 className="title text-center">Career Reboot</h2>
              <p>
                Since I had a prior work experience and paused my career to
                strengthen my Academic front. I decided to kind of reboot my
                career and start afresh. I came back to India in 2004 because UK
                was still undergoing recession phase post 9/11, I started as a
                Flash Developer with a company called Greenfield Online that
                specialised in Survey Programming.
              </p>
              <p>
                Let me not bore you much and instead I would like to highlight
                some of the key moments of my career instead.
              </p>
            </div>
            <div className="card horizontal-center year-6">
              <h2 className="title text-center">Career Highlights</h2>
              <ul className="default-list">
                <li>
                  Awarded Employee of the Month and Shining start while working
                  for NIIT Ltd in 2006
                </li>
                <li>
                  Received Client appreciation and recognition from IHG Hotels
                  Group in 2009
                </li>
                <li>
                  Simulation COE - Developed and Architected Simulation of
                  varying complexities that included:
                  <div>
                    <ul className="default-list">
                      <li>
                        Conversation Simulation - A simulation depicting a
                        conversation between 2 or more people
                      </li>
                      <li>
                        Business Simulation - Depicting a complete end to end
                        process in a industry, for example simulating the
                        complete mailing system carried out in Royal Mail
                        warehouse.
                      </li>
                      <li>
                        A Day in the Life - This simulation depicted a typical
                        day in life of a professional where the participant
                        would be presented with a series of tasks and scenarios
                        and they would act based on their judgement.
                        <div className="padding-top-bottom-1rem">
                          All these simulations were executed on a Simulation
                          Engine that we developed inhouse and the Simulation
                          Engine would navigate the user to the next scenario
                          based on their actions on a given scenario. The engine
                          would then generate a comprehensive report that would
                          have the assessment based on optimal, sub-optimal and
                          non-optimal actions. It was a sort of pre-cursor to
                          the AI models we see today.
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>Client Appreciation for Tiffany Diamonds</li>
                <li>
                  Won Impact Award for my Leadership and Architectural skills in
                  Sapient
                </li>
                <li>
                  Received appreciation from CIO and CTO of European Patent
                  Office for my contribution to their Digital Patenting Process
                  in 2018
                </li>
                <li>
                  Co-Architected the entire Fleet management Operation for
                  Airbus (Toulouse, France) and handled a team of 80 developers.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
