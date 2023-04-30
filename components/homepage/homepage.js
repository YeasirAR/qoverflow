import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import yeasir_img from '../../public/images/yeasir.jpg'
import {
  ChatBubbleLeftEllipsisIcon,
  CodeBracketIcon,
  EllipsisVerticalIcon,
  EyeIcon,
  FlagIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  ShareIcon,
  StarIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowTrendingUpIcon,
  Bars3Icon,
  BellIcon,
  FireIcon,
  HomeIcon,
  UserGroupIcon,
  XMarkIcon,
  InformationCircleIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

import { BsFillCaretDownFill as Downvote } from "react-icons/bs";
import { BsFillCaretUpFill as Upvote } from "react-icons/bs";

import { Button } from "@mui/material";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

const items = [
  { id: 1, title: 'Back End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 2, title: 'Front End Developer', department: 'Engineering', type: 'Full-time', location: 'Remote' },
  { id: 3, title: 'User Interface Designer', department: 'Design', type: 'Full-time', location: 'Remote' },
]
const user = {
  name: "Yeasir Arafat",
  email: "yeasir402@gmail.com",
  imageUrl:"/images/yeasir.jpg"
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Tags", href: "/tags", icon: ArrowTrendingUpIcon, current: false },
  { name: "Users", href: "/users", icon: UserGroupIcon, current: false },
  { name: "Contact", href: "/contact", icon: ChatBubbleBottomCenterTextIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
const communities = [
  { name: "React", href: "#" },
  { name: "Flutter", href: "#" },
  { name: "Next JS", href: "#" },
  { name: "Android", href: "#" },
  { name: "JavaScript", href: "#" },
  { name: "Java", href: "#" },
];

const quicklinks = [
  { name: "Facebook", href: "#" },
  { name: "Github", href: "#" },
  { name: "Twitter", href: "#" },
];
// const tabs = [
//   { name: "Recent", href: "#", current: true },
//   { name: "Most Viewed", href: "#", current: false },
//   { name: "Most Answers", href: "#", current: false },
// ];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl:"/images/yeasir.jpg"
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl:"/images/yeasir.jpg"
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg"
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg"
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg"
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },

  // More posts...
];
const whoToFollow = [
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl:"/images/yeasir.jpg"  },
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl:"/images/yeasir.jpg"  },
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl:"/images/yeasir.jpg"  },
  // More people...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


