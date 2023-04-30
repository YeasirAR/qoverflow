import { Button } from "@mui/material";
import Image from "next/image";
import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CakeIcon from "@mui/icons-material/Cake";
import Link from "next/link";
import { Settings } from "@mui/icons-material";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ProfileEdit from "./profile_edit";
import ProfileSave from "./profile_save";
import ProfileActivity from "./profile_activity";
import { useRouter } from "next/router";
// const tabs = [
//   { name: "Profile", href: "#", current: true },
//   { name: "Activity", href: "#", current: false },
//   { name: "Saves", href: "#", current: false },
//   { name: "Settings", href: "#", current: false },
// ];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}


const ProfileInfo = ({profileUrl}) => {
  const tabs = [
    { name: "New", href: "#", current: true },
    { name: "Old", href: "#", current: false },
    { name: "Rep", href: "#", current: false },
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
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});  
  useEffect(() => {
    const fetchData = async () => {
      console.log(profileUrl);
      const res = await fetch("/api/user/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({
          username: profileUrl,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setUser(data);
      }
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: profileUrl,
          todo: "view",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    console.log(profileUrl);
  }, [profileUrl]);
  const [trquestions, setTrQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/question/get_question_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: profileUrl,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrQuestions(data);
      }
    };
    fetchData();
  }, [profileUrl]);
  const [transwers, setTrAnswers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/answer/get_answer_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: profileUrl,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrAnswers(data);
      }
    };
    fetchData();
  }, [profileUrl]);
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
  return (
    <div>
      <div className="flex p-4">
      <div>
        <h1 className="text-2xl mb-2">Stats</h1>
        <div className="border rounded px-4 py-2 mt-4">
          <div className="flex space-x-10">
            <div>
              <h1 className="text-center font-medium">{user.reputation}</h1>
              <h3>reputation</h3>
            </div>
            <div>
              <h1 className="text-center font-medium">{user.views }</h1>
              <h3>views</h3>
            </div>
          </div>
          <div className="flex space-x-10 mt-4">
            <div>
              <h1 className="text-center font-medium">{user.questionCount}</h1>
              <h3>questions</h3>
            </div>
            <div>
              <h1 className="text-center font-medium">{user.answerCount}</h1>
              <h3>answers</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-10">
        <h1 className="text-2xl mb-2">About</h1>
        <h3>
          {user.bio}
        </h3>
      </div>
    </div>
    <div className=" bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Top Questions
            </h3>
          </div>
          {/* <div className="ml-4 mt-2 flex-shrink-0">
            <div className="hidden sm:block">
              <nav
                className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                aria-label="Tabs"
              >
                {tabs.map((tab, tabIdx) => (
                  <a
                    key={tab.name}
                    href={tab.href}
                    className={classNames(
                      tab.current
                        ? "text-gray-900"
                        : "text-gray-500 hover:text-gray-700",
                      tabIdx === 0 ? "rounded-l-lg" : "",
                      tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                      "group relative min-w-0 flex-1 overflow-hidden bg-white py-2 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                    )}
                    aria-current={tab.current ? "page" : undefined}
                  >
                    <span>{tab.name}</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        tab.current ? "bg-indigo-500" : "bg-transparent",
                        "absolute inset-x-0 bottom-0 h-0.5"
                      )}
                    />
                  </a>
                ))}
              </nav>
            </div>
          </div> */}
        </div>
        <div>
          <ul role="list" className="space-y-2 mt-2">
          {trquestions && trquestions.slice(0,5).map((question) => (
              <li
                key={question._id}
                className="bg-white px-4 py-2 shadow sm:rounded-lg sm:p-2"
              >
                <div className="grid grid-cols-12 text-sm">
                  <h1 className="col-span-1 rounded bg-blue-400 text-white text-center">
                    {question.vote}
                  </h1>
                  <Link className="ml-2 col-span-9" href={"/question/view/"+question.post_id} >
                  <h1 >{question.title}</h1></Link>
                  <h1 className="ml-4 col-span-2">
                    {getDate(question.date)}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default function XProfile({ profileUrl}) {
  const router = useRouter();

  const [tabs, setTabs] = useState([
    { name: "Profile", href: "#", current: true },
    { name: "Activity", href: "#", current: false },  
  ]);

  const handleTabClick = (index) => {
    const newTabs = tabs.map((tab, i) => {
      if (i === index) {
        return { ...tab, current: true };
      } else {
        return { ...tab, current: false };
      }
    });
    setTabs(newTabs);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});  
  useEffect(() => {
    const fetchData = async () => {
      console.log(profileUrl);
      const res = await fetch("/api/user/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },  
        body: JSON.stringify({
          username: profileUrl,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setUser(data);
      }
    };
    fetchData();
    console.log(profileUrl);
  }, [profileUrl]);
  
  function getDurationString(dateString) {
    const startDate = new Date(dateString);
    const endDate = new Date();
    const diffTime = Math.abs(endDate - startDate);
    const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365));
    const diffMonths = Math.floor((diffTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
  
    return `Member for ${diffYears} years, ${diffMonths} months`;
  }
  const props = {
    profileUrl: profileUrl
  };
  return (
    <div>
      <div className="flex border-b justify-between ">
        <div className="p-4 flex-shrink-0">
          <Image
            className="rounded-xl"
            src={user.imageUrl}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className="p-4 pl-0 flex-shrink-0">
          <h1 className="font-medium text-3xl">{user.name}</h1>
          <h1 className="my-2 font-light text-2xl">{user.title}</h1>
          <div className="flex">
            <CakeIcon className="text-gray-500 hover:text-gray-900" />
            <p className="mt-1 ml-2 text-gray-500">
              {getDurationString(user.createdAt)}
            </p>
          </div>

          <div className="flex space-x-2 mt-2 items-center">
            <Link
              href={user.facebook?user.facebook:""}
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
              href={user.twitter?user.twitter:""}
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
              href={user.github?user.github:""}
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
              className="pb-1 text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <LocationOnIcon fontSize="small" />{user.location}
            </Link>
          </div>
        </div>
        <div className="p-4 flex-shrink-0 ml-auto"></div>
      </div>
      <div className="mt-3 pl-4">
        <div className="sm:block">
          <nav className="flex space-x-4" aria-label="Tabs">
            {tabs.map((tab,index) => (
              <button
                key={tab.name}
                // href={tab.href}
                onClick={() => handleTabClick(index)}
                className={classNames(
                  tab.current
                    ? "bg-indigo-100 text-indigo-700"
                    : "text-gray-500 hover:text-gray-700",
                  "px-3 py-2 font-medium text-sm rounded-full"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>
      {tabs[0].current && <ProfileInfo {...props}/>}
      {tabs[1].current && <ProfileActivity {...props}/>}
    </div>
  );
}
