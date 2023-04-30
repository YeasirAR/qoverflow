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
import Editor from "../../components/editor/editor";
import Link from "next/link";
import { useRouter } from "next/router";
const user = {
  name: "Yeasir Arafat",
  email: "yeasir402@gmail.com",
  imageUrl: "/images/yeasir.jpg",
};
// const comments = [
//   {
//     id: 1,
//     name: "Leslie Alexander",
//     date: "4d ago",
//     imageUrl: "/images/anna.jpeg",
//     body: "Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.",
//   },
// ];
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: false },
  { name: "Tags", href: "/tags", icon: ArrowTrendingUpIcon, current: false },
  { name: "Users", href: "/users", icon: UserGroupIcon, current: false },
  { name: "Contact", href: "/contact", icon: ChatBubbleBottomCenterTextIcon, current: false },
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

// const answers = [
//   {
//     id: "81614",
//     likes: "29",
//     replies: "11",
//     views: "2.7k",
//     author: {
//       name: "Yeasir Arafat",
//       imageUrl: "/images/yeasir.jpg",
//       href: "#",
//     },
//     date: "December 9 at 11:43 AM",
//     datetime: "2020-12-09T11:43:00",
//     href: "#",
//     title: "How to cleanly make multiple elements movable anywhere?",
//     body: `
//       <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
//     `,
//   },
//   {
//     id: "81614",
//     likes: "29",
//     replies: "11",
//     views: "2.7k",
//     author: {
//       name: "Yeasir Arafat",
//       imageUrl: "/images/yeasir.jpg",
//       href: "#",
//     },
//     date: "December 9 at 11:43 AM",
//     datetime: "2020-12-09T11:43:00",
//     href: "#",
//     title: "How to cleanly make multiple elements movable anywhere?",
//     body: `
//       <p>The problem is: I don't wanna test for every single date field, like year, month, day, hour, minute, etc., but if I simply compare the two values, it'll always display both values, since the time precision goes beyond seconds, making the dates different even though I never edited that particular post.</p>
//     `,
//   },
// ];
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

