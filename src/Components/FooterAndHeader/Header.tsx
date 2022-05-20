/** @format */
import { off } from "process";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { isSignedInState } from "../../Recoil/RecoilState";
import FindProduct from "../HomeTrangChu/FindProduct";
export default function Header() {
  let [open, setOpen] = useState(false);
  const isSignedIn = useRecoilValue<boolean>(isSignedInState);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const find = (search: string) => {
    navigate(`/DanhMucSPByName/${search}`);
    setSearch("");
  };
  return (
    <nav className="w-full bg-[#d70018] fixed flex flex-col lg:justify-center justify-start items-center z-50">
      <div
        className="2xl:w-[1300px] lg:px-4 relative xl:w-[1200px] lg:w-[1000px] md:w-[700px] sm:w-[600px] w-full sm:px-0 px-[15px]
       z-50"
      >
        <div
          className="flex lg:flex-row flex-col justify-start lg:justify-between lg:items-center items-start
				 sm:py-[6px] md:py-[3px] py-[3px] lg:py-[4px]  text-white w-full text-[12px]"
        >

          <div className="w-full flex flex-row justify-start px-[8px]">
            <h2
              className="lg:w-[30%] sm:w-[22%] w-[30%] 
              lg:mt-[0px]  lg:mb-[0px] 
              sm:text-[16px] xl:text-[20px] text-[16px] 
              sm:py-[3px] xl:py-[0px] font-extrabold text-[rgb(255,255,255)] flex flex-col justify-center"
            >
              <Link to=""> G1-UlTr Phone</Link>
            </h2>
            <div className="xl:w-[400px] lg:w-[330px] md:w-[400px] sm:w-[350px] w-[50%] h-full leading-[64px] input-group">
              <span
                className="input-group-text cursor-pointer"
                id="basic-addon1"
                onClick={() => {
                  find(search);
                }}
              >

                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              <input
                className="form-control h-[40px] pl-3 rounded-xl p-[5px] outline-none
                 text-[#020000] text-[14px] w-full"
                placeholder="Bạn cần tìm gì?"
                aria-label="Username"
                aria-describedby="basic-addon1"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
            </div>
          </div>

          <div
            onClick={() => {
              setOpen(!open);
            }}
            className=" sm:text-3xl text-xl cursor-pointer absolute sm:top-5px] md:top-[6px] top-[8px] sm:m8-[0px] mr-[8px] right-4 lg:hidden"
          >
            <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
          </div>

          <ul
            className={`lg:w-[85%] absolute  bg-[#d70018] xl:pt-0 h-auto lg:static transition-all duration-500 
						lg:bg-inherit w-full lg:h-full flex lg:flex-row flex-col justify-starts lg:justify-between lg:items-center items-start 
            ${
              open
                ? "sm:top-[55px] md:top-[50px] opacity-100 px-2 py-3 top-[50px]"
                : "top-[-490px]"
            }`}
          >
            <li className="h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to=""
                className="flex flex-row justify-around items-center
                 text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
              >
                <i className="fa-solid fa-phone text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[25px] leading-5">Gọi mua hàng</span>
                  <span className="h-[25px] leading-5">1234.5678</span>
                </div>
              </Link>
            </li>
            <li className="h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to="/CuaHang"
                className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
              >
                <i className="fa-solid fa-location-dot text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[25px] leading-6">Cửa hàng</span>
                  <span className="h-[25px] leading-6">gần bạn</span>
                </div>
              </Link>
            </li>
            <li className="h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to="/SearchOrder"
                className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
              >
                <i className="fa-solid fa-truck text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[25px] leading-6">Tra cứu</span>
                  <span className="h-[25px] leading-6">đơn hàng</span>
                </div>
              </Link>
            </li>
            <li className="h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to="/cart"
                className="flex flex-row justify-around items-center text-white hover:bg-[#eb4a4a] px-1 rounded-xl"
              >
                <i className="fa-solid fa-bag-shopping text-[15px] lg:text-[18px] xl:text-[25px] mr-2"></i>
                <div className="h-[50px] w-auto flex flex-col justify-start items-start">
                  <span className="h-[50px] leading-[50px]">Giỏ hàng</span>
                </div>
              </Link>
            </li>
            <li className="h-full leading-[64px] flex flex-col justify-around items-center">
              <Link
                to={isSignedIn ? "/Smember-info" : "Smember"}
                className="h-[50px] flex flex-col justify-start items-center text-white p-[5px] hover:bg-[#eb4a4a] px-1 rounded-xl"
              >
                <i className="fa-solid fa-user text-[20px] h-[25px]"></i>
                <span className="inline-block h-[25px] leading-6">Smember</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