export default function HomePage({search}) {

  function getDate(datetime) {
    const date = new Date(parseInt(datetime));
    const options = {
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    };
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
    return formattedDate;
  }

  const [topUser,setTopUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      var sort_by = "reputation";
      const res = await fetch("/api/user/findall", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: "",
          sortby: sort_by,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTopUser(data);
      }
    };
    fetchData();
  }, []);

  const [tabs, setTabs] = useState([
    { name: "Recent", current: true },
    { name: "Most Viewed", current: false },
    { name: "Most Answers", current: false },
  ])
  const changeTab = (index) => {
    const tempTabs = [...tabs];
    tempTabs.forEach((tab, i) => {
      if (i === index) {
        tab.current = true;
      } else {
        tab.current = false;
      }
    });
    setTabs(tempTabs);
  };
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      var sort_by = "recent";
      if(tabs[1].current) sort_by = "view";
      else if(tabs[2].current) sort_by = "answer";
      const res = await fetch("/api/question/get_question_all", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: search,
          sortby: sort_by,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setQuestions(data);
      }
    };
    fetchData();
  }, [search,tabs]);
  const [trquestions, setTrQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/question/get_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: "",
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrQuestions(data);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
            <div className="hidden lg:col-span-3 lg:block xl:col-span-2">
              <nav
                aria-label="Sidebar"
                className="sticky top-4 divide-y divide-gray-300"
              >
                <div className="space-y-1 pb-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-200 text-gray-900"
                          : "text-gray-700 hover:bg-gray-50",
                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      <span className="truncate">{item.name}</span>
                    </a>
                  ))}
                </div>
                <div className="pt-10 pb-5">
                  <p
                    className="px-3 text-sm font-medium text-gray-500"
                    id="communities-headline"
                  >
                    Popular Tags
                  </p>
                  <div
                    className="mt-3 space-y-2"
                    aria-labelledby="communities-headline"
                  >
                    {communities.map((community) => (
                      <a
                        key={community.name}
                        href={community.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span className="truncate">{community.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="pt-10">
                  <p
                    className="px-3 text-sm font-medium text-gray-500"
                    id="communities-headline"
                  >
                    Quick Links
                  </p>
                  <div
                    className="mt-3 space-y-2"
                    aria-labelledby="communities-headline"
                  >
                    {quicklinks.map((ql) => (
                      <a
                        key={ql.name}
                        href={ql.href}
                        className="group flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      >
                        <span className="truncate">{ql.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
            <main className="lg:col-span-9 xl:col-span-7">
              <div className="px-4 sm:px-0">
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
                        onClick={() => changeTab(tabIdx)}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          tab.current
                            ? "text-gray-900"
                            : "text-gray-500 hover:text-gray-700",
                          tabIdx === 0 ? "rounded-l-lg" : "",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
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
              <div className="mt-4">
                <h1 className="sr-only">Recent questions</h1>
                <ul role="list" className="space-y-4">
                  {questions && questions.map((question) => (
                    <li
                      key={question._id}
                      className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                    >
                      <article
                        aria-labelledby={"question-title-" + question._id}
                      >
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <Image
                                className="h-10 w-10 rounded-full"
                                src={question.authorImageUrl}
                                height={1000} width={1000}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={"profile/"+question.authorUsername}
                                  className="hover:underline"
                                >
                                  {question.author}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                  <time dateTime={question.date}>
                                    {getDate(question.date)}
                                  </time>
                              </p>
                            </div>
                            <div className="flex flex-shrink-0 self-center">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                                    <span className="sr-only">
                                      Open options
                                    </span>
                                    <EllipsisVerticalIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <StarIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Save</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                      {/* <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <CodeBracketIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Embed</span>
                                          </a>
                                        )}
                                      </Menu.Item> */}
                                      <Menu.Item>
                                        {({ active }) => (
                                          <a
                                            href="#"
                                            className={classNames(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "flex px-4 py-2 text-sm"
                                            )}
                                          >
                                            <FlagIcon
                                              className="mr-3 h-5 w-5 text-gray-400"
                                              aria-hidden="true"
                                            />
                                            <span>Report</span>
                                          </a>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          </div>
                          <Link href={"/question/view/"+question.post_id}>
                          <h2
                            id={"question-title-" + question.id}
                            className="mt-4 text-base font-medium text-gray-900"
                          >
                            {question.title}
                          </h2>
                          </Link>
                        </div>
                        <Link href={"/question/view/"+question.post_id}>
                        {/* <div
                          className="mt-2 space-y-4 text-sm text-gray-700 text-justify"
                          dangerouslySetInnerHTML={{ __html: question.body.slice(100) }}
                        /> */}
                        </Link>
                        

                        <div className="mt-2 flex space-x-2">
                          {question.tags_list.map((tag,index) => (
                            <button
                            key={index}
                            type="button"
                            className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-xs font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                          >
                            {tag}
                          </button>
                          ))}
                        </div>

                        <div className="mt-3 flex justify-between space-x-8">
                          <div className="flex space-x-6">
                            <span className="inline-flex items-center text-sm">
                              <span className="inline-flex space-x-1 text-gray-400 ">
                                <Upvote
                                  className="h-5 w-5 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.vote}
                                </span>
                                <span className="sr-only">views</span>
                                <Downvote
                                  className="h-5 w-5 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                              </span>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <ChatBubbleLeftEllipsisIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.answers} Answers
                                </span>
                                <span className="sr-only">answers</span>
                              </button>
                            </span>
                            <span className="inline-flex items-center text-sm">
                              <button
                                type="button"
                                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                              >
                                <EyeIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span className="font-medium text-gray-900">
                                  {question.views} Views
                                </span>
                                <span className="sr-only">views</span>
                              </button>
                            </span>
                          </div>
                          <div className="flex text-sm">
                            <span className="inline-flex items-center text-sm">
                              <span className="font-medium text-gray-900">
                              <Link href={"/question/view/"+question.post_id}>
                                <Button variant="outlined" size="small">
                                  ANSWER
                                </Button>
                                </Link>
                                {/* <button
                                  type="button"
                                  className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                  ANSWER
                                </button> */}
                              </span>
                            </span>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
            <span className="font-medium">97</span> results
          </p>
        </div>
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
            </main>
            <aside className="hidden xl:col-span-3 xl:block">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="who-to-follow-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Top Users
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {topUser && topUser.slice(0,4).map((usr) => (
                            <li
                              key={usr.username}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-8 w-8 rounded-full"
                                  src={usr.imageUrl}
                                  height={1000} width={1000}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={"/profile/"+usr.username}>{usr.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={"/profile/"+usr.username}>{"@" + usr.username}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                >
                                  <Link href={"/profile/"+usr.username}><span>View</span></Link>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/users"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="trending-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Recent Questions
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {trquestions && trquestions.slice(0,5).map((post) => (
                            <li key={post.id} className="flex space-x-3 py-4">
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-8 w-8 rounded-full"
                                  src={post.authorImageUrl}
                                  alt={post.author}
                                  height={1000} width={1000}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                              <Link href={"/question/view/"+post.post_id}><p className="text-sm text-gray-800">
                                  {post.title}
                                </p></Link>
                                {/* <div className="mt-2 flex">
                                  <span className="inline-flex items-center text-sm">
                                    <button
                                      type="button"
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon className="h-5 w-5" aria-hidden="true" />
                                      <span className="font-medium text-gray-900">{post.comments}</span>
                                    </button>
                                  </span>
                                </div> */}
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <Link
                          href="/"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>

    </>
  );
}
