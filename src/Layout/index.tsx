import { Outlet } from "react-router";
import ConnectLogo from "../assets/connect-logo-white.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
interface User {
  email: string;
  password: string;
  name: string;
  avatarUrl: string;
}
export const Layout = () => {
  const userInfoString: string | null = localStorage.getItem("user");
  const userInfo: User =
    typeof userInfoString === "string" ? JSON.parse(userInfoString) : null;
  const [isActived, setIsActived] = useState<boolean>(false);

  const onLogout = (): void => {
    window.localStorage.removeItem("user");
  };
  return (
    <div className="w-full min-h-screen flex items-center relative">
      <div className="fixed top-0 right-0 w-5/6 h-14 bg-white border-b z-20">
        <div className="w-full h-full flex items-center justify-between pl-4 pr-6 gap-3">
          <div>
            Pathname: <span className="font-semibold">/main/email</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex flex-col justify-end items-end">
              <h6 className="font-bold text-sm">{userInfo.name}</h6>
              <p className="text-sm text-gray-500 mb-0">{userInfo.email}</p>
            </div>
            <div>
              <div
                className={`relative h-10 w-10 rounded-full bg-center bg-no-repeat bg-cover bg-[url('${userInfo.avatarUrl}')]`}
              ></div>
            </div>
            <button
              onClick={onLogout}
              className="flex items-center justify-center duration-100 shadow-md gap-2 px-4 py-2 text-md rounded-md   
    bg-red-500 text-white hover:bg-red-400 false "
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="power-off"
                className="svg-inline--fa fa-power-off fa-w-16 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff"
                width={16}
                height={16}
              >
                <path
                  fill="currentColor"
                  d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="h-screen w-1/6 flex flex-col items-center fixed z-50 top-0 left-0 ">
        <div className="h-14 flex-shrink-0 bg-[#0e1f33] w-full text-white flex items-center justify-start">
          <img
            className="max-w-full w-3/4 h-4/6"
            src={ConnectLogo}
            alt="connect"
          />
        </div>
        <div className="h-full flex items-center w-full">
          <div className="w-1/5 h-full bg-[#0e1f33] flex flex-col items-center justify-start">
            <Link
              className="text-white flex w-full h-14 items-center justify-center font-light text-md"
              to="home"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="home"
                className="svg-inline--fa fa-home fa-w-18 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="#fff"
                width={16}
                height={16}
              >
                <path
                  fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                ></path>
              </svg>
            </Link>
            <Link
              aria-current="page"
              className={`text-white flex w-full h-14 items-center justify-center font-light text-md ${
                isActived ? "bg-blue-700" : ""
              }`}
              to="email"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="envelope"
                className="svg-inline--fa fa-envelope fa-w-16 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="#fff"
                width={16}
                height={16}
              >
                <path
                  fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                ></path>
              </svg>
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-center font-light text-md"
              to="contact"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="user"
                className="svg-inline--fa fa-user fa-w-14 "
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="#fff"
                width={16}
                height={16}
              >
                <path
                  fill="currentColor"
                  d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="w-4/5 h-full bg-[#152943] flex flex-col items-start justify-start">
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/inbox"
            >
              Inbox
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/sent"
            >
              Sent
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/reminder"
            >
              Reminder
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/spam"
            >
              Spam
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/favorite"
            >
              Favorite
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/junks"
            >
              Junks
            </Link>
            <Link
              className="text-white flex w-full h-14 items-center justify-start pl-12 font-light text-md"
              to="email/drafts"
            >
              Drafts
            </Link>
          </div>
        </div>
      </div>
      <div className="w-1/6"></div>
      <div className="w-5/6 h-screen flex flex-col justify-start items-center relative  overflow-hidden">
        <div className="flex items-center h-full w-full">
          <Outlet />
          {/* <div className="w-1/4 h-full border-r border-gray-300 top-14 relative overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-3xl text-center">
                Please choose <br /> a folder
              </p>
            </div>
          </div>
          <div className="w-3/4 h-full top-14 relative">
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-3xl">Please choose a folder first</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
