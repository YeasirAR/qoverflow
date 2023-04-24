import { Button } from "@mui/material";
import Image from "next/image";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";

const tabs = [
  { name: "Profile", href: "#", current: true },
  { name: "Activity", href: "#", current: false },
  { name: "Saves", href: "#", current: false },
  { name: "Settings", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ViewProfile() {
  return (
    <div>
      <div className="flex border-b justify-between ">
        <div className="p-4 flex-shrink-0">
          <Image
            className="rounded-xl"
            src="/images/yeasir2.jpg"
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="p-4 pl-0 flex-shrink-0">
          <h1 className="font-medium text-3xl">Yeasir Arafat</h1>
          <h1 className="my-2 font-light text-2xl">Software Engineer</h1>
          <div className="flex">
            <CakeIcon className="text-gray-500 hover:text-gray-900" />
            <p className="mt-1 ml-2 text-gray-500">
              Member for 1 year, 9 months
            </p>
          </div>

          <div className="flex space-x-2 mt-2 items-center">
            <Link
              href="https://facebook.com/yeasir.offical"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="https://github.com/yeasirar"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">GitHub account</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <LocationOnIcon fontSize="small" /> Dhaka, Bangladesh
            </Link>
          </div>
        </div>
        <div className="p-4 flex-shrink-0 ml-auto">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Edit Profile
          </button>
        </div>
      </div>
      <div className="mt-3 pl-4">
        <div className="sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "px-3 py-2 font-medium text-sm rounded-full"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="flex p-4">
        <div>
          <h1 className="text-2xl mb-2">Stats</h1>
          <div className="border rounded px-4 py-2 mt-4">
            <div className="flex space-x-10">
              <div>
                <h1 className="text-center font-medium">1</h1>
                <h3>reputation</h3>
              </div>
              <div>
                <h1 className="text-center font-medium">1</h1>
                <h3>reached</h3>
              </div>
            </div>
            <div className="flex space-x-10 mt-4">
              <div>
                <h1 className="text-center font-medium">1</h1>
                <h3>questions</h3>
              </div>
              <div>
                <h1 className="text-center font-medium">1</h1>
                <h3>answers</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10">
          <h1 className="text-2xl mb-2">About</h1>
          <h3>
            Hello there! My name is Yeasir Arafat and I am a Computer Science
            and Engineering student currently in my 10th trimester at United
            International University in Dhaka, Bangladesh. I have always had a
            passion for technology and programming, and I am excited to be
            pursuing my education in this field. I am proficient in several
            programming languages, including C++, Java, JavaScript, Python, and
            Dart. I have a keen interest in machine learning, mobile
            development, and data structures, and I enjoy participating in
            competitive programming challenges in my free time. I am excited to
            continue learning and growing as a programmer as I pursue my career
            in the tech industry.
          </h3>
        </div>
      </div>
    </div>
  );
}
