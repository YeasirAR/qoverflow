import { Fragment, useEffect, useState } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import Editor from "../../../components/editor/editor";
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

import { BsFillCaretDownFill as Upvote } from "react-icons/bs";
import { BsFillCaretUpFill as Downvote } from "react-icons/bs";

import { Button } from "@mui/material";
import Image from "next/image";
import { Input } from "@material-tailwind/react";
import Link from "next/link";
const user = {
  name: "Yeasir Arafat",
  email: "yeasir402@gmail.com",
  imageUrl: "/images/yeasir.jpg",
};
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
  { name: "Install React", href: "#" },
  { name: "Install Node", href: "#" },
  { name: "Setup Project", href: "#" },
];
const tabs = [
  { name: "Recent", href: "#", current: true },
  { name: "Most Viewed", href: "#", current: false },
  { name: "Most Answers", href: "#", current: false },
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
    title: "How to create 'Published' and 'Last edited' fields?",
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
    title:
      "ChatBot - Trouble using custom gpt_index and langchain libraries for creating a GPT-3 based search index",
    body: `
      <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
    `,
  },
  // More questions...
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

export default function AskQuestion() {
  const [editorLoadedQsn, setEditorQsnLoaded] = useState(false);
  const [editorLoadedExp, setEditorExpLoaded] = useState(false);
  const [dataQsn, setDataQsn] = useState("");
  const [dataExp, setDataExp] = useState("");
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");

  useEffect(() => {
    setEditorQsnLoaded(true);
  }, []);
  useEffect(() => {
    setEditorExpLoaded(true);
  }, []);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});  
  useEffect(() => {
    const usr = localStorage.getItem("loggedInUser");
    if (usr) {
      setIsLoggedIn(true);
      setUser(JSON.parse(usr));
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handlePublish = async () => {
    const res = await fetch("/api/question/add_question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: dataQsn+dataExp,
        post_id: getRandomInt(1, 100000000),
        author: user.name,
        authorImageUrl: user.imageUrl,
        authorUsername: user.username,
        comment_list:[],
        answer_list:[],
        tags_list:tag.split(","),
      }),
    });
    const resp = await res.json();
    if(resp.status === 200){
      alert(resp.message);
    }
    else{
      alert(resp.message);
    }
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          todo: "question",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
  };
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
            <main className="lg:col-span-12 xl:col-span-10">
              <div className="mt-0">
                <ul role="list" className="space-y-4">
                  {/* <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <h1 className="text-3xl">Ask a public question</h1>
                  </li> */}
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <div>
                      <h1 className="mb-1 text-3xl font-bold">
                        Ask a public question
                      </h1>
                      <h2 className="text-xl ">
                        Steps of writing a good question
                      </h2>
                      <ul className="list-disc ml-8">
                        <li>Summarize your problem in a one-line title.</li>
                        <li>Describe your problem in more detail.</li>
                        <li>
                          Describe what you tried and what you expected to
                          happen.
                        </li>
                        <li>
                          Add “tags” which help surface your question to members
                          of the community.
                        </li>
                        <li>Review your question and post it to the site.</li>
                      </ul>
                    </div>
                  </li>
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Title
                      </label>
                      <p
                        className="mb-2 text-sm text-gray-500"
                        id="email-description"
                      >
                        Be specific and imagine you’re asking a question to
                        another person.
                      </p>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="title"
                          id="title"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="e.g. Is there an R function for finding the index of an element of a vector?"
                          aria-describedby="title-description"
                        />
                      </div>
                    </div>
                  </li>
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      What are the details of your problem?
                    </label>
                    <p
                      className="mb-2 text-sm text-gray-500"
                      id="email-description"
                    >
                      Introduce the problem and expand on what you put in the
                      title. Minimum 20 characters.
                    </p>

                    <Editor
                      name="description"
                      onChange={(dataQsn) => {
                        setDataQsn(dataQsn);
                      }}
                      editorLoaded={editorLoadedQsn}
                    />

                    {/* {JSON.stringify(dataQsn)} */}
                  </li>
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <label
                      htmlFor="email"
                      className="block text-lg font-medium text-gray-700"
                    >
                      What did you try and what were you expecting?
                    </label>
                    <p
                      className="mb-2 text-sm text-gray-500"
                      id="email-description"
                    >
                      Describe what you tried, what you expected to happen, and
                      what actually resulted. Minimum 20 characters.
                    </p>

                    <Editor
                      name="description"
                      onChange={(dataExp) => {
                        setDataExp(dataExp);
                      }}
                      editorLoaded={editorLoadedExp}
                    />

                    {/* {JSON.stringify(dataExp)} */}
                  </li>
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-lg font-medium text-gray-700"
                      >
                        Tags
                      </label>
                      <p
                        className="mb-2 text-sm text-gray-500"
                        id="tag-description"
                      >
                        Add up to 5 tags to describe what your question is
                        about. Tags should be separated by comma.
                      </p>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="tag"
                          id="tag"
                          value={tag}
                          onChange={(e) => setTag(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="e.g. react, javascript, typescript, python"
                          aria-describedby="tag-description"
                        />
                      </div>
                    </div>
                  </li>
                  
                  <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
                  <Link href="/">
                    <button
                      type="button"
                      onClick={handlePublish}
                      className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Publish
                    </button>
                    </Link>
                    <Link href="/">
                    <button
                      type="button"
                      className="ml-3 inline-flex items-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2"
                    >
                      Discard
                    </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
