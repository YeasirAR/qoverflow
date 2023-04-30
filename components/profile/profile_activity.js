import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProfileActivity({profileUrl}) {
  const tabs = [
    { name: "New", href: "#", current: true },
    { name: "Old", href: "#", current: false },
    { name: "Rep", href: "#", current: false },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const usr = localStorage.getItem("loggedInUser");
    if (usr) {
      setIsLoggedIn(true);
      setUser(JSON.parse(usr));
    } else {
      setIsLoggedIn(false);
    }
    const tempFunc = async () => {
      const res = await fetch("/api/user/find", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 200) {
        localStorage.setItem("loggedInUser", JSON.stringify(data));
      }
    };
    tempFunc();
  }, [user.username]);
  const [trquestions, setTrQuestions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/question/get_question_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrQuestions(data);
      }
    };
    fetchData();
  }, [user]);
  const [transwers, setTrAnswers] = useState(null);
  useEffect(() => {
    const fetchData = async () => {

      const res = await fetch("/api/answer/get_answer_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
        }),
      });
      const data = await res.json();
      console.log(data);
      if(res.status === 200) {
        setTrAnswers(data);
      }
      else {
        alert("Error");
      }
    };
    fetchData();
  }, [user]);
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
    <div className="grid grid-cols-2 mt-3">
      <div className="col-span-1 border border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Questions
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
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
          </div>
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
                  <Link className="ml-2 col-span-11" href={"/question/view/"+question.post_id} >
                  <h1 >
                    {question.title.slice(0, 60)}
                  </h1>
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-span-1 border border-gray-200 bg-white px-4 py-5 sm:px-6">
        <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Answers
            </h3>
          </div>
          <div className="ml-4 mt-2 flex-shrink-0">
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
          </div>
        </div>
        <div>
          <ul role="list" className="space-y-2 mt-2">
          {transwers && transwers.slice(0,5).map((question) => (
              <li
                key={question._id}
                className="bg-white px-4 py-2 shadow sm:rounded-lg sm:p-2"
              >
                <div className="grid grid-cols-12 text-sm">
                  <h1 className="col-span-1 rounded bg-blue-400 text-white text-center">
                    {question.vote}
                  </h1>
                  <Link className="ml-2 col-span-11" href={"/question/view/"+question.post_id} >
                  <h1>
                    {question.body.slice(4, 40)}
                  </h1></Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
