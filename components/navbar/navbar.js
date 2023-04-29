import logo from "../../public/images/logo.png";
import yeasir_img from "../../public/images/yeasir.jpg";
import Image from "next/image";
import { Menu, Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Fragment, useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
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
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
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
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/profile" },
  { name: "Sign out", href: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({onSearchChange }) {
  const [search, setSearch] = useState('');
  const handleSearchChange = (event) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    onSearchChange(newSearch);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState({});  
  function showNotificationDialog() {
    setOpen(true);
  }
  useEffect(() => {
    const usr = localStorage.getItem("loggedInUser");
    if (usr) {
      // alert("You are already logged in " + JSON.parse(user).name);
      setIsLoggedIn(true);
      setUser(JSON.parse(usr));
    }
    else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Popover
          as="header"
          className={({ open }) =>
            classNames(
              open ? "fixed inset-0 z-40 overflow-y-auto" : "",
              "bg-white shadow-sm lg:static lg:overflow-y-visible"
            )
          }
        >
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                  <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                    <div className="flex flex-shrink-0 items-center">
                      <Link href="/">
                        <Image
                          className="block h-8 w-auto"
                          src={logo}
                          alt="qoverflow"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                    <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                      <div className="w-full">
                        <label htmlFor="search" className="sr-only">
                          Search
                        </label>
                        <div className="relative">
                          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <MagnifyingGlassIcon
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                          <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
                            placeholder="Search"
                            type="search"
                            value={search} onChange={handleSearchChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                    {/* Mobile menu button */}
                    <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                      <span className="sr-only">Open menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Popover.Button>
                  </div>
                  {isLoggedIn ? (
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                      {/* <Link href="#" className="text-sm font-medium text-gray-900 hover:underline">
                      Go Premium
                    </Link> */}
                      <Link
                        href="#"
                        className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                          onClick={showNotificationDialog}
                        />
                      </Link>

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-5 flex-shrink-0">
                        <div>
                          <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                            <span className="sr-only">Open user menu</span>
                            <Image
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                              height={1000}
                              width={1000}
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
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item key={userNavigation[0].name}>
                              {({ active }) => (
                                <Link
                                  href={userNavigation[0].href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                >
                                  {userNavigation[0].name}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item key={userNavigation[1].name}>
                              {({ active }) => (
                                <Link
                                  href={userNavigation[1].href}
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                >
                                  {userNavigation[1].name}
                                </Link>
                              )}
                            </Menu.Item>
                            <Menu.Item key={userNavigation[2].name}>
                              {({ active }) => (
                                <Link
                                  href={userNavigation[2].href}
                                  onClick={() =>
                                    localStorage.removeItem("loggedInUser")
                                  }
                                  className={classNames(
                                    active ? "bg-gray-100" : "",
                                    "block py-2 px-4 text-sm text-gray-700"
                                  )}
                                >
                                  {userNavigation[2].name}
                                </Link>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Transition>
                      </Menu>

                      <Link
                        href="/question/ask"
                        className="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      >
                        Ask Question
                      </Link>
                    </div>
                  ) : (
                    <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                      <Link
                        href="/auth/login"
                        className="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      >
                        Log in
                      </Link>
                      <Link
                        href="/auth/signup"
                        className="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      >
                        Sign up
                      </Link>
                    </div>
                  )}
                </div>
              </div>

              <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
                <div className="mx-auto max-w-3xl space-y-1 px-2 pt-2 pb-3 sm:px-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "hover:bg-gray-50",
                        "block rounded-md py-2 px-3 text-base font-medium"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                {isLoggedIn ? (
                  <div className="border-t border-gray-200 pt-4">
                    <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={user.imageUrl}
                          alt=""
                          height={1000}
                          width={1000}
                        />
                      </div>
                      <div className="ml-3">
                        <div className="text-base font-medium text-gray-800">
                          {user.name}
                        </div>
                        <div className="text-sm font-medium text-gray-500">
                          {user.email}
                        </div>
                      </div>
                      <button
                        type="button"
                        className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                      >
                        <span className="sr-only">View notifications</span>
                        <BellIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                          onClick={showNotificationDialog}
                        />
                      </button>
                    </div>
                    <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                      <Link
                        key={userNavigation[0].name}
                        href={userNavigation[0].href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {userNavigation[0].name}
                      </Link>
                      <Link
                        key={userNavigation[1].name}
                        href={userNavigation[1].href}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {userNavigation[1].name}
                      </Link>
                      <Link
                        key={userNavigation[2].name}
                        href={userNavigation[2].href}
                        onClick={() => localStorage.removeItem("loggedInUser")}
                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                      >
                        {userNavigation[2].name}
                      </Link>
                    </div>
                  </div>
                ) : (
                  <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                    <Link
                      href="/auth/login"
                      className="flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                    >
                      Log in
                    </Link>
                    <Link
                      href="/auth/signup"
                      className="mt-3 flex items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </Popover.Panel>
            </>
          )}
        </Popover>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Notifications
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        {/* Replace with your content */}
                        <h1 className="text-center mt-5 font-medium text-lg">
                          No Notifications
                        </h1>
                        <div className="absolute inset-0 px-4 sm:px-6">
                          <div
                            className="h-full border-2 border-dashed border-gray-200"
                            aria-hidden="false"
                          />
                        </div>
                        {/* /End replace */}
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
