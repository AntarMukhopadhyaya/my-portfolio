"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import useDownloader from "react-use-downloader";
import Link from "next/link";
export default function HeroSection() {
  const {size, elapsed,percentage,download,cancel,error,isInProgress} = useDownloader();
  const fileName = "Resume.pdf";
  const fileUrl = "/docs/Resume.pdf";
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="text-white mb-4  text-4xl sm:text-5xl  lg:text-8xl lg:leading-normalfont-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Antar",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Web Developer",
                1000,
                "Cyber Security Enthusiast",
                1000,
                "Data Science Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  text-base sm:text-lg lg:text-xl mb-6">
            I am Antar Mukhopadhyaya, currently pursuing a BTech in Computer
            Science and Engineering. I have a strong passion for technology and
            have engaged in various projects in web development, machine
            learning, and cyber security. I have built dynamic and responsive
            websites, and I am actively looking for opportunities in web
            development to further hone my skills and contribute to innovative
            projects.
          </p>
          <div>
            <Link href="https://www.upwork.com/freelancers/~017f4578939b548399"  target="_blank" className="px-10 py-4 w-full sm:w-fit bg-gradient-to-br from-yellow-500 via-orange-500 to-green-500 rounded-full mr-4 bg-white hover:bg-slate-200 text-white  ">
              Hire Me
            </Link>
            <button onClick={() => download(fileUrl,fileName)} className="px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/antar-image.png"
              alt="My Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={200}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
