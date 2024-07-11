"use client";

import React, { useState,useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/images/github.svg";
import LinkedInIcon from "../../public/images/linkedin.svg";
import {motion,useInView} from "framer-motion";

const EmailSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(false);
  console.log(isInView);
  
  const contactVariants = {
    initial: { x: 50, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const endpoint = "/api/send";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    if (response.status === 200) {
      setEmailSubmitted(true);
    } else {
      setEmailError(true);
    }

  };
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 -translate-x-1/2 -translate-1/2"></div>
      <motion.div ref={ref} variants={contactVariants} initial="initial" animate={isInView ? "animate" : "initial"} transition={{duration:0.5}} >
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I'm always excited to connect with fellow tech enthusiasts, potential
          collaborators, and anyone interested in web development, machine
          learning, and cyber security. Whether you have a question, a project
          idea, or just want to say hello, feel free to reach out! .Let's create
          something amazing together.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/AntarMukhopadhyaya/">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://github.com/AntarMukhopadhyaya/">
            <Image src={LinkedInIcon} alt="LinkedIn Icon" />
          </Link>
        </div>
      </motion.div>
      <motion.div className="mt-2" ref={ref} variants={contactVariants} initial="initial" animate={isInView ? "animate": "initial"}>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2  text-sm font-medium "
            >
              {" "}
              Your Email{" "}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="test@gmail.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block  mb-2 text-sm font-medium "
            >
              {" "}
              Subject{" "}
            </label>
            <input
              type="text"
              id="subject"
              required
              name="subject"
              placeholder="Hello! I want to connect with you"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 "
            />
          </div>
          <div className="mb-6">
            <label className="text-white block text-sm mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hi Antar, Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
          {emailError && (
            <p className="text-red-500 text-sm mt-2">
              Email could not be sent. Please try again.
            </p>
          )}
        </form>
      </motion.div>
    </section>
  );
};
export default EmailSection;
