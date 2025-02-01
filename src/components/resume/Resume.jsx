import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Research Associate
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Carnegie Mellon University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Developed a web application for combining public and shuttle transit systems.
                | Designed to cater to the unique requirements of senior citizens, enhancing their mobility, Prioritized data security and privacy through strong protective measures.
                | Incorporated user-friendly features for improved accessibility and ensured secure deployment for a reliable experience
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Teaching Assistant
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Carnegie Mellon University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  June 2023 - December 2023
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Setup of Lab(Ctf) server, executed recitation for homework, teaching, conducted Office hours to help solve doubts. responsible to mentor 13 students. Collaborated with TAs to invent new homework
                </p>
              </div>
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Developer Associate
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                Cognizant Technology Solutions India Pvt. Ltd
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  August 2020 - December 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                Successfully developed and maintained a secure customer-facing pharma platform with robust cybersecurity measures and a data privacy focus, reducing possible threat vector on the platform, performed code reviews.
                | Led a team of 4 developers in transforming a legacy web application to a new framework with enhanced security and functionality within time constraints.
                | Developed automated secure deployments scripts using GitLab and integrated security tools for data protection, reducing deployment time by 70% further reducing the cost
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-yellow-500">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-yellow-500"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                Master's in Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Carnegie Mellon University
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2023 - Year 2024
                </span>
                <p className=" text-[.9rem] text-justify text-gray-5000">
                Courses Taken Secure Coding: Code analysis/ security reviews, secure coding practices, building a secure file system, Hacking101: Micro corruptions, AFL, CVE replications and analysis Introduction to Information Security: Cryptography, Access Control, Vulnerabilities, Policy, Privacy, Management Applied Information Assurance: Defense-in-Depth, Foundations, Threats, Host Security, Network Security, Network Monitoring, Cryptosystems, Encryption, Incident Response, Digital Forensics, Security Protocol. Cyber Risk modeling: legal compliance, threat modeling, MITRE ATTACK, the Common Vulnerabilities and Exposures database, and popular risk frameworks (STRIDE, PASTA, NIST, Vulnerability Assessment, etc.) Fundamentals of Telecommunication, Introduction to Computer Systems (15513), Browser Security*, Distributed Systems*, Cloud Security*, Ethical Penetration Testing*, Negotiations *
                </p>
              </div>
              <div className=" flex flex-col gap-1 border-2 border-yellow-400 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Computer Science
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  JUET
                </span>
                <span className=" text-[.9rem] font-semibold text-yellow-500 sm:text-base">
                  Year 2016 - Year 2020
                </span>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
