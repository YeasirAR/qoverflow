import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const tagsList = [
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "JavaScript",
    popularity: "120",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
  },
  {
    name: "JavaScript",
    popularity: "120",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
  },
  {
    name: "JavaScript",
    popularity: "120",
    description:
      "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
  {
    name: "React",
    popularity: "100",
    description:
      "The React. js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
  },
];

export default function Tags() {
  const tabs = [
    { name: "Popular", href: "#", current: true },
    { name: "Name", href: "#", current: false },
    { name: "New", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl mb-1">Tags</h1>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. <br></br>Using the right tags makes it easier for
          others to find and answer your question.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-4 items-center mb-4">
        <div className="col-span-1 relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
          <input
            id="search"
            name="search"
            className="block w-40 sm:w-80 rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
            placeholder="Filter by user"
            type="search"
          />
        </div>
        <div className="col-span-2"></div>
        <div className="col-span-2 px-4 sm:px-0">
          <div className="sm:hidden">
            <label htmlFor="question-tabs" className="sr-only">
              Select a tab
            </label>
            <select
              id="question-tabs"
              className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav
              className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
              aria-label="Tabs"
            >
              {tabs.map((tab, tabIdx) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  aria-current={tab.current ? "page" : undefined}
                  className={classNames(
                    tab.current
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700",
                    tabIdx === 0 ? "rounded-l-lg" : "",
                    tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                    "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-xs font-medium text-center hover:bg-gray-50 focus:z-10"
                  )}
                >
                  <span>{tab.name}</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      tab.current ? "bg-rose-500" : "bg-transparent",
                      "absolute inset-x-0 bottom-0 h-0.5"
                    )}
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {tagsList.map((tag) => (
          <li
            key={tag.name}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white  shadow"
          >
            <div className="flex flex-1 flex-col p-5">
              <Link href="#">
                <button
                  type="button"
                  className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-sm mb-1 font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                >
                  {tag.name}
                </button>

                <article className="text-sm text-gray-800 ">
                  {tag.description.slice(0, 130)} ......
                </article>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
