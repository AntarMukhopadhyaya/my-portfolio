"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import useDownloader from "react-use-downloader";
import Link from "next/link";
import { motion } from "framer-motion";
export default function HeroSection() {
  const { size, elapsed, percentage, download, cancel, error, isInProgress } =
    useDownloader();
  const fileName = "Resume.pdf";
  const fileUrl = "/docs/Resume.pdf";
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale:1}}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4  text-4xl sm:text-5xl  lg:text-8xl lg:leading-normalfont-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
              Hello,I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Antar",
                5000,
                "A Web Developer",
                5000,

                "A Data Science Enthusiast",
                5000,
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
          <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contact Me
            </Link>
          
            <button
              onClick={() => download(fileUrl, fileName)}
              className="px-6 w-full sm:w-fit py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3"
            >
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale:0.5 }}
          animate={{ opacity: 1, scale:1}}
          transition={{ duration: 0.5 }} className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/antar-image.png"
              alt="My Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={300}
              height={200}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
