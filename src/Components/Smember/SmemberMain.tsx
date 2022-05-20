import React, { useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Link, useParams } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MemberInfo from "./MemberInfo";
import PaymentHistory from "./PaymentHistory";
import YourAccount from "./YourAccount";
import Support from "./Support";

type Props = {};

function SmemberMain({}: Props) {
  const navList = document.getElementsByClassName("nav");
  const url = useParams();

  const setActiveNav = () => {
    for (let i = 0; i < navList.length; i++) {
      navList[i].classList.remove("nav-active");
      navList[i].classList.add("nav-non-active");
    }
    if (url["*"] === "lich-su-mua-hang") {
      navList[1].classList.remove("nav-non-active");
      navList[1].classList.add("nav-active");
    } else if (url["*"] === "tai-khoan") {
      navList[2].classList.remove("nav-non-active");
      navList[2].classList.add("nav-active");
    } else if (url["*"] === "ho-tro") {
      navList[3].classList.remove("nav-non-active");
      navList[3].classList.add("nav-active");
    } else {
      navList[0].classList.remove("nav-non-active");
      navList[0].classList.add("nav-active");
    }
  };
  useEffect(() => {
    setActiveNav();
  });

  return (
    <div
      className="mt-20 w-11/12 mx-auto
        2xl:w-[1300px] 
		xl:w-[1200px]
		lg:w-[1000px] 
		md:w-[700px] 
		sm:w-[600px] 
		w-[400px]'
        md:grid md:grid-flow-col grid-flow-col gap-3"
    >
      <div className="rounded-2xl shadow-xl border-[1px] border-gray-300 h-max">
        <Link to="">
          <div className="grid grid-flow-row grid-cols-5 m-2 p-2 nav nav-active cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <p className="font-semibold text-17px col-start-2 col-span-4 lg:text-[20px] md:text-[15px] ">
              Trang chủ
            </p>
          </div>
        </Link>
        <Link to="lich-su-mua-hang">
          <div
            onClick={setActiveNav}
            className="grid grid-flow-row grid-cols-5 m-2 p-2 nav nav-non-active cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              />
            </svg>
            <p className="font-semibold text-17px col-start-2 col-span-4  lg:text-[20px] md:text-[15px] ">
              Lịch sử mua hàng
            </p>
          </div>
        </Link>
        <Link to="tai-khoan">
          <div className="grid grid-flow-row grid-cols-5 m-2 p-2 nav nav-non-active cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="font-semibold text-17px col-start-2 col-span-4  lg:text-[20px] md:text-[15px] ">
              Tài khoản của bạn
            </p>
          </div>
        </Link>
        <Link to="ho-tro">
          <div className="grid grid-flow-row grid-cols-5 m-2 p-2 nav nav-non-active cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z"
              />
            </svg>
            <p className="font-semibold text-17px col-start-2 col-span-4  lg:text-[20px] md:text-[15px] ">
              Hỗ trợ
            </p>
          </div>
        </Link>
        <Link to="/Smember" onClick={() => firebase.auth().signOut()}>
          <div className="grid grid-flow-row grid-cols-5 m-2 p-2 nav-non-active cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <p className="font-semibold text-17px col-start-2 col-span-4  lg:text-[20px] md:text-[15px]">
              Thoát tài khoản
            </p>
          </div>
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<MemberInfo />}></Route>
        <Route path="/lich-su-mua-hang" element={<PaymentHistory />}></Route>
        <Route path="/tai-khoan" element={<YourAccount />}></Route>
        <Route path="/ho-tro" element={<Support />}></Route>
      </Routes>
    </div>
  );
}

export default SmemberMain;
