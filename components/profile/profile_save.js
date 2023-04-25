export default function ProfileSave() {
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
            {questions.map((question) => (
              <li
                key={question.id}
                className="bg-white px-4 py-2 shadow sm:rounded-lg sm:p-2"
              >
                <div className="grid grid-cols-12 text-sm">
                  <h1 className="col-span-1 rounded bg-blue-400 text-white text-center">
                    {question.likes}
                  </h1>
                  <h1 className="ml-2 col-span-8">
                    {question.title.slice(0, 40)}
                  </h1>
                  <h1 className="ml-5 col-span-3">
                    {question.datetime.slice(0, 10)}
                  </h1>
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
            {questions.map((question) => (
              <li
                key={question.id}
                className="bg-white px-4 py-2 shadow sm:rounded-lg sm:p-2"
              >
                <div className="grid grid-cols-12 text-sm">
                  <h1 className="col-span-1 rounded bg-blue-400 text-white text-center">
                    {question.likes}
                  </h1>
                  <h1 className="ml-2 col-span-8">
                    {question.title.slice(0, 40)}
                  </h1>
                  <h1 className="ml-5 col-span-3">
                    {question.datetime.slice(0, 10)}
                  </h1>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