export default function ViewQuestion({question_id}) {
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [editorData, setEditorData] = useState("");

  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  const [search, setSearch] = useState("");
  const [question, setQuestion] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/question/get_question_one", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setQuestion(data);      }
    };
    fetchData();
  }, [question_id]);
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

  const [answers, setAnswers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/answer/get_answers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setAnswers(data);
        // alert("Answers loaded successfully");
      }
    };
    fetchData();
  }, [question_id]);

  const addAnswer = async () => {
    const res = await fetch("/api/answer/add_answer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: editorData,
        post_id: question_id,
        author: user.name,
        authorImageUrl: user.imageUrl,
        authorUsername: user.username,
      }),
    });
    const resp = await res.json();
    
    // if(resp.status === 200){
    //   alert(resp.message);
    // }
    // else{
    //   alert(resp.message);
    // }
    const fetchData = async () => {
      const res = await fetch("/api/question/update_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "answer",
        }),
      });
      const data = await res.json();
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          todo: "answer",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    window.location.reload();
  };
  const [comments, setComments] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/comment/get_comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setComments(data);
        // alert("Comments loaded successfully");
      }
    };
    fetchData();
  }, [question_id]);

  const [comment_body, setCommentBody] = useState("");
  const addComment = async () => {
    const res = await fetch("/api/comment/add_comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: comment_body,
        post_id: question_id,
        author: user.name,
        authorImageUrl: user.imageUrl,
        authorUsername: user.username,
      }),
    });
    const resp = await res.json();
    // if(resp.status === 200){
    //   alert(resp.message);
    // }
    // else{
    //   alert(resp.message);
    // }
  };

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
  const [questions, setQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/question/get_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          search: "",
          // sortby: sort_by,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setQuestions(data);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/question/update_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "view",
        }),
      });
      const data = await res.json();
    };
    fetchData();
  }, [question_id]);
  
  const increaseVote =(username) => {
    const fetchData = async () => {
      const res = await fetch("/api/question/update_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "upvote",
        }),
      });
      const data = await res.json();
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          todo: "upvote",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    window.location.reload();
  };
  const decreaseVote =(username) => {
    const fetchData = async () => {
      const res = await fetch("/api/question/update_question", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "downvote",
        }),
      });
      const data = await res.json();
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          todo: "downvote",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    window.location.reload();
  };
  const increaseVoteAnswer =(username) => {
    const fetchData = async () => {
      const res = await fetch("/api/answer/update_answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "upvote",
        }),
      });
      const data = await res.json();
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          todo: "upvote",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    window.location.reload();
  };
  const decreaseVoteAnswer =(username) => {
    const fetchData = async () => {
      const res = await fetch("/api/answer/update_answer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: question_id,
          todo: "downvote",
        }),
      });
      const data = await res.json();
    };
    fetchData();
    const fetchData2 = async () => {
      const res = await fetch("/api/user/update_vote_view", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          todo: "downvote",
        }),
      });
      const data = await res.json();
    };
    fetchData2();
    window.location.reload();
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
            <main className="lg:col-span-9 xl:col-span-7">
              <div className="mt-0">
                <ul role="list" className="space-y-4">
                    {question && (<li
                      key={question.post_id}
                      className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                    >
                      <article
                        aria-labelledby={"question-title-"+ question.post_id}
                      >
                        <div>
                          <div className="flex space-x-3">
                            <div className="flex-shrink-0">
                              <Image
                                className="h-10 w-10 rounded-full"
                                src={question.authorImageUrl}
                                height={1000}
                                width={1000}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-medium text-gray-900">
                                <a
                                  href={"/profile/"+question.authorUsername}
                                  className="hover:underline"
                                >
                                  {question.author}
                                </a>
                              </p>
                              <p className="text-sm text-gray-500">
                                <a
                                  href={question.href}
                                  className="hover:underline"
                                >
                                  <time dateTime={question.date}>
                                    {getDate(question.date)}
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
                                onClick={() => increaseVote(question.authorUsername)}
                              />
                              <h1 className="font-medium text-lg text-gray-900 ml-3">
                                {question.vote}
                              </h1>
                              <Downvote
                                className="h-9 w-9 hover:text-gray-500"
                                aria-hidden="true"
                                onClick={() => decreaseVote(question.authorUsername)}
                              />
                              {/* <SaveRoundedIcon
                                className="h-6 w-6 hover:text-gray-500"
                                aria-hidden="true"
                              /> */}
                            </div>
                            <div className="col-span-11">
                              <div>
                                <h2
                                  id={"question-title-" + question.post_id}
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
                                {question.tags_list.map((tag,index) => (
                                  <button
                                  key={index}
                                  type="button"
                                  className="inline-flex items-center rounded-sm border border-gray-500 bg-white px-1 py-0.5 text-sm font-normal text-gray-500 hover:bg-blue-600 indigo-500 hover:text-white focus:outline-none"
                                >
                                  {tag}
                                </button>
                                ))}
                                
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </li>)}
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
                          {comments && comments.map((comment) => (
                            <li key={comment._id}>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <Image
                                    height={100}
                                    width={100}
                                    className="h-10 w-10 rounded-full"
                                    src={comment.authorImageUrl}
                                    alt=""
                                  />
                                </div>
                                <div>
                                  <div className="text-sm">
                                    <a
                                      href="#"
                                      className="font-medium text-gray-900"
                                    >
                                      {comment.author}
                                    </a>
                                  </div>
                                  <div className="mt-1 text-sm text-gray-700">
                                    <p>{comment.body}</p>
                                  </div>
                                  <div className="mt-2 space-x-2 text-sm">
                                    <span className="font-medium text-gray-500">
                                      {getDate(comment.date)}
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
                        {isLoggedIn? (<div className="flex space-x-3">
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
                                value={comment_body}
                                onChange={(e) => setCommentBody(e.target.value)}
                              />
                            </div>
                            <div className="mt-3 flex items-center justify-between">
                              <a
                                href="#"
                                className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
                              >
                              </a>
                              <button
                                type="submit"
                                onClick={addComment}
                                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                              >
                                Comment
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>):(<Link href="/auth/login">Login to add comment</Link>)}
                      
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
                      {/* {answers.length + " "}Answers */}
                      Answers
                    </h2>
                  </div>
                  {/* <h1 className="sr-only">Recent questions</h1> */}
                  <ul role="list" className="space-y-2">
                    {answers && answers.map((answer) => (
                      <li
                        key={answer._id}
                        className="bg-white px-4 shadow  sm:p-6"
                      >
                        <article aria-labelledby={"answer-title-" + answer._id}>
                          <div>
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0">
                                <Image
                                  className="h-10 w-10 rounded-full"
                                  src={answer.authorImageUrl}
                                  height={1000}
                                  width={1000}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <Link
                                    href={"/profile/"+answer.authorUsername}
                                    className="hover:underline"
                                  >
                                    {answer.author}
                                  </Link>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <Link
                                    href="#"
                                    className="hover:underline"
                                  >
                                    <time dateTime={answer.date}>
                                      {getDate(answer.date)}
                                    </time>
                                  </Link>
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
                                  onClick={() => increaseVoteAnswer(answer.authorUsername)}
                                />
                                <h1 className="font-medium text-lg text-gray-900 ml-3">
                                  {answer.vote}
                                </h1>
                                <Downvote
                                  className="h-9 w-9 hover:text-gray-500"
                                  aria-hidden="true"
                                  onClick={() => decreaseVoteAnswer(answer.authorUsername)}
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
                    <div className="bg-white px-4  sm:p-6">
                    <h1 className="mb-2 text-2xl font-medium text-gray-700">
                        {" "}
                        Add Your Answer Here
                      </h1>
                      <Editor
                        name="description"
                        onChange={(data) => {
                          setEditorData(data);
                        }}
                        editorLoaded={editorLoaded}
                      />

                      {/* {JSON.stringify(data)} */}
                      {isLoggedIn && 
                      <Button variant="outlined" size="medium" className="mt-2" onClick={addAnswer}>
                        Post Your Answer
                      </Button>
      
                      }
                    </div>
                    
                    <div className="bg-white px-4 mb-2 shadow">
                    {!isLoggedIn && <div><h1 className="mb-2 text-xl font-medium text-gray-700">
                        {" "}
                        You need to login to post your answer
                      </h1>
                      <Link href="/auth/login"><Button variant="outlined" size="medium" className="mt-2">
                        Login or Signup 
                      </Button></Link> </div>}
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
                          {questions && questions.slice(0,5).map((post) => (
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
