import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import React from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const people = [
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    email: "yeasir402@gmail.com",
    username: "yeasir402",
    reputation: "100",
    tags: "React-NextJS-Flutter",
    imageUrl: "/images/yeasir.jpg",
  },
  
];

export default function user() {
  const tabs = [
    { name: "Reputation", href: "#", current: true },
    { name: "New Users", href: "#", current: false },
    { name: "Old Users", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <div className="mb-3">
        <h1 className="text-2xl">Users</h1>
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
        {people.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-5">
            <Link
              href={`/profile/${person.username}`}>
              <Image
                className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
                src={person.imageUrl}
                alt=""
                height={128}
                width={128}
              />
              <h3 className="mt-1 text-sm font-medium text-gray-900">
                {person.name}
              </h3>
              </Link>
              <dl className="mt-0 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Rep</dt>
                <dd className="text-sm text-gray-800">Reputation: {person.reputation}</dd>
                <dt className="sr-only">Rep</dt>
                <dd className="mt-1">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {person.tags}
                  </span>
                </dd>
              </dl>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
