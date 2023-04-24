import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import yeasir_img from "../../public/images/yeasir.jpg";
import SaveRoundedIcon from "@mui/icons-material/SaveRounded";
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
  QuestionMarkCircleIcon,
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
import Editor from "../editor/editor";
const user = {
  name: "Yeasir Arafat",
  email: "yeasir402@gmail.com",
  imageUrl: "/images/yeasir.jpg",
};
const comments = [
  {
    id: 1,
    name: "Leslie Alexander",
    date: "4d ago",
    imageUrl: "/images/anna.jpeg",
    body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
  },
];
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Questions", href: "#", icon: FireIcon, current: false },
  { name: "Tags", href: "#", icon: ArrowTrendingUpIcon, current: false },
  { name: "Users", href: "#", icon: UserGroupIcon, current: false },
  {
    name: "About",
    href: "/about",
    icon: InformationCircleIcon,
    current: false,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: ChatBubbleBottomCenterTextIcon,
    current: false,
  },
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
  { name: "Install React", href: "#" },
  { name: "Install Node", href: "#" },
  { name: "Setup Project", href: "#" },
];
const questions = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "How to cleanly make multiple elements movable anywhere?",
    body: `
      <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
    `,
  },
];

const answers = [
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "How to cleanly make multiple elements movable anywhere?",
    body: `
      <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
    `,
  },
  {
    id: "81614",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
      href: "#",
    },
    date: "December 9 at 11:43 AM",
    datetime: "2020-12-09T11:43:00",
    href: "#",
    title: "How to cleanly make multiple elements movable anywhere?",
    body: `
      <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
    `,
  },
];
const whoToFollow = [
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl: "/images/yeasir.jpg",
  },
  {
    name: "Yeasir Arafat",
    handle: "yeasirar",
    href: "#",
    imageUrl: "/images/yeasir.jpg",
  },
  // More people...
];
const trendingPosts = [
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },
  {
    id: 1,
    user: {
      name: "Yeasir Arafat",
      imageUrl: "/images/yeasir.jpg",
    },
    body: "How to cleanly make multiple elements movable anywhere?",
    comments: 291,
  },

  // More posts...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ViewQuestion() {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
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
                    Popular Categories
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
              <div className="mt-4">
                {/* <h1 className="sr-only">Recent questions</h1> */}
                <ul role="list" className="space-y-4">
                  {questions.map((question) => (
                    <li
                      key={question.id}
                      className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                    >
                      <article
                        aria-labelledby={"question-title-" + question.id}
                      >
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <Image
                                className="h-10 w-10 rounded-full"
                                src={question.author.imageUrl}
                                height={1000}
                                width={1000}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={question.author.href}
                                  className="hover:underline"
                                >
                                  {question.author.name}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a
                                  href={question.href}
                                  className="hover:underline"
                                >
                                  <time dateTime={question.datetime}>
                                    {question.date}
                                  </time>
                                </a>
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
                          <div className="grid grid-cols-12">
                            <div className="col-span-1 text-gray-400">
                              <Upvote
                                className="h-9 w-9 mt-8 hover:text-gray-500"
                                aria-hidden="true"
                              />
                              <h1 className="font-medium text-lg text-gray-900 ml-2">
                                20
                              </h1>
                              <Downvote
                                className="h-9 w-9 hover:text-gray-500"
                                aria-hidden="true"
                              />
                              {/* <SaveRoundedIcon
                                className="h-6 w-6 hover:text-gray-500"
                                aria-hidden="true"
                              /> */}
                            </div>
                            <div className="col-span-11">
                              <div>
                                <h2
                                  id={"question-title-" + question.id}
                                  className="mt-4 text-lg font-medium text-gray-900"
                                >
                                  {question.title}
                                </h2>
                              </div>
                              <div
                                className="mt-2 space-y-4 text-base text-gray-700 text-justify"
                                dangerouslySetInnerHTML={{
                                  __html: question.body,
                                }}
                              />

                              <div className="mt-2 flex space-x-2">
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-sm font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                                >
                                  React
                                </button>
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-sm font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                                >
                                  Python
                                </button>
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-sm font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                                >
                                  Machine Learning
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6 mt-2">
                <section aria-labelledby="notes-title">
                  <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg">
                    <div className="divide-y divide-gray-200">
                      <div className="px-4 py-5 sm:px-6">
                        <h2
                          id="notes-title"
                          className="text-lg font-medium text-gray-900"
                        >
                          Comments
                        </h2>
                      </div>
                      <div className="px-4 py-6 sm:px-6">
                        <ul role="list" className="space-y-8">
                          {comments.map((comment) => (
                            <li key={comment.id}>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <Image
                                    height={100}
                                    width={100}
                                    className="h-10 w-10 rounded-full"
                                    src={comment.imageUrl}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <div className="text-sm">
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      {comment.name}
                                    </a>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>{comment.body}</p>
                                  </div>
                                  <div className="mt-2 space-x-2 text-sm">
                                    <span className="font-medium text-gray-500">
                                      {comment.date}
                                    </span>{" "}
                                    <span className="font-medium text-gray-500">
                                      &middot;
                                    </span>{" "}
                                    <button
                                      type="button"
                                      className="font-medium text-gray-900"
                                    >
                                      Reply
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-6 sm:px-6">
                      <div className="flex space-x-3">
                        <div className="flex-shrink-0">
                          <Image
                            height={100}
                            width={100}
                            className="h-10 w-10 rounded-full"
                            src={user.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <form action="#">
                            <div>
                              <label htmlFor="comment" className="sr-only">
                                About
                              </label>
                              <textarea
                                id="comment"
                                name="comment"
                                rows={3}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                                placeholder="Add a comment"
                                defaultValue={""}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <a
                                href="#"
                                className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                              >
                                <QuestionMarkCircleIcon
                                  className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <span>Some HTML is okay.</span>
                              </a>
                              <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="bg-white shadow sm:overflow-hidden sm:rounded-lg mt-4">
                <div className="divide-y divide-gray-200">
                  <div className="px-4 py-5 sm:px-6">
                    <h2
                      id="notes-title"
                      className="text-lg font-medium text-gray-900"
                    >
                      {answers.length + " "}Answers
                    </h2>
                  </div>
                  {/* <h1 className="sr-only">Recent questions</h1> */}
                  <ul role="list" className="space-y-2">
                    {answers.map((answer) => (
                      <li
                        key={answer.id}
                        className="bg-white px-4 shadow  sm:p-6"
                      >
                        <article aria-labelledby={"answer-title-" + answer.id}>
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-10 w-10 rounded-full"
                                  src={answer.author.imageUrl}
                                  height={1000}
                                  width={1000}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a
                                    href={answer.author.href}
                                    className="hover:underline"
                                  >
                                    {answer.author.name}
                                  </a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a
                                    href={answer.href}
                                    className="hover:underline"
                                  >
                                    <time dateTime={answer.datetime}>
                                      {answer.date}
                                    </time>
                                  </a>
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
                            <div className="grid grid-cols-12">
                              <div className="col-span-1 text-gray-400">
                                <Upvote
                                  className="h-9 w-9 mt-2 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                <h1 className="font-medium text-lg text-gray-900 ml-2">
                                  20
                                </h1>
                                <Downvote
                                  className="h-9 w-9 hover:text-gray-500"
                                  aria-hidden="true"
                                />
                                {/* <SaveRoundedIcon
                                className="h-6 w-6 hover:text-gray-500"
                                aria-hidden="true"
                              /> */}
                              </div>
                              <div className="col-span-11">
                                <div></div>
                                <div
                                  className="mt-2 space-y-4 text-base text-gray-700 text-justify"
                                  dangerouslySetInnerHTML={{
                                    __html: answer.body,
                                  }}
                                />
                              </div>
                            </div>
                          </div>
                        </article>
                      </li>
                    ))}
                    <div className="bg-white px-4 shadow  sm:p-6">
                      <h1 className="mb-2 text-2xl font-medium text-gray-700">
                        {" "}
                        Add Your Answer Here
                      </h1>
                      <Editor
                        name="description"
                        onChange={(data) => {
                          setData(data);
                        }}
                        editorLoaded={editorLoaded}
                      />

                      {/* {JSON.stringify(data)} */}
                      <Button variant="outlined" size="medium" className="mt-2">
                        Post Your Answer
                      </Button>
                    </div>
                  </ul>
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
                        Top Contributors
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  height={1000}
                                  width={1000}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{"@" + user.handle}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                >
                                  <PlusIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                                    aria-hidden="true"
                                  />
                                  <span>Follow</span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
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
                        Trending
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {trendingPosts.map((post) => (
                            <li key={post.id} className="flex space-x-3 py-4">
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-8 w-8 rounded-full"
                                  src={post.user.imageUrl}
                                  alt={post.user.name}
                                  height={1000}
                                  width={1000}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm text-gray-800">
                                  {post.body}
                                </p>
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
                        <a
                          href="#"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
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
